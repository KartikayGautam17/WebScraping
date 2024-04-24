import Navbar from "./components/navbar";
import ContainerMiddle from "./components/container_middle";

function App() {
  return (
    <div className="w-full h-[200vh] bg-[var(--w-clayblack)] text-[white]">
      <Navbar />
      <ContainerMiddle />
    </div>
  );
}

export default App;
