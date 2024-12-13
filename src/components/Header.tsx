import { Vk, Telegram, Mail } from "../assets/index";
import { ToggleTheme } from "./ToggleTheme";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

export function Header() {
	return (
		<header className="text-center text-2xl h-36 mb-auto flex justify-center items-center gap-2">
			<a
				className="hover:scale-125 transition-all"
				href="https://t.me/AnsaksS"
				target="_blank"
			>
				<Telegram />
			</a>
			<a
				className="hover:scale-125 transition-all"
				href="https://vk.com/id46614753"
				target="_blank"
			>
				<Vk />
			</a>
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger className="hover:scale-125 transition-all">
						<a
							href="mailto:coach.anosov.fh@gmail.com"
						>
							<Mail />
						</a>
					</TooltipTrigger>
					<TooltipContent>
						<p>eastcoastcustoms@yandex.ru</p>
					</TooltipContent>
				</Tooltip>
			</TooltipProvider>
			<ToggleTheme />
		</header>
	);
}
