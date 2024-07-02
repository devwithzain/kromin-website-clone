"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function EditButton({ id }: { id: any }) {
	const router = useRouter();
	const editPost = async (id: any) => {
		try {
			await axios.patch(`/api/post/${id}`, {
				data: {
					id,
				},
			});
		} catch (error) {
			console.log("Error", error);
		}
	};

	return (
		<Link
			onClick={() => editPost(id)}
			href={`/admins/product/${id}`}
			className="text-[15px] cursor-pointer text-black font-serif font-medium bg-slate-200 px-6 py-3 rounded-lg">
			Edit
		</Link>
	);
}
