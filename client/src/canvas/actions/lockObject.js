export const lockObject = (canvas, object, locked = true) => {
  if (!canvas || !object) return;

  object.set({
    selectable: !locked,
    evented: !locked,
    lockMovementX: locked,
    lockMovementY: locked,
    lockScalingX: locked,
    lockScalingY: locked,
    lockRotation: locked,
    hasControls: !locked,
    hoverCursor: locked ? 'not-allowed' : 'move',
  });

  canvas.requestRenderAll();
};
