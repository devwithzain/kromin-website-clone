"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function EditButton({ id }: { id: any }) {
	const router = useRouter();
	const editPost = async (id: any) => {
		try {
			const response = await axios.patch("/api/post", {
				data: {
					id,
				},
			});
			console.log("Data", response.data);
		} catch (error) {
			console.log("Error", error);
		} finally {
			router.push("/admins");
		}
	};

	return (
		<Link
			onClick={() => editPost(id)}
			href={`/admins/${id}`}
			className="text-[15px] cursor-pointer text-black font-serif font-medium bg-slate-200 px-6 py-3 rounded-lg">
			Edit
		</Link>
	);
}
