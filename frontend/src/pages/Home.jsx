import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import { Loader2 } from "lucide-react";

const Home = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  const handleStartFundraiser = () => {
    navigate("/be-intern");
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader2 className="w-10 animate-spin text-gray-400" />
      </div>
    );
  }

  return (
    <div>
      {/* Navigation stays separate */}
      <NavigationBar bgcolor="#F29F8F" />

      {/* Greeting section */}
      <div className="py-6 px-3 font-bold text-xl md:text-2xl">
        Welcome, <span className="text-blue-500">{user.fullName}</span>
      </div>

      {/* Hero section with background + overlay */}
      <div className="relative h-screen my-4">
        {/* Background image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/umbrella.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Foreground content */}
        <div className="relative z-10 flex flex-col justify-center items-center px-4 h-full">
          <div className="text-2xl md:text-4xl font-bold max-w-3xl text-center text-white">
            You’re one step closer to becoming a top fundraiser! Let’s create
            your intern profile and start tracking your journey.
          </div>
          <div className="mt-10 text-xl bg-blue-500 rounded-full m-2 font-bold text-white">
            <button className="p-3" onClick={handleStartFundraiser}>
              Be a fundraiser
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
