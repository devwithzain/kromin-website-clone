import Image from "next/image";
import prisma from "@/db/prisma";

export default async function Admins() {
	const data = await prisma?.service.findMany();
	return (
		<div>
			{data?.map((item) => (
				<div
					className="w-full h-screen bg-blue-300"
					key={item.id}>
					{item.title}
					{item.para}

					<Image
						src={item.src}
						alt="asd"
						width={400}
						height={400}
					/>
				</div>
			))}
		</div>
	);
}
