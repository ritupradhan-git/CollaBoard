// Global config of canvas
export const CANVAS_CONFIG = {
  /**
   * No infinite canvas, just a very big workspace
   */
  width: 5000,
  height: 5000,
  
  /**
   * Background color of the canvas itself.
   * This is NOT the grid.
   * Grid will be a separate visual layer/pattern.
   */
  backgroundColor: '#bebebeff',

  /**
   * Enables selection box (click + drag)
   * Required for pointer tool to work properly.
   */
  selection: true,

  /**
   * Keeps object stacking order stable
   * (prevents objects from jumping layers on select)
   */
  preserveObjectStacking: true,

  /**
   * Improves performance for large canvases
   * Objects outside viewport won’t re-render unnecessarily
   */
  renderOnAddRemove: true,

  /**
   * Default behavior when clicking empty space
   */
  stopContextMenu: true,
};
