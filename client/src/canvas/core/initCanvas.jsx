import * as fabric from 'fabric';
import { CANVAS_CONFIG } from './canvasConfig';

export const initCanvas = (canvasEl) => {
  const parent = canvasEl.parentElement;

  const canvas = new fabric.Canvas(canvasEl, {
    ...CANVAS_CONFIG,
    width: parent.clientWidth,
    height: parent.clientHeight,
  });
  // Function to center the view to 0,0 (or any point)
  canvas.centerViewport = function() {
    const vpt = this.viewportTransform.slice();
    vpt[4] = this.width / 2;
    vpt[5] = this.height / 2;
    this.setViewportTransform(vpt);
  };

  canvas.centerViewport();
  return canvas;
};

// Use this code in fabricCanvas.jsx
