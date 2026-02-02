let panX = 0;
let panY = 0;

export const enablePanTool = (canvas) => {
  let isPanning = false;
  let lastX, lastY;

  canvas.on('mouse:down', (opt) => {
    if (opt.e.spaceKey) {
      isPanning = true;
      lastX = opt.e.clientX;
      lastY = opt.e.clientY;
    }
  });

  canvas.on('mouse:move', (opt) => {
    if (!isPanning) return;

    const dx = opt.e.clientX - lastX;
    const dy = opt.e.clientY - lastY;

    panX += dx;
    panY += dy;

    canvas.relativePan({ x: dx, y: dy });

    document.documentElement.style.setProperty(
      '--grid-x',
      `${panX}px`
    );
    document.documentElement.style.setProperty(
      '--grid-y',
      `${panY}px`
    );

    lastX = opt.e.clientX;
    lastY = opt.e.clientY;
  });

  canvas.on('mouse:up', () => {
    isPanning = false;
  });
};
