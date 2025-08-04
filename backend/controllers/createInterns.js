import Intern from "../modals.js";

export const createIntern = async (req, res) => {
  const { internName, firstAmount, referralCode } = req.body;

  if (!internName || !firstAmount || !referralCode) {
    return res.status(401).json({ message: "All fields are required" });
  }

  const existing = await Intern.findOne({ internName });

  if (existing) {
    return res.status(400).json("Intern already exists.");
  }

  const newIntern = await Intern.create({
    internName,
    firstAmount,
    referralCode,
    totalDonations: firstAmount,
    rewardsUnlocked: "bronze",
  });
  return res.status(200).json(newIntern);
};
