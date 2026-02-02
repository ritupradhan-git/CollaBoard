import React, { useEffect, useRef } from 'react';
import './Landing.css';
import '../../index.css'; //root colors present here

const Landing = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    // Scroll Reveal Logic
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target); // Only animate once
        }
      });
    };

    observerRef.current = new IntersectionObserver(
      handleIntersect,
      observerOptions
    );
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  return (
    <div className="landing-container">
      {/* 🦸 Hero Section */}
      <section className="hero-section">
        {/* Floating Background Elements */}
        <div className="hero-floating-bg">
          {/* Code Block (Left) */}
          <div className="float-card code-card animate-float">
            <div className="window-dots">
              <div className="dot red"></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
            </div>
            <div className="code-content">
              <p>
                <span className="c-purple">const</span> board ={' '}
                <span className="c-blue">new</span> Canvas();
              </p>
              <p>
                board.<span className="c-yellow">connect</span>(user);
              </p>
              <p>
                <span className="c-gray">// Live sync active</span>
              </p>
            </div>
            <div className="cursor-badge sarah">
              <svg viewBox="0 0 24 24">
                <path d="M7 2l12 11.2-5.8.5 3.3 7.3-2.2.9-3.2-7.4-4.4 4V2z" />
              </svg>
              Sarah
            </div>
          </div>

          {/* Image Card (Right) */}
          <div className="float-card image-card animate-float-delayed">
            <div className="img-placeholder"></div>
            <div className="card-ui">
              <div className="ui-line"></div>
              <div className="ui-circle"></div>
            </div>
            <div className="cursor-badge alex">
              <svg viewBox="0 0 24 24">
                <path d="M7 2l12 11.2-5.8.5 3.3 7.3-2.2.9-3.2-7.4-4.4 4V2z" />
              </svg>
              Alex
            </div>
          </div>
        </div>

        <div className="hero-content">
          <h1 className="hero-title reveal">
            A shared board for
            <br />
            ideas, code, and momentum.
          </h1>
          <p
            className="hero-subtitle reveal"
            style={{ transitionDelay: '100ms' }}
          >
            CollabBoard brings thinking, building, and collaboration into one
            real-time workspace.
          </p>

          <div
            className="hero-buttons reveal"
            style={{ transitionDelay: '200ms' }}
          >
            <button className="btn btn-primary">Start a Board</button>
            <button className="btn btn-secondary">Explore Live Demo</button>
          </div>
        </div>
      </section>

      {/* 🌐 Why It Matters */}
      <section className="section-padding">
        <div className="problem-container">
          <h2 className="section-title reveal">
            Too many tools break the flow.
          </h2>

          <div className="problem-list reveal">
            <div className="problem-item">
              <span className="dot"></span>
              <p>Ideas live in a doc.</p>
            </div>
            <div className="problem-item">
              <span className="dot"></span>
              <p>Code lives in a repo.</p>
            </div>
            <div className="problem-item">
              <span className="dot"></span>
              <p>Discussions happen in chat.</p>
            </div>
          </div>

          <p className="solution-text reveal">CollabBoard removes the gaps.</p>
        </div>
      </section>

      {/* 🧩 Core Capabilities (Bento Grid) */}
      <section className="section-padding max-width-wrap">
        <div className="bento-grid">
          {/* Card 1 */}
          <div className="bento-card span-2 highlight-card reveal">
            <div className="card-bg-gradient"></div>
            <div className="card-content">
              <div className="card-header">
                <div className="icon-box">⚡️</div>
                <h3>Real-Time Everything</h3>
                <p>
                  Updates instantly. No refresh, no friction. See cursors fly
                  and ideas land in milliseconds.
                </p>
              </div>
              <div className="visual-decoration">
                <div className="pulse-bar bar-1"></div>
                <div className="pulse-bar bar-2"></div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="bento-card reveal"
            style={{ transitionDelay: '100ms' }}
          >
            <div className="icon-box">💻</div>
            <h3>Code Canvases</h3>
            <p>
              Write, explain, and iterate on code snippets right next to your
              designs.
            </p>
            <div className="mini-code-block">
              function init() {'{'}
              <br />
              &nbsp;&nbsp;return true;
              <br />
              {'}'}
            </div>
          </div>

          {/* Card 3 */}
          <div className="bento-card reveal">
            <div className="icon-box">🎨</div>
            <h3>Visual Thinking</h3>
            <p>
              Diagrams, user flows, and free-form ideation on an infinite
              canvas.
            </p>
          </div>

          {/* Card 4 */}
          <div
            className="bento-card span-2 reveal"
            style={{ transitionDelay: '100ms' }}
          >
            <h3>One Unified Workspace</h3>
            <p className="max-w-text">
              No tab hopping. No context loss. Keep your entire product
              lifecycle in a single view.
            </p>
            <div className="gradient-line"></div>
          </div>
        </div>
      </section>

      {/* 🔁 How It Works */}
      <section className="section-padding border-top">
        <div className="workflow-container">
          <h2 className="overline reveal">WORKFLOW</h2>

          <div className="timeline">
            {/* Step 1 */}
            <div className="timeline-item reveal">
              <span className="timeline-dot "></span>
              <h3>1. Create a Board</h3>
              <p>
                Start blank for freedom or choose a smart template for speed.
              </p>
            </div>

            {/* Step 2 */}
            <div className="timeline-item reveal">
              <span className="timeline-dot gray"></span>
              <h3>2. Invite Collaborators</h3>
              <p>
                Share a single link. No signup walls for guests. Join instantly.
              </p>
            </div>

            {/* Step 3 */}
            <div className="timeline-item reveal">
              <span className="timeline-dot "></span>
              <h3>3. Build Together</h3>
              <p>
                Think, design, code, and ship. The output is ready for
                production.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 🛠 Built for Builders */}
      <section className="section-padding builder-bg border-y">
        <div className="builder-grid">
          <div className="builder-header reveal">
            <h2>Built for builders.</h2>
            <div className="tags">
              <span>Developers</span>
              <span>Designers</span>
              <span>Startup Teams</span>
            </div>
          </div>

          <div className="feature-list reveal">
            <div>
              <h4>Designed for focus</h4>
              <p>Minimal UI that gets out of your way.</p>
            </div>
            <div>
              <h4>Built for speed</h4>
              <p>WASM-powered engine ensures 60fps performance.</p>
            </div>
            <div>
              <h4>Flexible, not bloated</h4>
              <p>Only the tools you need, exactly when you need them.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🚀 Final CTA */}
      <section className="section-padding cta-section">
        <div className="reveal">
          <h2 className="cta-title">
            Start collaborating.
            <br />
            Instantly.
          </h2>
          <div className="hero-buttons cta-buttons">
            <button className="btn btn-primary">Get Started Free</button>
            <button className="btn btn-text">Sign In</button>
          </div>
          <p className="cta-note">
            No credit card • No setup • Real-time from day one
          </p>
        </div>
      </section>
    </div>
  );
};

export default Landing;
