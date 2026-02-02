import { Pattern } from 'fabric';

export const createGridPattern = (canvas, options) => {
  const { gap = 24, dotSize = 1, color = '#000000ff' } = options;

  const patternCanvas = document.createElement('canvas');
  patternCanvas.width = gap;
  patternCanvas.height = gap;

  const ctx = patternCanvas.getContext('2d');
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(gap / 2, gap / 2, dotSize, 0, Math.PI * 2);
  ctx.fill();

  const pattern=new Pattern({ source: patternCanvas, repeat: 'repeat' });
  canvas.set({
    backgroundColor: pattern,
    backgroundVpt: true,
  });
  canvas.requestRenderAll();
};

// // import { Pattern } from 'fabric';

// // export const createGridPattern = (canvas, {
// //   gap = 24,
// //   dotSize = 1,
// //   color = '#2a2a2e'
// // }) => {
// //   const patternCanvas = document.createElement('canvas');
// //   patternCanvas.width = gap;
// //   patternCanvas.height = gap;

// //   const ctx = patternCanvas.getContext('2d');
// //   ctx.fillStyle = color;
// //   ctx.beginPath();
// //   ctx.arc(gap / 2, gap / 2, dotSize, 0, Math.PI * 2);
// //   ctx.fill();

// //   const pattern = new Pattern({
// //     source: patternCanvas,
// //     repeat: 'repeat'
// //   });

// //   canvas.setBackgroundColor(pattern, canvas.requestRenderAll.bind(canvas));
// //   canvas.backgroundVpt = true;
// // };
// import { Pattern } from 'fabric';

// export const createGridPattern = (canvas, options) => {
//   const { 
//     gap = 24, 
//     dotSize = 1, 
//     dotColor = '#333333', 
//     backgroundColor = '#0e0e11' 
//   } = options;

//   const patternCanvas = document.createElement('canvas');
//   patternCanvas.width = gap;
//   patternCanvas.height = gap;
//   const ctx = patternCanvas.getContext('2d');

//   // 1. Draw the background color inside the pattern
//   ctx.fillStyle = backgroundColor;
//   ctx.fillRect(0, 0, gap, gap);

//   // 2. Draw the dot at (0,0) so it aligns with Fabric's coordinate system
//   ctx.fillStyle = dotColor;
//   ctx.beginPath();
//   ctx.arc(0, 0, dotSize, 0, Math.PI * 2); 
//   ctx.fill();

//   const pattern = new Pattern({ 
//     source: patternCanvas, 
//     repeat: 'repeat' 
//   });

//   canvas.set({
//     backgroundColor: pattern,
//     // backgroundVpt: true ensures the grid moves/scales when you pan/zoom
//     backgroundVpt: true, 
//   });
  
//   canvas.requestRenderAll();
// };