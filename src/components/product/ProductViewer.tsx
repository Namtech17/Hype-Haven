
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";
import { Mesh } from "three";
import { ZoomIn, ZoomOut, RotateCw } from "lucide-react";

// Shoe model component
const ShoeModel = () => {
  const meshRef = useRef<Mesh>(null);
  
  // Since we don't have actual 3D models, we'll use a simple cube for demonstration
  useFrame(() => {
    if (meshRef.current) {
      // Gentle automatic rotation
      meshRef.current.rotation.y += 0.001;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 0.5, 2]} />
      <meshStandardMaterial color="#333333" />
    </mesh>
  );
};

interface ProductViewerProps {
  productName: string;
}

const ProductViewer: React.FC<ProductViewerProps> = ({ productName }) => {
  const [zoom, setZoom] = useState(3);
  const [isRotating, setIsRotating] = useState(false);
  
  const handleZoomIn = () => {
    setZoom(Math.max(zoom - 0.5, 1.5));
  };
  
  const handleZoomOut = () => {
    setZoom(Math.min(zoom + 0.5, 5));
  };
  
  const toggleRotation = () => {
    setIsRotating(!isRotating);
  };

  return (
    <div className="relative w-full h-[400px] bg-gray-100 dark:bg-gray-900 rounded-lg overflow-hidden">
      {/* Info overlay */}
      <div className="absolute top-3 left-3 z-10 bg-black/70 text-white px-3 py-1 rounded-full text-sm flex items-center">
        <span>Drag to rotate • Scroll to zoom</span>
      </div>
      
      {/* Controls */}
      <div className="absolute bottom-3 right-3 z-10 flex flex-col gap-2">
        <button 
          onClick={handleZoomIn}
          className="bg-black/70 text-white p-2 rounded-full hover:bg-black transition-colors"
          aria-label="Zoom in"
        >
          <ZoomIn size={18} />
        </button>
        <button 
          onClick={handleZoomOut}
          className="bg-black/70 text-white p-2 rounded-full hover:bg-black transition-colors"
          aria-label="Zoom out"
        >
          <ZoomOut size={18} />
        </button>
        <button 
          onClick={toggleRotation}
          className={`${isRotating ? 'bg-hype-red' : 'bg-black/70'} text-white p-2 rounded-full hover:bg-hype-red transition-colors`}
          aria-label="Toggle rotation"
        >
          <RotateCw size={18} />
        </button>
      </div>
      
      {/* Canvas for 3D model */}
      <Canvas shadows>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        
        <PerspectiveCamera makeDefault position={[0, 0, zoom]} />
        <OrbitControls 
          enablePan={false}
          autoRotate={isRotating}
          autoRotateSpeed={4}
        />
        
        <ShoeModel />
      </Canvas>
      
      <div className="absolute bottom-3 left-3 z-10 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
        {productName} 3D View
      </div>
    </div>
  );
};

export default ProductViewer;
