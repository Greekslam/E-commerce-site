import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="w-full min-h-screen flex flex-row justify-center items-center">
      <SignUp />
    </div>
  );
}
