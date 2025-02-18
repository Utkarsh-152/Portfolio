interface Skill {
  name: string;
  logo: string;
}

interface SkillCategory {
  category: string;
  description: string;
  skills: Skill[];
}

export const technicalSkills: SkillCategory[] = [
  {
    category: "Data Science",
    description: "Building intelligent solutions with data",
    skills: [
      {
        name: "Python",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
      },
      {
        name: "TensorFlow",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg"
      },
      {
        name: "Scikit-learn",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg"
      },
      {
        name: "Pandas",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg"
      },
      {
        name: "NumPy",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg"
      }
    ]
  },
  {
    category: "Frontend Development",
    description: "Creating beautiful user experiences",
    skills: [
      {
        name: "React",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
      },
      {
        name: "JavaScript",
        logo: "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/javascript/javascript-original.svg"
      },
      {
        name: "Tailwind CSS",
        logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
      },
      {
        name: "HTML5",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"
      },
      {
        name: "CSS3",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"
      }
    ]
  },
  {
    category: "Backend Development",
    description: "Building robust server-side applications",
    skills: [
      {
        name: "Node.js",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg"
      },
      {
        name: "Flask",
        logo: "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/flask/flask-original.svg"
      },
      {
        name: "PostgreSQL",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg"
      },
      {
        name: "MongoDB",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg"
      }
    ]
  },
  {
    category: "Data Visualization",
    description: "Transforming data into insights",
    skills: [
      {
        name: "Power BI",
        logo: "https://raw.githubusercontent.com/microsoft/PowerBI-Icons/main/SVG/Power-BI.svg"
      },
      {
        name: "Tableau",
        logo: "https://cdn.worldvectorlogo.com/logos/tableau-software.svg"
      },
      {
        name: "Plotly",
        logo: "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/plotly/plotly-original.svg"
      },
      {
        name: "Matplotlib",
        logo: "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/matplotlib/matplotlib-original.svg"
      }
    ]
  },
  {
    category: "DevOps & Tools",
    description: "Streamlining development and deployment",
    skills: [
      {
        name: "Git",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg"
      },
      {
        name: "AWS",
        logo: "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
      },
      {
        name: "Linux",
        logo: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg"
      }
    ]
  }
];