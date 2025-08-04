import mongoose from "mongoose";

const internSchema = new mongoose.Schema(
  {
    internName: {
      type: String,
      required: true,
    },
    referralCode: {
      type: String,
      unique: true,
    },
    firstAmount: {
      type: String,
      required: true,
    },
    totalDonations: {
      type: Number,
      default: 0,
    },
    rewardsUnlocked: {
      type: [String],
      default: ["bronze"],
    },
  },
  { timestamps: true }
);

const Intern = mongoose.model("Intern", internSchema);
export default Intern;
