export type QuestionType = {
  question: string;
  options: string[];
  answer: string;
  selected:string,
};
export const data: QuestionType[] = [
  {
    question:
      "What is the purpose of a package.json file in a Node.js project?",
    options: [
      "To manage project dependencies and scripts",
      "To store metadata about the project",
      "To configure the database connection",
      "To define the project's HTML structure",
    ],
    answer: "To manage project dependencies and scripts",
    selected:"To manage project dependencies and scripts",
  },
  {
    question:
      "Which HTTP method is typically used for retrieving data from a server?",
    options: ["GET", "POST", "PUT", "DELETE"],
    answer: "GET",
    selected:"GET",
  },
  {
    question:
      "What does MVC stand for in the context of software architecture?",
    options: [
      "Most Valuable Component",
      "Main View Configuration",
      "Model View Controller",
      "Model Visual Control",
    ],
    answer: "Model View Controller",
    selected:"Most Valuable Component",
  },
  {
    question:
      "Which programming language is commonly used for creating dynamic and interactive web pages?",
    options: ["Java", "JavaScript", "Python", "C#"],
    answer: "JavaScript",
    selected:"Java",
  },
  {
    question: "What does SQL stand for in the context of databases?",
    options: [
      "Sequential Query Language",
      "Structured Query Language",
      "Single Query Logic",
      "Server Query Link",
    ],
    answer: "Structured Query Language",
    selected:"Sequential Query Language",
  },
  {
    question: "What is the purpose of a Docker container?",
    options: [
      "To store large amounts of data",
      "To manage user authentication",
      "To monitor server performance",
      "To package and run an application with all its dependencies",
    ],
    answer: "To package and run an application with all its dependencies",
    selected:"To store large amounts of data",
  },
  {
    question: "What does CRUD stand for in the context of database operations?",
    options: [
      "Copy, Retrieve, Update, Destroy",
      "Create, Read, Update, Delete",
      "Create, Remove, Update, Deliver",
      "Compile, Run, Undo, Debug",
    ],
    answer: "Create, Read, Update, Delete",
    selected:"Copy, Retrieve, Update, Destroy",
  },
  {
    question:
      "Which version control system is commonly used for managing source code in software development?",
    options: ["SVN", "Mercurial", "Git","Perforce"],
    answer: "Git",
    selected:"SVN",
  },
  {
    question: "What is the purpose of a constructor function in JavaScript?",
    options: [
      "To define CSS styles",
      "To perform mathematical calculations",
      "To initialize object instances",
      "To create new HTML elements",
    ],
    answer: "To initialize object instances",
    selected:"To define CSS styles",
  },
  {
    question: "What does API stand for in the context of software development?",
    options: [
      "Automated Program Interaction",
      "Application Protocol Interface",
      "Application Programming Interface",
      "Automated Programming Interface",
    ],
    answer: "Application Programming Interface",
    selected:"Automated Program Interaction",
  },
  {
    question: "Which HTTP status code indicates a successful response?",
    options: ["200", "404", "500", "302"],
    answer: "200",
    selected:"200",
  },
  {
    question: "What is the purpose of unit testing in software development?",
    options: [
      "To test the entire system as a whole",
      "To verify the correctness of individual units of code",
      "To ensure the user interface is intuitive",
      "To optimize database queries",
    ],
    answer: "To verify the correctness of individual units of code",
    selected:"To test the entire system as a whole",
  },
  {
    question:
      "Which software development methodology emphasizes adaptive planning, evolutionary development, early delivery, and continuous improvement?",
    options: ["Agile", "Waterfall", "Scrum", "Kanban"],
    answer: "Agile",
    selected:"Agile",
  },
  {
    question: "What is the purpose of a foreign key in a relational database?",
    options: [
      "To perform complex mathematical calculations",
      "To store large binary data",
      "To establish a relationship between two tables",
      "To enforce unique constraints",
    ],
    answer: "To establish a relationship between two tables",
    selected:"To perform complex mathematical calculations",
  },
  {
    question: "What is the purpose of a CSS preprocessor like Sass or Less?",
    options: [
      "To extend CSS with features like variables and mixins",
      "To convert CSS into HTML",
      "To optimize website performance",
      "To generate JavaScript code",
    ],
    answer: "To extend CSS with features like variables and mixins",
    selected:"To extend CSS with features like variables and mixins",
  },
  {
    question:
      "Which type of testing checks if the software meets the specified requirements and works correctly?",
    options: [
      "Performance testing",
      "Functional testing",
      "Security testing",
      "Usability testing",
    ],
    answer: "Functional testing",
    selected:"Performance testing",
  },
  {
    question: "What is the purpose of the npm registry?",
    options: [
      "To manage user authentication",
      "To monitor server performance",
      "To host packages and modules for Node.js",
      "To store large binary data",
    ],
    answer: "To host packages and modules for Node.js",
    selected:"To manage user authentication",
  },
  {
    question: "What is the purpose of the 'this' keyword in JavaScript?",
    options: [
      "To declare a variable",
      "To define a function",
      "To handle exceptions",
      "To refer to the current object",
    ],
    answer: "To refer to the current object",
    selected:"To declare a variable",
  },
  {
    question:
      "Which database model represents data as objects, typically in a key-value pair format?",
    options: ["NoSQL", "Relational", "Hierarchical", "Network"],
    answer: "NoSQL",
    selected:"NoSQL",
  },
  {
    question: "What does XSS stand for in the context of web security?",
    options: [
      "XML Security Standard",
      "XHTML Style Sheets",
      "Cross-Site Scripting",
      "External Style Sheets",
    ],
    answer: "Cross-Site Scripting",
    selected:"XML Security Standard",
  },
];
