import { Todos, ToggleTheme, Weather } from "@/widgets";

export default function App() {
  return (
    <section className="w-[75%] h-full mx-auto flex flex-col justify-between">
      <div className="flex justify-between">
        <Weather />
        <ToggleTheme />
      </div>
      <Todos />
    </section>
  );
}
