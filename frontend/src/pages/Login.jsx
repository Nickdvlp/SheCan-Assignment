import { SignIn } from "@clerk/clerk-react";
const Login = () => {
  return (
    <div>
      <header className="flex items-center justify-center h-[100vh]">
        <SignIn afterSignInUrl="/home" />
      </header>
    </div>
  );
};

export default Login;
