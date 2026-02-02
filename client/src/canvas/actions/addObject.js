export const addObject=(canvas,object)=>{
    canvas.add(object);
    canvas.setActiveObject(object);
    canvas.requestRenderAll();
}