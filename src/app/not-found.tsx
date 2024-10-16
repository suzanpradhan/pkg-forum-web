import Link from "next/link";

export default function NotFound() {
    return (
      <div>
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/">Return Home</Link>
      </div>
    )
  }

{
  /* <div className="py-6"> */
}
{
  /* {session ? (
          <div className="text-center">
            <p className="mb-4">Welcome, {session.user?.name}!</p>
            <p className="mb-4">Your email: {session.user?.email}</p>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="text-white bg-red-600 px-4 py-2 rounded"
            >
              Log Out
            </button>
          </div>
        ) : (
          <div className="text-center">
            <p className="mb-4">You are not logged in.</p>
            <Link href="/login" className="text-blue-500">
              Login
            </Link>
          </div>
        )} */
}