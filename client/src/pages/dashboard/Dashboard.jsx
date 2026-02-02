import React, { useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  const [activeModal, setActiveModal] = useState(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Simulated data
  const projects = [
    { id: 1, title: 'Mobile Design', updated: '2hrs ago' },
    { id: 2, title: 'Web Dashboard', updated: '5hrs ago' },
    { id: 3, title: 'Brand Guidelines', updated: '1 day ago' },
    { id: 4, title: 'Icon Set', updated: '3 days ago' },
  ];

  const closeModal = () => setActiveModal(null);

  const Modal = ({ title, children }) => (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <h2 style={{ fontFamily: 'var(--font-display)', marginBottom: '16px' }}>
          {title}
        </h2>
        {children}
        <div style={{ marginTop: '24px', textAlign: 'right' }}>
          <button className="btn-primary" onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="dashboard-wrapper">
      {/* 1️⃣ LEFT SIDEBAR */}
      <aside className="sidebar">
        <div
          className="logo-container"
          onClick={() => setActiveModal('Workspace Settings')}
        >
          <div
            style={{
              width: 20,
              height: 20,
              background: 'var(--accent-primary)',
              borderRadius: 4,
            }}
          ></div>
        </div>

        <nav className="nav-stack">
          <div
            className="nav-item active"
            onClick={() => setActiveModal('Projects Switcher')}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
          </div>
        </nav>

        <div
          className="bottom-nav"
          style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
        >
          <div
            className="nav-item"
            onClick={() => setActiveModal('Help Center')}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m0 4h.01" />
            </svg>
          </div>
          <div
            className="nav-item"
            onClick={() => setActiveModal('Preferences')}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          </div>
        </div>
      </aside>

      {/* 2️⃣ MAIN CONTENT */}
      <main className="main-content">
        <header className="header-top">
          <div
            className="user-block"
            onClick={() => setIsProfileOpen(!isProfileOpen)}
          >
            <div className="avatar"></div>
            <div className="user-meta">
              <h4>Sarah Wills</h4>
              <p>sara.wills@gmail.com</p>
            </div>
            {isProfileOpen && (
              <div className="profile-dropdown">
                <div
                  className="nav-item"
                  style={{ width: '100%', fontSize: '13px' }}
                >
                  Profile Settings
                </div>
                <div
                  className="nav-item"
                  style={{
                    width: '100%',
                    fontSize: '13px',
                    color: 'var(--accent-red)',
                  }}
                >
                  Logout
                </div>
              </div>
            )}
          </div>
          <div
            className="date-chip"
            onClick={() => setActiveModal('Calendar View')}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            13.12.2025
          </div>
        </header>

        <section className="page-intro">
          <div>
            <span className="subtitle">Project Overview</span>
            <h1>Your Projects</h1>
          </div>
          <div className="actions-group">
            <div className="view-switcher">
              <div
                className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                onClick={() => setViewMode('grid')}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                </svg>
              </div>
              <div
                className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                onClick={() => setViewMode('list')}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="8" y1="6" x2="21" y2="6" />
                  <line x1="8" y1="12" x2="21" y2="12" />
                  <line x1="8" y1="18" x2="21" y2="18" />
                  <line x1="3" y1="6" x2="3.01" y2="6" />
                  <line x1="3" y1="12" x2="3.01" y2="12" />
                  <line x1="3" y1="18" x2="3.01" y2="18" />
                </svg>
              </div>
            </div>
            <button
              className="btn-primary"
              onClick={() => setActiveModal('New Project')}
            >
              + New Project
            </button>
          </div>
        </section>

        {/* 3️⃣ PROJECTS GRID */}
        <div className={`projects-container ${viewMode}`}>
          <div
            className="project-card create-card"
            onClick={() => setActiveModal('New Project')}
          >
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>+</div>
            <h3>Create New Project</h3>
            <p>Start from a basic canvas</p>
          </div>

          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => setActiveModal(`Project: ${project.title}`)}
            >
              <div className="card-preview">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--border-strong)"
                  strokeWidth="1"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18M9 21V9" />
                </svg>
              </div>
              <div className="card-footer">
                <h3>{project.title}</h3>
                <p>Last edited {project.updated}</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* MODAL SYSTEM */}
      {activeModal && (
        <Modal title={activeModal}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
            This is a dummy functional dialog for the{' '}
            <strong>{activeModal}</strong> action. In a real app, you would find
            specific settings or forms here.
          </p>
          {activeModal === 'New Project' && (
            <div style={{ marginTop: '20px' }}>
              <input
                type="text"
                placeholder="Project name..."
                style={{
                  width: '100%',
                  padding: '10px',
                  borderRadius: '4px',
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-subtle)',
                  color: 'white',
                }}
              />
            </div>
          )}
        </Modal>
      )}
    </div>
  );
};

export default Dashboard;
