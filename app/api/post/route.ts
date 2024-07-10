import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
   try {
      const response = await axios.get('https://kromin-webiste-admin-panel-devwithzain.vercel.app/api/post');
      return NextResponse.json(response.data);
   } catch (error: any) {
      return NextResponse.json({ message: "Get Error", error: error.message }, { status: 404 });
   }
}
