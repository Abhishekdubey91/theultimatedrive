"use client";

import { useEffect, useRef, useState } from "react";
import { MotionValue, useTransform } from "framer-motion";

interface BMWScrollCanvasProps {
    scrollYProgress: MotionValue<number>;
    totalFrames?: number;
    imageFolderPath?: string;
}

export default function BMWScrollCanvas({
    scrollYProgress,
    totalFrames = 240,
    imageFolderPath = "/images/bmw-sequence",
}: BMWScrollCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [imagesLoaded, setImagesLoaded] = useState(false);
    const [loadingProgress, setLoadingProgress] = useState(0);

    // Preload all images
    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;

        const loadImage = (index: number) => {
            return new Promise<void>((resolve) => {
                const img = new Image();
                img.src = `${imageFolderPath}/${index}.jpg`;
                img.onload = () => {
                    loadedImages[index - 1] = img;
                    loadedCount++;
                    setLoadingProgress(Math.floor((loadedCount / totalFrames) * 100));
                    resolve();
                };
                img.onerror = () => {
                    console.error(`Failed to load image: ${index}.jpg`);
                    resolve();
                };
            });
        };

        Promise.all(
            Array.from({ length: totalFrames }, (_, i) => loadImage(i + 1))
        ).then(() => {
            setImages(loadedImages);
            setImagesLoaded(true);
        });
    }, [totalFrames, imageFolderPath]);

    // Setup canvas with high DPI support
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const setupCanvas = () => {
            const dpr = window.devicePixelRatio || 1;
            const rect = canvas.getBoundingClientRect();

            // Set actual size in memory (scaled for high DPI)
            canvas.width = rect.width * dpr;
            canvas.height = rect.height * dpr;

            // Set display size (CSS pixels)
            canvas.style.width = `${rect.width}px`;
            canvas.style.height = `${rect.height}px`;

            // Scale all drawing operations by dpr
            const ctx = canvas.getContext("2d");
            if (ctx) {
                ctx.scale(dpr, dpr);
                ctx.imageSmoothingEnabled = true;
                ctx.imageSmoothingQuality = "high";
            }
        };

        setupCanvas();
        window.addEventListener("resize", setupCanvas);
        return () => window.removeEventListener("resize", setupCanvas);
    }, []);

    // Render frame based on scroll progress
    useEffect(() => {
        if (!imagesLoaded || images.length === 0) return;

        const unsubscribe = scrollYProgress.on("change", (progress) => {
            const canvas = canvasRef.current;
            if (!canvas) return;

            const ctx = canvas.getContext("2d");
            if (!ctx) return;

            // Calculate frame index (0 to totalFrames - 1)
            const frameIndex = Math.min(
                Math.floor(progress * totalFrames),
                totalFrames - 1
            );

            const img = images[frameIndex];
            if (!img) return;

            const rect = canvas.getBoundingClientRect();

            // Clear canvas
            ctx.clearRect(0, 0, rect.width, rect.height);

            // Calculate dimensions for object-fit: cover
            const imgRatio = img.width / img.height;
            const canvasRatio = rect.width / rect.height;

            let drawWidth = rect.width;
            let drawHeight = rect.height;
            let offsetX = 0;
            let offsetY = 0;

            if (imgRatio > canvasRatio) {
                // Image is wider than canvas ratio - cover height, crop sides
                drawWidth = rect.height * imgRatio;
                offsetX = (rect.width - drawWidth) / 2;
            } else {
                // Image is narrower than canvas ratio - cover width, crop top/bottom
                drawHeight = rect.width / imgRatio;
                offsetY = (rect.height - drawHeight) / 2;
            }

            // Draw the image
            ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
        });

        // Trigger initial render
        scrollYProgress.set(scrollYProgress.get());

        return () => unsubscribe();
    }, [imagesLoaded, images, scrollYProgress, totalFrames]);

    return (
        <div className="absolute inset-0 w-full h-full bg-bmw-abyss">
            {!imagesLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                    <div className="w-64 h-1 bg-carbon-gray rounded-full overflow-hidden">
                        <div
                            className="h-full bg-bmw-red transition-all duration-300 ease-out"
                            style={{ width: `${loadingProgress}%` }}
                        />
                    </div>
                    <p className="mt-4 font-orbitron text-bmw-red tracking-widest text-sm">
                        LOADING BMW EXPERIENCE {loadingProgress}%
                    </p>
                </div>
            )}
            <canvas
                ref={canvasRef}
                className="w-full h-full object-contain"
                style={{ opacity: imagesLoaded ? 1 : 0.3 }}
            />
        </div>
    );
}
