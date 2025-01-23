import { Todos } from "@/components";

export default function App() {
	return (
		<section className="w-[75%] h-full mx-auto flex flex-col justify-between">
			<div>
				<h2 className="text-center text-5xl">TODOS</h2>
			</div>
				<Todos />
		</section>
	);
}
