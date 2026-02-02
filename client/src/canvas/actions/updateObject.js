//canvas--> instance
//object-->fabric object (Rect,Circle,Text,etc)
//updates -> properties that will change (position,color,size);
export const updateObject = (canvas, object, updates = {}) => {
  if (!canvas || !object) return;//if canvas isnt initialized and also object isnt selected

  object.set({
    ...updates,
  });

  object.setCoords();
  canvas.requestRenderAll();
};
