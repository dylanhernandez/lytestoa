(() => {
  'use strict';

  const toggleBtn = document.querySelector('[data-fullscreen-toggle]');
  const viewport = document.querySelector('.stage-viewport');
  const frame = document.querySelector('.stage-frame');

  if (!toggleBtn || !viewport) {
    return;
  }

  const focusFrame = () => {
    if (frame && typeof frame.focus === 'function') {
      frame.focus();
    }
  };

  const syncButtonState = () => {
    const isFullscreen = document.fullscreenElement === viewport;
    toggleBtn.setAttribute('aria-pressed', String(isFullscreen));
    toggleBtn.textContent = isFullscreen ? 'Exit Fullscreen' : 'Fullscreen';
  };

  toggleBtn.addEventListener('click', async () => {
    try {
      if (document.fullscreenElement === viewport) {
        await document.exitFullscreen();
      } else if (viewport.requestFullscreen) {
        await viewport.requestFullscreen();
      }
    } catch (err) {
      console.warn('Fullscreen toggle failed:', err);
    } finally {
      focusFrame();
    }
  });

  document.addEventListener('fullscreenchange', () => {
    syncButtonState();
    focusFrame();
  });

  if (frame) {
    frame.addEventListener('load', focusFrame, { once: true });
  }

  syncButtonState();
})();
