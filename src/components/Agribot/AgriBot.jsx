import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Leva } from "leva";
import { Experience } from "./Experience";
import { UI } from "./UI";
import { ChatProvider } from "../../../hooks/useChat";
import { heroBackground } from "../../assets";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <ChatProvider>
        <Loader />
        <Leva hidden />
        <UI />
        <div style={{ flex: 1, position: 'relative' }}>
          <Canvas shadows camera={{ position: [0, 0, 1], fov: 30 }}>
            <Experience />
          </Canvas>
        </div>
      </ChatProvider>
    </div>
  );
}

export default App;
