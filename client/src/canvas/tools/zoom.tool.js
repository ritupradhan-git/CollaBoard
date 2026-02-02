export const enableZoom = (canvas) => {
  canvas.on('mouse:wheel', (opt) => {
    opt.e.preventDefault();
    opt.e.stopPropagation();

    let zoom = canvas.getZoom();
    zoom *= 0.999 ** opt.e.deltaY;

    zoom = Math.min(Math.max(zoom, 0.3), 4);

    const point = canvas.getScenePoint
      ? canvas.getScenePoint(opt.e)
      : { x: opt.e.offsetX, y: opt.e.offsetY };

    canvas.zoomToPoint(point, zoom);
  });
};
