import "./styles.css";
import { data } from "./skills-data";

const visualization = document.getElementById("visualization");

function createVisualization(data, startYear, endYear) {
  // Remove any columns that are already in the visualization
  console.log("starting");
  while (visualization.firstChild) {
    visualization.removeChild(visualization.firstChild);
  }

  // Filter the data to include only the years within the given range
  const filteredData = data.map((skillData) => {
    const filteredYears = Object.keys(skillData).filter(
      (key) =>
        key !== "skill" &&
        parseInt(key) >= startYear &&
        parseInt(key) <= endYear
    );
    const filteredSkillData = { skill: skillData.skill };
    filteredYears.forEach((year) => {
      filteredSkillData[year] = skillData[year];
    });

    return filteredSkillData;
  });

  // Loop through the filtered data and create a column for each skill
  console.log(filteredData);
  filteredData.forEach((skillData) => {
    const skill = skillData.skill;
    const years = Object.keys(skillData).filter((key) => key !== "skill");
    const column = document.createElement("div");
    column.className = "column";
    // Add the skill name to the column
    const label = document.createElement("div");
    label.textContent = skill;
    column.appendChild(label);
    // Loop through the years and create a box for each instance of the skill
    years.forEach((year) => {
      if (skillData[year] > 0) {
        const box = document.createElement("div");
        box.className = "box";
        column.appendChild(box);
      }
    });

    // Add the column to the visualization container
    visualization.appendChild(column);
  });
}

// Initial visualization with all years
createVisualization(data, 2000, 2023);

//Add event listener to the range input to update visualization on change

// rangeInput.addEventListener("input", (event) => {
//   //const startYear = parseInt(rangeInput.value.split(",")[0]);
//   const endYear = parseInt(rangeInput.value.split(",")[1]);
//   //createVisualization(data, startYear, endYear);
//   createVisualization(data, 2015, 2011);
// });
