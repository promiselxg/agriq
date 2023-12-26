import prisma from "@/utils/connect";
import { NextResponse } from "next/server";
import { getStorage, ref, deleteObject } from "firebase/storage";
import { app } from "@/utils/firebase";

export const DELETE = async (request, { params }) => {
  try {
    const { id } = params;
    const team = await prisma.team.findUnique({
      where: {
        id,
      },
    });
    let url = team.userImgUrl;
    const res = await prisma.team.delete({
      where: {
        id,
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
