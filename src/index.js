import "./styles.css";

const data = [
  {
    skill: "JavaScript",
    "2010": 0,
    "2011": 0,
    "2012": 1,
    "2013": 1,
    "2014": 1,
    "2015": 2,
    "2016": 1,
    "2017": 0,
    "2018": 0,
    "2019": 0
  },
  {
    skill: "HTML",
    "2010": 0,
    "2011": 0,
    "2012": 1,
    "2013": 1,
    "2014": 2,
    "2015": 2,
    "2016": 2,
    "2017": 1,
    "2018": 0,
    "2019": 0
  },
  {
    skill: "CSS",
    "2010": 0,
    "2011": 0,
    "2012": 1,
    "2013": 1,
    "2014": 1,
    "2015": 2,
    "2016": 2,
    "2017": 1,
    "2018": 0,
    "2019": 0
  },
  {
    skill: "React",
    "2010": 0,
    "2011": 0,
    "2012": 0,
    "2013": 0,
    "2014": 0,
    "2015": 1,
    "2016": 2,
    "2017": 2,
    "2018": 2,
    "2019": 2
  }
];

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

    // Loop through the years and create a box for each instance of the skill
    years.forEach((year) => {
      const count = skillData[year];
      for (let i = 0; i < count; i++) {
        const box = document.createElement("div");
        box.className = "box";
        column.appendChild(box);
      }
    });

    // Add the skill name to the column
    const label = document.createElement("div");
    label.textContent = skill;
    column.appendChild(label);

    // Add the column to the visualization container
    visualization.appendChild(column);
  });
}

// Initial visualization with all years
createVisualization(data, 2015, 2019);

// Add event listener to the range input to update visualization on change
// const rangeInput = document.getElementById('range');
// rangeInput.addEventListener('input', (event) => {
//   const startYear = parseInt(rangeInput.value.split(',')[0]);
//   const endYear = parseInt(rangeInput.value.split(',')[1]);
//   createVisualization(data, startYear, endYear);
// });
