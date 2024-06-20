import prisma from "@/db/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
	try {
		const body = await request.json();
		const { title, description } = body;
		const post = await prisma?.service.create({
			data: {
				title,
				description,
			},
		});
		return NextResponse.json(post);
	} catch (error: any) {
		return NextResponse.json({ message: "Post Error", error: error.message }, { status: 404 });
	}
}


export async function GET(request: Request) {
	try {
		const getData = await prisma?.service.findMany();
		return NextResponse.json(getData);
	} catch (error: any) {
		return NextResponse.json({ message: "Get Error", error: error.message }, { status: 404 });
	}
}

export async function DELETE(request: Request) {
	try {
		const { id } = await request.json();
		const getData = await prisma?.service.delete({
			where: {
				id
			}
		});
		return NextResponse.json(getData);
	} catch (error: any) {
		return NextResponse.json({ message: "Get Error", error: error.message }, { status: 404 });
	}
}

