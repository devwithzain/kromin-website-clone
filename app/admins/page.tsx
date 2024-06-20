import Link from "next/link";
import EditButton from "@components/EditButton";
import DeleteButton from "@components/DeleteButton";

export default async function Admins() {
	const response = await prisma?.service.findMany();
	return (
		<div className="w-full h-screen p-10 flex flex-col bg-sky-200">
			<div className="w-full h-[20vh] flex justify-between items-center gap-4">
				<div>
					<h1 className="text-[40px] text-black font-serif font-medium">
						Product Management
					</h1>
				</div>
				<div>
					<Link
						href="/admins/add-product"
						className="text-[20px] cursor-pointer text-black font-serif font-medium bg-slate-200 px-6 py-3 rounded-lg">
						Add Product
					</Link>
				</div>
			</div>
			<div className="w-full flex flex-col gap-4 border-t h-[80vh]">
				{response?.map((item) => (
					<div
						key={item.id}
						className="w-full p-4 rounded-md bg-white border flex items-center justify-between gap-4">
						<div className="">
							<h1 className="text-[15px] text-black font-medium font-sans">
								{item.title}
							</h1>
						</div>
						<div className="">
							<p className="text-[15px] text-black font-medium font-sans">
								{item.description}
							</p>
						</div>
						<div className="flex items-center gap-4">
							<EditButton id={item.id} />
							<DeleteButton id={item.id} />
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
