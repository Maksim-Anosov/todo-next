import { Vk, Telegram, Mail } from "../assets/index";
import { ToggleTheme } from "./ToggleTheme";

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
			<a
				href="mailto:eastcoastcustoms@yandex.ru"
				className="hover:scale-125 transition-all"
			>
				<Mail />
			</a>
			<ToggleTheme />
		</header>
	);
}
