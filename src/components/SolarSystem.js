// src/components/SolarSystem.js
import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars, Text, Float } from "@react-three/drei";
import * as THREE from "three";

// Planet data with Vedic information
const planetsData = [
  {
    name: "Surya",
    englishName: "Sun",
    size: 5,
    distance: 0,
    speed: 0.001,
    color: "#ffcc00",
    emissive: "#ffaa00",
    vedicInfo:
      "The soul, self, vitality, and authority. Represents the father and government.",
  },
  {
    name: "Chandra",
    englishName: "Moon",
    size: 0.8,
    distance: 8,
    speed: 0.02,
    color: "#f0f0f0",
    emissive: "#d0d0d0",
    vedicInfo:
      "The mind, emotions, and mother. Governs sensitivity and receptivity.",
  },
  {
    name: "Budha",
    englishName: "Mercury",
    size: 0.4,
    distance: 12,
    speed: 0.015,
    color: "#a8a8a8",
    emissive: "#888888",
    vedicInfo:
      "Intellect, communication, and analytical abilities. Rules education and business.",
  },
  {
    name: "Shukra",
    englishName: "Venus",
    size: 0.9,
    distance: 16,
    speed: 0.012,
    color: "#e6e6fa",
    emissive: "#d0d0f0",
    vedicInfo:
      "Love, relationships, beauty, and arts. Governs marriage and partnership.",
  },
  {
    name: "Mangala",
    englishName: "Mars",
    size: 0.6,
    distance: 20,
    speed: 0.01,
    color: "#ff6b6b",
    emissive: "#ff4f4f",
    vedicInfo:
      "Energy, courage, and action. Rules siblings, property, and military.",
  },
  {
    name: "Brihaspati",
    englishName: "Jupiter",
    size: 2.5,
    distance: 28,
    speed: 0.006,
    color: "#f0c070",
    emissive: "#e0b060",
    vedicInfo:
      "Wisdom, expansion, and prosperity. Governs knowledge and spirituality.",
  },
  {
    name: "Shani",
    englishName: "Saturn",
    size: 2.2,
    distance: 36,
    speed: 0.004,
    color: "#d0d0a0",
    emissive: "#c0c090",
    hasRings: true,
    vedicInfo:
      "Discipline, karma, and longevity. Rules hard work and obstacles.",
  },
  {
    name: "Rahu",
    englishName: "Uranus",
    size: 1.8,
    distance: 44,
    speed: 0.003,
    color: "#a0e0e0",
    emissive: "#90d0d0",
    vedicInfo:
      "Desires, innovation, and foreign influences. Represents unconventional thinking.",
  },
  {
    name: "Ketu",
    englishName: "Neptune",
    size: 1.7,
    distance: 52,
    speed: 0.002,
    color: "#6080ff",
    emissive: "#5070ee",
    vedicInfo:
      "Spirituality, detachment, and enlightenment. Governs intuition and past life karma.",
  },
];

// Planet component with orbit animation
function Planet({ data, setSelectedPlanet }) {
  const planetRef = useRef();
  const angle = useRef(Math.random() * Math.PI * 2);

  useFrame(() => {
    if (data.distance > 0) {
      angle.current += data.speed;
      planetRef.current.position.x = Math.cos(angle.current) * data.distance;
      planetRef.current.position.z = Math.sin(angle.current) * data.distance;
    }
    planetRef.current.rotation.y += 0.005;
  });

  return (
    <mesh
      ref={planetRef}
      onClick={() => setSelectedPlanet(data)}
      onPointerOver={() => (document.body.style.cursor = "pointer")}
      onPointerOut={() => (document.body.style.cursor = "auto")}
    >
      <sphereGeometry args={[data.size, 32, 32]} />
      <meshPhongMaterial
        color={data.color}
        emissive={data.emissive}
        emissiveIntensity={0.2}
        shininess={30}
        specular={0xffffff}
      />
      {data.hasRings && (
        <mesh rotation={[Math.PI / 3, 0, 0]}>
          <ringGeometry args={[data.size + 0.5, data.size + 2, 32]} />
          <meshPhongMaterial
            color="#f0e6a2"
            side={THREE.DoubleSide}
            opacity={0.8}
            transparent
          />
        </mesh>
      )}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Text
          position={[0, data.size + 1, 0]}
          color="#fef08a"
          fontSize={0.8}
          anchorX="center"
          anchorY="middle"
          maxWidth={10}
        >
          {data.name}
        </Text>
      </Float>
    </mesh>
  );
}

// Sun component with glow effect
function Sun() {
  return (
    <mesh>
      <sphereGeometry args={[planetsData[0].size, 64, 64]} />
      <meshPhongMaterial
        color={planetsData[0].color}
        emissive={planetsData[0].emissive}
        emissiveIntensity={1.5}
      />
      <pointLight intensity={2.5} distance={300} />
    </mesh>
  );
}

// Orbit rings
function OrbitRings() {
  return (
    <>
      {planetsData.slice(1).map((planet, index) => (
        <mesh key={index} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry
            args={[planet.distance - 0.1, planet.distance + 0.1, 64]}
          />
          <meshBasicMaterial
            color="#ffffff"
            side={THREE.DoubleSide}
            opacity={0.1}
            transparent
          />
        </mesh>
      ))}
    </>
  );
}

// Info Panel Component
function InfoPanel({ selectedPlanet, setSelectedPlanet }) {
  if (!selectedPlanet) return null;

  return (
    <div
      style={{
        position: "absolute",
        top: "20px",
        right: "20px",
        width: "300px",
        background: "rgba(6, 78, 59, 0.8)",
        padding: "20px",
        borderRadius: "10px",
        border: "1px solid rgba(253, 224, 71, 0.4)",
        color: "#d1fae5",
        backdropFilter: "blur(10px)",
        zIndex: 100,
      }}
    >
      <h3
        style={{
          color: "#fef08a",
          marginBottom: "10px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>
          {selectedPlanet.name} ({selectedPlanet.englishName})
        </span>
        <button
          onClick={() => setSelectedPlanet(null)}
          style={{
            background: "none",
            border: "none",
            color: "#fef08a",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          ✕
        </button>
      </h3>
      <p style={{ fontSize: "14px", lineHeight: "1.5" }}>
        {selectedPlanet.vedicInfo}
      </p>
    </div>
  );
}

// Controls Component
// function Controls({
//   animationSpeed,
//   setAnimationSpeed,
//   isPaused,
//   setIsPaused,
// }) {
//   return (
//     <div
//       style={{
//         position: "absolute",
//         bottom: "20px",
//         left: "20px",
//         display: "flex",
//         gap: "10px",
//         alignItems: "center",
//         background: "rgba(6, 78, 59, 0.7)",
//         padding: "10px 15px",
//         borderRadius: "8px",
//         border: "1px solid rgba(253, 224, 71, 0.4)",
//         backdropFilter: "blur(5px)",
//         zIndex: 100,
//       }}
//     >
//       <button
//         onClick={() => setIsPaused(!isPaused)}
//         style={{
//           background: "rgba(253, 224, 71, 0.2)",
//           border: "1px solid rgba(253, 224, 71, 0.4)",
//           color: "#fef08a",
//           padding: "5px 10px",
//           borderRadius: "5px",
//           cursor: "pointer",
//         }}
//       >
//         {isPaused ? "Play" : "Pause"}
//       </button>
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//         }}
//       >
//         <label
//           style={{ fontSize: "12px", color: "#fef08a", marginBottom: "5px" }}
//         >
//           Speed
//         </label>
//         <input
//           type="range"
//           min="0"
//           max="2"
//           step="0.1"
//           value={animationSpeed}
//           onChange={(e) => setAnimationSpeed(parseFloat(e.target.value))}
//           style={{ width: "80px" }}
//         />
//       </div>
//     </div>
//   );
// }

// Main Solar System Component
export default function SolarSystem() {
  const [selectedPlanet, setSelectedPlanet] = useState(null);
  const [animationSpeed, setAnimationSpeed] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <Canvas camera={{ position: [0, 40, 100], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[0, 0, 0]} intensity={1} />

        {/* Stars in background */}
        <Stars radius={300} depth={60} count={10000} factor={7} fade />

        {/* Sun */}
        <Sun />

        {/* Orbit rings */}
        <OrbitRings />

        {/* Planets */}
        {planetsData.slice(1).map((planet, index) => (
          <Planet
            key={index}
            data={{
              ...planet,
              speed: isPaused ? 0 : planet.speed * animationSpeed,
            }}
            setSelectedPlanet={setSelectedPlanet}
          />
        ))}

        {/* Vedic quote */}
        <Text
          position={[0, -30, 0]}
          color="#fef08a"
          fontSize={2}
          anchorX="center"
          anchorY="middle"
          maxWidth={20}
        >
          "As above, so below. The celestial dance mirrors the human
          experience."
        </Text>

        {/* Controls to rotate with mouse */}
        <OrbitControls
          enableZoom={true}
          autoRotate={!isPaused}
          autoRotateSpeed={0.5}
          enablePan={true}
        />
      </Canvas>

      {/* Info Panel */}
      <InfoPanel
        selectedPlanet={selectedPlanet}
        setSelectedPlanet={setSelectedPlanet}
      />

      {/* Controls */}
      {/* <Controls
        animationSpeed={animationSpeed}
        setAnimationSpeed={setAnimationSpeed}
        isPaused={isPaused}
        setIsPaused={setIsPaused}
      /> */}
    </div>
  );
}
