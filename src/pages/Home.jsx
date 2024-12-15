import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Loader from "../components/Loader";

import Island from "../models/Island";

{
  /* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
      POPUP
  </div> */
}

const Home = () => {
<<<<<<< HEAD
=======
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1)
>>>>>>> dda7b1c ([UPDATE] menambahkan animasi models dan menambahkan addEventListener kepada frame di component home & Menambahkan useRef, useEffect, useFrame, dan props ke model sky, island, plane, dan bird)

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }

    return [screenScale, screenPosition, rotation];
  };

<<<<<<< HEAD
=======
  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }

    return [screenScale, screenPosition];
  };

>>>>>>> dda7b1c ([UPDATE] menambahkan animasi models dan menambahkan addEventListener kepada frame di component home & Menambahkan useRef, useEffect, useFrame, dan props ke model sky, island, plane, dan bird)
  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();

  return (
    <section className="w-full h-screen relative">
<<<<<<< HEAD
      <Canvas className="w-full h-screen bg-transparent" camera={{ near: 0.1, far: 1000 }}>
=======
      <Canvas className={`w-full h-screen bg-transparent ${isRotating ? "cursor-grabbing" : "cursor-grab"}`} camera={{ near: 0.1, far: 1000 }}>
>>>>>>> dda7b1c ([UPDATE] menambahkan animasi models dan menambahkan addEventListener kepada frame di component home & Menambahkan useRef, useEffect, useFrame, dan props ke model sky, island, plane, dan bird)
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />

<<<<<<< HEAD
          <Island scale={islandScale} position={islandPosition} rotation={islandRotation}/>
=======
          <Bird />
          <Sky isRotating={isRotating}/>
          <Island 
            scale={islandScale} 
            position={islandPosition} 
            rotation={islandRotation} 
            isRotating={isRotating} 
            setIsRotating={setIsRotating} 
            setCurrentStage={setCurrentStage}
          />
          <Plane planeScale={planeScale} planePosition={planePosition} isRotating={isRotating} rotation={[0, 20, 0]} />
>>>>>>> dda7b1c ([UPDATE] menambahkan animasi models dan menambahkan addEventListener kepada frame di component home & Menambahkan useRef, useEffect, useFrame, dan props ke model sky, island, plane, dan bird)
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
