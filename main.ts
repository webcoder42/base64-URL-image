import { applyColormap } from "./applyColormap";
import { base64ToUint8Array } from "./utils";

const base64Image = "/* Base64 encoded image data here */";

const uint8Array = base64ToUint8Array(base64Image);

const img = new Image();
img.src = "data:image/png;base64," + base64Image;

img.onload = () => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');

    if (ctx) { // Check if ctx is not null
        canvas.width = img.width;
        canvas.height = img.height;

        ctx.drawImage(img, 0, 0);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        const colorizedImageData = applyColormap(imageData);

        ctx.putImageData(colorizedImageData, 0, 0);
    } else {
        console.error("Failed to get 2D context for canvas.");
    }
};
