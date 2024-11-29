import { RequestHandler } from "express";

// Handler to process the request and generate the random value
export const getValueHandler: RequestHandler = (req, res) => {
  const { seed } = req.params;

  const parsedSeed = Number(seed);
  if (isNaN(parsedSeed)) {
    return res
      .status(400)
      .json({ message: "Seed is required and must be a number" });
  }

  try {
    let threshold_value = parsedSeed + 10;

    if (threshold_value >= 100) {
      threshold_value = 99;
    }

    const random_value = randomInteger(parsedSeed, threshold_value);

    return res.status(200).json({ value: random_value });
  } catch (err) {
    console.error(err); // Log the error for debugging
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const randomInteger = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
