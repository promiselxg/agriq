import { NextResponse } from "next/server";
import { getAuthSession } from "../auth/[...nextauth]/options";
import prisma from "@/utils/connect";

export const GET = async (params) => {
  let query;
  let slug = params?.url?.split("?")[1]?.split("=")[1];
  if (!slug) {
    query = {};
  } else {
    query = {
      where: {
        catSlug: slug,
      },
    };
  }
  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
    ]);
    return new NextResponse(JSON.stringify({ posts, count }, { status: 200 }));
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
    const post = await prisma.post.create({
      data: { ...body, userEmail: session.user.email },
    });

    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
