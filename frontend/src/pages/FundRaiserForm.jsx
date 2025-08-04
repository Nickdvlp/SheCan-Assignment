import NavigationBar from "../components/NavigationBar";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";

const server = "http://localhost:3000/api/v1";
const FundRaiserForm = () => {
  const [intern, setIntern] = useState("");
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const create = await axios.post(`${server}/create/intern`, data);
      setIntern(create);
      navigate("/dashboard");
      console.log(intern);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <NavigationBar bgcolor="#F29F8F" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex justify-center items-center mt-10 flex-col gap-5"
      >
        <div className="flex flex-col items-start justify-center gap-2">
          <label className="text-sm text-zinc-500">Intern Name</label>
          <input
            {...register("internName", {
              required: "Intern Name is required",
            })}
            type="text"
            placeholder="Intern Name"
            className="border  border-gray-200  rounded-md px-6 py-2 outline-none"
          />{" "}
          {errors.internName && (
            <p className="text-xs text-rose-500">{errors.internName.message}</p>
          )}
        </div>
        <div className="flex flex-col items-start justify-center gap-2">
          <label className="text-sm text-zinc-500">First Amount </label>
          <input
            {...register("firstAmount", {
              required: "First amount should not be 0",
            })}
            type="number"
            placeholder="First Amount"
            className="border border-gray-200 px-6 py-2 outline-none rounded-md"
          />
          {errors.firstAmount && (
            <p className="text-xs text-rose-500">
              {errors.firstAmount.message}
            </p>
          )}
        </div>

        <div className="flex flex-col items-start justify-center gap-2">
          <label className="text-sm text-zinc-500">Referral Code </label>
          <input
            {...register("referralCode")}
            type="text"
            placeholder="Referral Code"
            className="border border-gray-200 px-6 py-2 outline-none rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 px-6 py-1 w-48 text-white rounded-xl hover:bg-blue-700"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default FundRaiserForm;
