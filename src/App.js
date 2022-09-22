import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <main className="min-h-screen w-full flex flex-col justify-end md:justify-center items-center bg-LightGrayishCyan">
      <h2 className="absolute top-20 left-50 text-3xl uppercase font-bold text-VeryDarkCyan tracking-[.5rem]">
        spli
      </h2>
      <h2 className="absolute top-28 left-50 text-3xl uppercase font-bold text-VeryDarkCyan tracking-[.5rem]">
        tter
      </h2>
      <Card />
    </main>
  );
}

export default App;
