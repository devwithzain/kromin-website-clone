import EditForm from "@components/EditForm";
import prisma from "@/db/prisma"; // Ensure you have the correct path to prisma instance

export default async function EditProduct({
	params,
}: {
	params: { id: string };
}) {
	let response = null;
	try {
		response = await prisma.service.findUnique({
			where: {
				id: params.id,
			},
		});
	} catch (error) {
		console.log("Error", error);
	}

	return (
		<div className="w-full h-screen bg-white p-10 flex flex-col gap-6">
			<div className="w-full">
				<h1 className="text-[40px] text-black font-serif font-medium">
					Edit Product
				</h1>
				<EditForm response={response} />
			</div>
		</div>
	);
}
