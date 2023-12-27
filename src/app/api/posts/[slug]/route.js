import prisma from "@/utils/connect";
import { app } from "@/utils/firebase";
import { deleteObject, getStorage, ref } from "firebase/storage";
import { NextResponse } from "next/server";

// GET SINGLE POST
export const GET = async (req, { params }) => {
  const { slug } = params;
  try {
    const post = await prisma.post.findUnique({
      where: {
        slug: slug,
      },
    });

    return new NextResponse(JSON.stringify(post, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

export const DELETE = async (request, { params }) => {
  try {
    const { slug } = params;
    const post = await prisma.post.findUnique({
      where: {
        id: slug,
      },
    });

    let url = post?.img;
    const res = await prisma.post.delete({
      where: {
        id: slug,
      },
    });
    if (res) {
      const storage = getStorage(app);
      // Create a reference to the file to delete
      const desertRef = ref(storage, `${url}`);
      // Delete the file
      deleteObject(desertRef)
        .then(() => {
          console.log("Image deleted");
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return NextResponse.json(
      { message: "Removed Successfully" },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json({ message: "DELETE Error", err }, { status: 500 });
  }
};
