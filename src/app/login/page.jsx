import { getServerSession } from "next-auth";
import Link from "next/link";
import { authOptions } from "../api/auth/[...nextauth]/options";

const Login = async () => {
  const session = await getServerSession(authOptions);
  // api/auth/signout?callbakUrl=/
  console.log(session);
  return (
    <>
      <div className="flex h-screen items-center">
        <div className="container">
          <div className="flex justify-center text-center">
            <h1>Login</h1>
            <Link href="/api/auth/signin">Sign In</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
