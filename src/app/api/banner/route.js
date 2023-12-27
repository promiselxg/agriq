import prisma from "@/utils/connect";
import { getAuthSession } from "../auth/[...nextauth]/options";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const [slide] = await prisma.$transaction([
      prisma.slide.findMany({ orderBy: { createdAt: "desc" } }),
    ]);
    return new NextResponse(JSON.stringify({ slide }, { status: 200 }));
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

// CREATE A POST
export const POST = async (req) => {
  const session = await getAuthSession();
  if (!session) {
    return new NextResponse(
      JSON.stringify({ message: "Not Authenticated!" }, { status: 401 })
    );
  }
  try {
    const body = await req.json();
    const response = await prisma.slide.create({
      data: { ...body },
    });
    return new NextResponse(JSON.stringify(response, { status: 200 }));
  } catch (err) {
    console.log("error", err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
