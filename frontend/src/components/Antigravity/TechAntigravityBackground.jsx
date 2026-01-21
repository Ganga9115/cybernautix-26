import Antigravity from "./Antigravity";

const TechAntigravityBackground = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Antigravity
        count={300}
        magnetRadius={10}
        ringRadius={7}
        waveSpeed={0.4}
        waveAmplitude={1}
        particleSize={1.5}
        lerpSpeed={0.05}
        color="#FF9FFC"
        autoAnimate
        particleVariance={1}
        rotationSpeed={0}
        depthFactor={1}
        pulseSpeed={3}
        particleShape="capsule"
        fieldStrength={10}
      />
    </div>
  );
};

export default TechAntigravityBackground;
