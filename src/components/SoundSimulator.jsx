import React, { useRef, useState } from 'react';
import './SoundSimulator.css';

function SoundSimulator() {
  const startRef = useRef(null);
  const stopRef = useRef(null);
  const revRef = useRef(null);
  const gearRef = useRef(null);
  const [engineOn, setEngineOn] = useState(false);
  const [throttle, setThrottle] = useState(0);

  const playSoundWithTimeout = (ref, duration = 3000, volume = 1) => {
    if (ref.current) {
      ref.current.volume = volume;
      ref.current.currentTime = 0;
      ref.current.play();

      setTimeout(() => {
        ref.current.pause();
        ref.current.currentTime = 0;
      }, duration);
    }
  };

  const stopAllSounds = () => {
    const audioRefs = [startRef, stopRef, revRef, gearRef];
    audioRefs.forEach(ref => {
      if (ref.current) {
        ref.current.pause();
        ref.current.currentTime = 0;
      }
    });
  };

  const handleStart = () => {
    playSoundWithTimeout(startRef, 3500);
    setEngineOn(true);
  };

  const handleStop = () => {
    stopAllSounds();
    playSoundWithTimeout(stopRef, 2000);
    setEngineOn(false);
  };

  const handleThrottle = (e) => {
    const value = Number(e.target.value);
    setThrottle(value);

    if (!engineOn || !revRef.current) return;

    if (value > 0) {
      revRef.current.volume = value / 100;
      revRef.current.play();
    } else {
      revRef.current.pause();
    }
  };

  const handleGearShift = () => {
    if (engineOn) {
      playSoundWithTimeout(gearRef, 1000, 0.5);
    }
  };

  return (
    <div className="sound-controls">
      <h2>Sound Simulator</h2>
      <button onClick={handleStart}>Start Engine</button>
      <button onClick={handleStop}>Stop Engine</button>
      <button onClick={handleGearShift}>Shift Gear</button>

      <div className="throttle-slider">
        <label>Throttle:</label>
        <input type="range" min="0" max="100" value={throttle} onChange={handleThrottle} />
      </div>

      <audio ref={startRef} src="/audio/engine-start.mp3" preload="auto" />
      <audio ref={stopRef} src="/audio/engine-stop.mp3" preload="auto" />
      <audio ref={revRef} src="/audio/m5-rev.mp3" preload="auto" loop />
      <audio ref={gearRef} src="/audio/gear-shift.mp3" preload="auto" />
    </div>
  );
}

export default SoundSimulator;
