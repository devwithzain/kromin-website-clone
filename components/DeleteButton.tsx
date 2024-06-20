"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function DeleteButton({ id }: { id: any }) {
	const router = useRouter();
	const deletePost = async (id: any) => {
		try {
			const response = await axios.delete("/api/post", {
				data: {
					id,
				},
			});
			console.log("Data", response.data);
		} catch (error) {
			console.log("Error", error);
		} finally {
			router.refresh();
		}
	};

	return (
		<Link
			onClick={() => deletePost(id)}
			href="#"
			className="text-[15px] cursor-pointer text-black font-serif font-medium bg-slate-200 px-6 py-3 rounded-lg">
			Delete
		</Link>
	);
}
