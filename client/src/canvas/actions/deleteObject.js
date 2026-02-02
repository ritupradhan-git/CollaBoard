export const deleteObject = (canvas, object) => {
  if (!canvas || !object) return;

  canvas.remove(object);
  canvas.discardActiveObject();
  canvas.requestRenderAll();
};
