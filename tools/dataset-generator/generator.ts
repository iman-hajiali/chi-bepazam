import { foodsSeed } from "./foods.seed";
import * as path from "path";import * as fs from "fs";


function generateFoods() {
  const outputDir = path.join(__dirname, "../../dataset");

  foodsSeed.forEach((food) => {
    const fileName = `${food.food_id}.json`;
    const filePath = path.join(outputDir, fileName);

    fs.writeFileSync(
      filePath,
      JSON.stringify(food, null, 2),
      "utf-8"
    );

    console.log(`Generated: ${fileName}`);
  });
}

generateFoods();