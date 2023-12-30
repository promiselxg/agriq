import prisma from "@/utils/connect";
import { getAuthSession } from "../auth/[...nextauth]/options";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const [staff] = await prisma.$transaction([
      prisma.staff.findMany({
        orderBy: {
          hierarchy: "asc", // or 'desc' for descending order
        },
      }),
    ]);
    return new NextResponse(JSON.stringify({ staff }, { status: 200 }));
  } catch (err) {
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};

// export const DELETE = async (req, res) => {
//   const { id, url } = req.json();
//   try {
//     await prisma.post.delete({
//       where: {
//         id,
//       },
//     });
//     console.log(id);
//     return NextResponse.json("Post has been deleted");
//   } catch (err) {
//     return NextResponse.json({ message: "DELETE Error", err }, { status: 500 });
//   }
//   // const storage = getStorage(app);
//   // // Create a reference to the file to delete
//   // const desertRef = ref(storage, `${url}`);
//   // // Delete the file
//   // deleteObject(desertRef).then(async () => {
//   //   const results = await new Promise((resolve, reject) => {
//   //     prisma.team.delete({
//   //       where: {
//   //         id,
//   //       },
//   //     });
//   //     return NextResponse.json({ data: results }, { status: 200 });
//   //   }).catch((error) => {
//   //     console.log(error);
//   //   });
//   // });
// };

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
    const response = await prisma.staff.create({
      data: { ...body },
    });
    return new NextResponse(JSON.stringify(response, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
