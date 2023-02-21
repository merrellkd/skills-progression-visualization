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

// Find the visualization container element
const visualization = document.getElementById("visualization");

// Loop through the data and create a column for each skill
data.forEach((skillData) => {
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
