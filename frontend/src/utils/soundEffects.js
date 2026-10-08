// Web Audio API Sound Effects Utility
// Generates cheerful, high-quality audio chimes without external network dependencies

class SoundEffectsManager {
  constructor() {
    this.audioCtx = null;
  }

  getAudioContext() {
    if (!this.audioCtx) {
      const AudioCtxClass = window.AudioContext || window.webkitAudioContext;
      if (AudioCtxClass) {
        this.audioCtx = new AudioCtxClass();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  }

  /**
   * Cheerful, bright, harmonic bell/chime played when selecting a correct answer.
   * Plays a joyful ascending major pentatonic arpeggio with shimmering decay.
   */
  playCorrectChime() {
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;

      const now = ctx.currentTime;

      // Joyful chime notes: C5 -> E5 -> G5 -> C6 -> E6
      const notes = [
        { freq: 523.25, time: 0.0, dur: 0.35, gain: 0.20, type: 'sine' },       // C5
        { freq: 659.25, time: 0.07, dur: 0.38, gain: 0.22, type: 'sine' },      // E5
        { freq: 783.99, time: 0.14, dur: 0.42, gain: 0.24, type: 'sine' },      // G5
        { freq: 1046.50, time: 0.21, dur: 0.55, gain: 0.26, type: 'triangle' },  // C6
        { freq: 1318.51, time: 0.28, dur: 0.65, gain: 0.20, type: 'sine' }       // E6
      ];

      notes.forEach(({ freq, time, dur, gain: noteGain, type }) => {
        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();

        osc.type = type || 'sine';
        osc.frequency.setValueAtTime(freq, now + time);

        // Envelope: instant crisp attack followed by warm natural decay
        gainNode.gain.setValueAtTime(0.0001, now + time);
        gainNode.gain.linearRampToValueAtTime(noteGain, now + time + 0.012);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, now + time + dur);

        osc.connect(gainNode);
        gainNode.connect(ctx.destination);

        osc.start(now + time);
        osc.stop(now + time + dur);
      });

      // High shimmer sparkle overtone (C7 bell shimmer)
      const shimmerOsc = ctx.createOscillator();
      const shimmerGain = ctx.createGain();
      shimmerOsc.type = 'sine';
      shimmerOsc.frequency.setValueAtTime(2093, now + 0.25);
      shimmerGain.gain.setValueAtTime(0.0001, now + 0.25);
      shimmerGain.gain.linearRampToValueAtTime(0.08, now + 0.27);
      shimmerGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.8);

      shimmerOsc.connect(shimmerGain);
      shimmerGain.connect(ctx.destination);
      shimmerOsc.start(now + 0.25);
      shimmerOsc.stop(now + 0.8);
    } catch (err) {
      console.warn("Could not trigger audio chime:", err);
    }
  }

  /**
   * Gentle encouraging sound for incorrect attempts
   */
  playGentleTryAgain() {
    try {
      const ctx = this.getAudioContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      // Soft gentle two-tone warm wobble
      const notes = [
        { freq: 392.00, time: 0.0, dur: 0.25, gain: 0.12 }, // G4
        { freq: 329.63, time: 0.12, dur: 0.35, gain: 0.10 } // E4
      ];

      notes.forEach(({ freq, time, dur, gain: noteGain }) => {
        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + time);

        gainNode.gain.setValueAtTime(0.0001, now + time);
        gainNode.gain.linearRampToValueAtTime(noteGain, now + time + 0.02);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, now + time + dur);

        osc.connect(gainNode);
        gainNode.connect(ctx.destination);

        osc.start(now + time);
        osc.stop(now + time + dur);
      });
    } catch (err) {
      console.warn("Could not play gentle audio:", err);
    }
  }
}

export const soundEffects = new SoundEffectsManager();
