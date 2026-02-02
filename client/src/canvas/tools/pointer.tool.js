import { updateObject } from '../actions/updateObject';
import { deleteObject } from '../actions/deleteObject';
export const enablePointer = (canvas) => {
  if (!canvas) return;

  // Disable drawing modes
  canvas.isDrawingMode = false;

  // Enable selection
  canvas.selection = true;

  // Make objects interactive
  canvas.forEachObject((obj) => {
    obj.selectable = true;
    obj.evented = true;
  });
  const handleKeyDown = (e) => {
    if (e.key === 'Delete' || e.key === 'Backspace') {
      const obj = canvas.getActiveObject();
      if (!obj) return;

      deleteObject(canvas, obj);
    }
  };

  window.addEventListener('keydown', handleKeyDown);

  // optional cleanup (when switching tools)
  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };
};

/* ───────── OBJECT ACTIONS ───────── */

// Move object
export const moveObject = (canvas, dx = 0, dy = 0) => {
  const obj = canvas.getActiveObject();
  if (!obj) return;

  updateObject(canvas, obj, {
    left: obj.left + dx,
    top: obj.top + dy,
  });
};

// Rotate object
export const rotateObject = (canvas, angle = 15) => {
  const obj = canvas.getActiveObject();
  if (!obj) return;

  updateObject(canvas, obj, {
    angle: (obj.angle || 0) + angle,
  });
};

// Scale object
export const scaleObject = (canvas, factor = 0.1) => {
  const obj = canvas.getActiveObject();
  if (!obj) return;

  const minScale = 0.1;

  const newScaleX = Math.max(minScale, (obj.scaleX || 1) + factor);
  const newScaleY = Math.max(minScale, (obj.scaleY || 1) + factor);

  updateObject(canvas, obj, {
    scaleX: newScaleX,
    scaleY: newScaleY,
  });
};


