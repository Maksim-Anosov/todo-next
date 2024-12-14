import {
	AddTodo,
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
	TodoList,
} from "@/components";
import { TodoCounter } from "@/components/TodoCounter";

export default function App() {
	return (
		<section className="w-[75%] h-full mx-auto flex flex-col justify-between">
			<div>
				<h2 className="text-center text-5xl">TODOS</h2>
				<AddTodo />
			</div>
			<Tabs defaultValue="all" className="overflow-hidden grow flex flex-col justify-between p-1">
				<TabsContent className="overflow-y-auto" value="all">
					<TodoList />
				</TabsContent>
				<TabsContent className="overflow-y-auto" value="active"></TabsContent>
				<TabsContent className="overflow-y-auto" value="completed"></TabsContent>
				<div className="p-1 flex justify-between">
					<TodoCounter />
					<TabsList>
						<TabsTrigger className="uppercase" value="all">All</TabsTrigger>
						<TabsTrigger className="uppercase" value="active">Active</TabsTrigger>
						<TabsTrigger className="uppercase" value="completed">Completed</TabsTrigger>
					</TabsList>
				</div>
			</Tabs>
			{/* <footer>
				<TodoCounter />
			</footer> */}
		</section>
	);
}
