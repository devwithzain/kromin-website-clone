"use client";
import { TMenuItemProps } from "@types";

export default function MenuItem({ onClick, label, icon }: TMenuItemProps) {
	return (
		<div
			onClick={onClick}
			className="px-4 py-3 hover:bg-neutral-100 transition font-semibold flex gap-3 items-center">
			{icon}
			{label}
		</div>
	);
}
