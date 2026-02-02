import React, { useState, useEffect } from 'react';
import FabricCanvas from './FabricCanvas';
import { enablePointer } from './tools/pointer.tool.js';
import { useCanvas } from '../hooks/useCanvas.jsx';
import { useTool } from '../hooks/useTool.jsx';
import { toolAction as applyTool } from './tools/toolAction.js';
import {
  Layers,
  Image,
  MousePointer2,
  Square,
  Circle,
  Type,
  ChevronDown,
  Plus,
  Download,
  Share2,
  Play,
  Undo2,
  Redo2,
  Settings,
  MessageSquare,
  CheckCircle2,
  MoreHorizontal,
  Search,
  Component,
  Grid,
  Eye,
  Lock,
  Move,
  Minus,
} from 'lucide-react';
import './Canvas.css';

const Canvas = () => {
  const [activeTab, setActiveTab] = useState('design');
  const [zoom, setZoom] = useState(100);
  const [selectedTool, setSelectedTool] = useState('pointer');
  const canvas = useCanvas(); // get Fabric canvas

  // Collaborators mock
  const collaborators = [
    {
      id: 1,
      name: 'Alex',
      color: '#10B981',
      initials: 'A',
      x: '60%',
      y: '40%',
    },
    {
      id: 2,
      name: 'Sarah',
      color: '#F59E0B',
      initials: 'S',
      x: '75%',
      y: '65%',
    },
  ];

  return (
    <div className="app-container">
      {/* --------------------------------------------------------- */}
      {/* LAYER 0: THE INFINITE CANVAS (Background)                 */}
      {/* --------------------------------------------------------- */}
      <div
        className="canvas-layer"
        style={{
    transform: `scale(${zoom / 100})`,
    transformOrigin: 'center center',
  }}
        onWheel={(e) => {
          if (e.ctrlKey) {
            setZoom((z) => Math.max(10, Math.min(200, z - e.deltaY * 0.1)));
          }
        }}
      >
        {/* Infinite Grid Pattern */}
        <div
          style={{
            backgroundSize: `${20 * (zoom / 100)}px ${20 * (zoom / 100)}px`,
            backgroundPosition: 'center',
          }}
        />

        {/* Scalable Content Area */}
        <div
          className="canvas-scaler"
        >
          {/* The "Artboard" */}
          <div className="artboard">
            <FabricCanvas />
          </div>

          {/* Floating Cursors (Simulated Multiplayer) */}
          {collaborators.map((c) => (
            <div
              key={c.id}
              className="multiplayer-cursor"
              style={{ left: c.x, top: c.y }}
            >
              <MousePointer2 size={16} fill={c.color} color={c.color} />
              <span
                className="cursor-label"
                style={{ backgroundColor: c.color }}
              >
                {c.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* --------------------------------------------------------- */}
      {/* LAYER 1: UI OVERLAY (Floating Panels)                     */}
      {/* --------------------------------------------------------- */}
      <div className="ui-layer">
        {/* 1. Header (Floating Top) */}
        <header className="ui-header">
          <div className="header-left">
            <div className="app-logo">
              <div className="logo-icon" />
            </div>
            <div className="divider-vertical" />
            <div className="breadcrumb">
              <span className="text-muted">Team /</span>
              <span className="font-medium">Landing Page V2</span>
            </div>
          </div>

          <div className="header-center">
            {/* Tool Selector */}
            <div className="tool-selector">
              <button
                className={`tool-btn ${selectedTool === 'pointer' ? 'active' : ''}`}
                onClick={() => {
                  setSelectedTool('pointer');
                  applyTool('pointer', canvas);
                }}
              >
                <MousePointer2 size={15} />
              </button>
              <button
                className={`tool-btn ${selectedTool === 'rectangle' ? 'active' : ''}`}
                onClick={() => {
                  setSelectedTool('rectangle');
                  applyTool('rectangle', canvas);
                }}
              >
                <Square size={15} />
              </button>
              <button
                className={`tool-btn ${selectedTool === 'text' ? 'active' : ''}`}
                onClick={() => {
                  setSelectedTool('text');
                  applyTool('text', canvas);
                }}
              >
                <Type size={15} />
              </button>
              <button
                className={`tool-btn ${selectedTool === 'component' ? 'active' : ''}`}
                onClick={() => {
                  setSelectedTool('component');
                  applyTool('component',canvas);
                }}
              >
                <Component size={15} />
              </button>
            </div>
          </div>

          <div className="header-right">
            <div className="collaborator-stack">
              {collaborators.map((c) => (
                <div key={c.id} className="avatar">
                  {c.initials}
                </div>
              ))}
              <div className="avatar add">
                <Plus size={12} />
              </div>
            </div>
            <button className="btn-primary">
              <Play size={12} fill="currentColor" /> Preview
            </button>
            <div className="zoom-indicator">
              {Math.round(zoom)}% <ChevronDown size={10} />
            </div>
          </div>
        </header>

        {/* 2. Left Sidebar (Floating Left) */}
        <aside className="ui-panel panel-left">
          <div className="panel-search">
            <Search size={14} className="text-muted" />
            <input placeholder="Search layers..." />
          </div>

          <div className="panel-scroll-area">
            <div className="tree-section">
              <div className="tree-header">Pages</div>
              <div className="tree-item active">
                <div className="tree-indent" /> <Layers size={14} /> Home
              </div>
              <div className="tree-item">
                <div className="tree-indent" /> <Layers size={14} /> About
              </div>
            </div>

            <div className="tree-section mt-4">
              <div className="tree-header">Layers</div>

              <div className="tree-item expanded">
                <ChevronDown size={12} /> <Square size={14} />
                <span>Desktop 1</span>
                <div className="item-actions">
                  <Lock size={12} />
                </div>
              </div>

              <div className="tree-group-content">
                <div className="tree-item selected">
                  <div className="tree-indent lvl-1" />
                  <Square size={14} /> <span>Hero Container</span>
                </div>
                <div className="tree-item">
                  <div className="tree-indent lvl-2" />
                  <Type size={14} /> <span>Main Headline</span>
                </div>
                <div className="tree-item">
                  <div className="tree-indent lvl-2" />
                  <Circle size={14} /> <span>Background Blur</span>
                </div>
                <div className="tree-item">
                  <div className="tree-indent lvl-1" />
                  <Square size={14} /> <span>Navigation</span>
                </div>
              </div>
            </div>
          </div>

          <div className="panel-bottom-bar">
            <button className="icon-btn">
              <Download size={16} />
            </button>
            <button className="icon-btn">
              <Settings size={16} />
            </button>
          </div>
        </aside>

        {/* 3. Right Sidebar (Floating Right) */}
        <aside className="ui-panel panel-right">
          <div className="tab-switcher">
            <button
              className={activeTab === 'design' ? 'active' : ''}
              onClick={() => setActiveTab('design')}
            >
              Design
            </button>
            <button
              className={activeTab === 'proto' ? 'active' : ''}
              onClick={() => setActiveTab('proto')}
            >
              Prototype
            </button>
          </div>

          <div className="panel-scroll-area">
            {/* Alignment */}
            <div className="control-row align-controls">
              <button className="align-icon">
                <div className="bar-l" />
              </button>
              <button className="align-icon">
                <div className="bar-c" />
              </button>
              <button className="align-icon">
                <div className="bar-r" />
              </button>
              <div className="divider-vertical small" />
              <button className="align-icon">
                <div className="bar-t" />
              </button>
              <button className="align-icon">
                <div className="bar-m" />
              </button>
              <button className="align-icon">
                <div className="bar-b" />
              </button>
            </div>

            {/* Coordinates */}
            <div className="control-grid-2">
              <div className="input-field">
                <label>X</label> <input defaultValue="0" />
              </div>
              <div className="input-field">
                <label>Y</label> <input defaultValue="48" />
              </div>
              <div className="input-field">
                <label>W</label> <input defaultValue="1440" />
              </div>
              <div className="input-field">
                <label>H</label> <input defaultValue="900" />
              </div>
            </div>

            <div className="control-section">
              <div className="section-title">
                <span>Fill</span> <Plus size={12} />
              </div>
              <div className="control-row">
                <div className="color-chip" style={{ background: '#18181b' }} />
                <input className="hex-input" defaultValue="18181B" />
                <span className="opacity-val">100%</span>
                <Eye size={14} className="text-muted hover-trigger" />
              </div>
            </div>

            <div className="control-section">
              <div className="section-title">
                <span>Stroke</span> <Plus size={12} />
              </div>
              <div className="empty-control-msg">No stroke</div>
            </div>

            <div className="control-section">
              <div className="section-title">
                <span>Effects</span> <Plus size={12} />
              </div>
              <div className="control-row">
                <div className="effect-icon">
                  <div className="sun-icon" />
                </div>
                <span className="text-sm">Drop Shadow</span>
                <Settings size={14} className="text-muted ml-auto" />
              </div>
            </div>
          </div>
        </aside>

        {/* 4. Bottom Utilities (Floating) */}
        <div className="ui-floating-bottom">
          <button className="floating-action" title="Undo">
            <Undo2 size={16} />
          </button>
          <button className="floating-action" title="Redo">
            <Redo2 size={16} />
          </button>
          <div className="divider-vertical" />
          <span className="save-status">All changes saved</span>
        </div>
      </div>
    </div>
  );
};

export default Canvas;
