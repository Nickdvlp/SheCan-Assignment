import { UserButton, useUser } from "@clerk/clerk-react";
import NavigationBar from "../components/NavigationBar";
import axios from "axios";
import { useEffect, useState } from "react";

const server = "http://localhost:3000/api/v1";
const Dashboard = () => {
  const { user } = useUser();
  const [allInterns, setAllInterns] = useState(null);

  const referralCode = user?.firstName
    ? `${user.firstName.toLowerCase()}2025`
    : "yourname2025";

  const getInterns = async () => {
    try {
      const getInterns = await axios.get(`${server}/get/intern`);
      setAllInterns(getInterns.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getInterns();
  }, []);

  if (!allInterns) {
    return <p>Loading...</p>;
  }

  const totalDonations = allInterns.reduce(
    (acc, curr) => acc + Number(curr.totalDonations),
    0
  );

  const currentIntern = allInterns.find(
    (intern) => intern.internName.toLowerCase() === user.fullName.toLowerCase()
  );

  return (
    <div>
      <NavigationBar bgcolor="#E0E7FF" />
      <div className=" mx-auto p-6">
        <h1 className="text-2xl font-bold mb-2">Welcome, {user?.firstName}!</h1>

        <div className="flex gap-3 items-center justify-around md:justify-center md:gap-10 bg-gray-200 rounded-xl m-3">
          <div className="text-xl font-bold text-zinc-700 my-4">
            Your Donations:{" "}
            <span className="text-blue-500">
              ₹{currentIntern.totalDonations}
            </span>
          </div>
          <div className="text-xl font-bold text-zinc-700 my-4">
            Your Badge:{" "}
            <span className="text-blue-500">
              {currentIntern.rewardsUnlocked[0].toUpperCase()}
            </span>
          </div>
        </div>

        <div className="mb-6 p-4 bg-gray-200 m-2 rounded-lg flex flex-col items-center justify-start gap-3">
          <p className="font-bold text-gray-700">
            Referral Code:{" "}
            <span className="text-blue-500 text-xl font-bold">
              {referralCode}
            </span>
          </p>
          <p className="font-bold text-gray-700">
            Total Donations Raised:{" "}
            <span className="text-blue-500 text-xl font-bold">
              ₹{totalDonations}
            </span>
          </p>
        </div>

        <div className="mt-6">
          <h2 className="text-xl font-bold mb-2 text-gray-700 ">
            Rewards / Unlockables
          </h2>
          <ul className="space-y-2">
            <li className="p-3 bg-yellow-100 rounded">
              ✅ Silver Badge - ₹5000 Raised
            </li>
            <li className="p-3 bg-purple-100 rounded">
              ✅ Gold Badge - ₹10000 Raised
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
