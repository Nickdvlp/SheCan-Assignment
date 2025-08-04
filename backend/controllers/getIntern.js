import Intern from "../modals.js";

export const getIntern = async (req, res) => {
  const intern = await Intern.find();
  return res.status(200).json(intern);
};
