import { UserButton, useUser } from "@clerk/clerk-react";

const NavigationBar = ({ bgcolor }) => {
  const { user } = useUser();
  const username = user?.fullName?.toUpperCase();
  return (
    <div
      className=" rounded-md flex items-center justify-between px-3 py-2"
      style={{
        backgroundColor: bgcolor,
      }}
    >
      <h1 className="font-bold text-xl">SheCan Intern</h1>
      <div className="flex items-center gap-2">
        <UserButton
          appearance={{
            elements: {
              userButtonAvatarBox: {
                height: "30px",
                width: "30px",
              },
            },
          }}
        />
        <h1 className="font-semibold bg-gray-100 text-sm px-3 py-2 rounded-full">
          {username}
        </h1>
      </div>
    </div>
  );
};

export default NavigationBar;
