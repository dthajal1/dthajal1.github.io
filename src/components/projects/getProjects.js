import Numc from "../../resources/images/portfolio/numc.jpg";
import Gitlet from "../../resources/images/portfolio/gitlet.jpg";
// import Loa from "../../resources/images/portfolio/loa.jpg";
import SortingVisualizer from "../../resources/images/portfolio/sorting.jpg";
import Placeholder from "../../resources/images/portfolio/placeholder.jpg";
import Cs161 from "../../resources/images/portfolio/cs161.png";
import ColorGen from '../../resources/images/portfolio/color-gen.jpg'
import BarberWeb from "../../resources/images/portfolio/barber.png"
import DB from "../../resources/images/portfolio/db.jpeg"


// import { FaJava, FaReact, FaJs, FaCss3, FaEnvira, FaNode, FaGit } from 'react-icons/fa';

// const iconSize = 40

// // const numc = {
// //     title: "Numc",
// //     shortDescription: 'A version of numpy',
// //     href: 'numc',
// //     technologiesUsed: [
// //         {name: "Python", icon: <FaPython size={iconSize} color='rgb(255,211,51)' />},
// //         {name: "C", icon: <FaCopyright size={iconSize} color='rgb(41,101,241)' />},
// //         {name: "Git", icon: <FaGit size={iconSize} color='rgb(204,68,0)' />},
// //     ],
// //     img: Numc,
// //     sourceCode: "https://github.com/DirajThajali/numc",
// //     liveDemo: "",
// //     isClassProject: true,
// // }

// const gitlet = {
//     title: "Gitlet",
//     shortDescription: 'A version control system',
//     href: 'gitlet',
//     technologiesUsed: [
//         {name: "Java", icon: <FaJava size={iconSize} color='rgb(83,130,161)' />},
//         {name: "Git", icon: <FaGit size={iconSize} color='rgb(204,68,0)' />},
//     ],
//     img: Gitlet,
//     sourceCode: "https://github.com/DirajThajali/gitlet",
//     liveDemo: "",
//     isClassProject: true,
// }

// const barberWeb = {
//     title: "Barber Website",
//     shortDescription: 'Static Website',
//     href: 'barberWeb',
//     technologiesUsed: [
//         {name: "Mongo DB", icon: <FaEnvira size={iconSize} color='#599636' />},
//         {name: "Express JS", icon: <FaNode size={iconSize} color='#5BAB46' />},
//         {name: "React", icon: <FaReact size={iconSize} color='rgb(0,163,204)' />},
//         {name: "Node JS", icon: <FaNode size={iconSize} color='#5BAB46' />},
//         {name: "Javascript", icon: <FaJs size={iconSize} color='#E4A22A' />},
//         {name: "Git", icon: <FaGit size={iconSize} color='rgb(204,68,0)' />},
//     ],
//     img: BarberWeb,
//     sourceCode: "",
//     // sourceCode: "https://github.com/DirajThajali/barber-website",
//     liveDemo: "https://bbjceo.com/",
//     isClassProject: false,
// }

// const sorting = {
//     title: "Sorting Visualizer",
//     shortDescription: 'Sorting Algorithms Visualizer',
//     href: 'sorting',
//     technologiesUsed: [
//         {name: "React", icon: <FaReact size={iconSize} color='rgb(0,163,204)' />},
//         {name: "Javascript", icon: <FaJs size={iconSize} color='#E4A22A' />},
//         {name: "CSS", icon: <FaCss3 size={iconSize} color='#0D74B7' />},
//         {name: "Git", icon: <FaGit size={iconSize} color='rgb(204,68,0)' />},
//     ],
//     img: SortingVisualizer,
//     sourceCode: "",
//     // sourceCode: "https://github.com/DirajThajali/sorting-visualizer",
//     liveDemo: "https://comparison-sort-visualizer.netlify.app",
//     isClassProject: false,
// }

// const tintsAndShades = {
//     title: "Tints and Shades Generator",
//     shortDescription: 'Color Generator',
//     href: 'tintsAndShades',
//     technologiesUsed: [
//         {name: "React", icon: <FaReact size={iconSize} color='rgb(0,163,204)' />},
//         {name: "Javascript", icon: <FaJs size={iconSize} color='#E4A22A' />},
//         {name: "CSS", icon: <FaCss3 size={iconSize} color='#0D74B7' />},
//         {name: "Git", icon: <FaGit size={iconSize} color='rgb(204,68,0)' />},
//     ],
//     img: TintsAndShadesGenerator,
//     sourceCode: "",
//     // sourceCode: "https://github.com/DirajThajali/color-generator",
//     liveDemo: "https://tints-and-shades-generator.netlify.app/",
// }

// const portfolio = {
//     title: "Personal Website",
//     shortDescription: 'Portfolio',
//     href: 'portfolio',
//     technologiesUsed: [
//         {name: "React", icon: <FaReact size={iconSize} color='rgb(0,163,204)' />},
//         {name: "Javascript", icon: <FaJs size={iconSize} color='#E4A22A' />},
//         {name: "Git", icon: <FaGit size={iconSize} color='rgb(204,68,0)' />},
//     ],
//     img: "",
//     sourceCode: "",
//     // sourceCode: "https://github.com/DirajThajali/portfolio",
//     liveDemo: "/",
//     isClassProject: false,
// }

// export const projectObjects = {
//         // 'numc': numc,
//         'gitlet': gitlet,
//         'barberWeb': barberWeb,
//         'sorting': sorting,
//         'tintsAndShades': tintsAndShades,
//         'portfolio': portfolio,
// }

// export const projectList = [
//     // numc, 
//     gitlet,
//      barberWeb, 
//      sorting, tintsAndShades, portfolio]



export const projectList = [
    {
       'title' : "Portfolio",
       'isClassProject': false,
       'href': "https://dthajal1.tech/",
       'img': Placeholder,
       'shortDescription': "I created this site to showcase my portfolio",
       'description': "I created this portfolio site to showcase the projects I have been involved in and experiences I have gathered throughout the years."
    },
    // {
    //     // 'title' : "Pintos Operating System",
    //     'title' : "Pintos",
    //     'isClassProject': true,
    //     'href': "",
    // 'img': '',
    //     'shortDescription': "An operating system that is able to execute multiple programs simultaneously without running into race conditions and in-order based on the task's priority.",
    //     'description': " This is part of a class project from Operating System Course. Given a basic implementation of an operating system, I worked in a team of four to strengthen its support which included implementing process control system calls, file operation system calls, multithreading, priority scheduler and appropriate synchronizations. With the addition of our work, the OS was able to execute multiple programs simultaneously without running into race conditions and in order based on the task's priority. By working on this project I have gained a deep understanding of how OS works under the hood. Beside the technical knowledge, I have achieved an extensive knowledge/experience on how a team can work together effectively as the project required each member on the team to fully understand their tasks and be on the same page with the team throughout the semester." 
    // },
    {
        // 'title': "Gitlet - a mini version control system",
        'title': "Gitlet",
        'isClassProject': true,
       'href': "https://inst.eecs.berkeley.edu/~cs61b/sp20/materials/proj/proj3/",
       'img': Gitlet,
       'shortDescription': "A mini version control system that mimics most of the basic features of Git",
        'description': "I built this as part of a class project for the Data Structures course. We were given a list of commands to implement with a basic description of what the command does but no skeleton code and no description of how they worked behind the scene. Some of the commands I implemented included init, add, commit, rm, log, find, status, branch, reset and merge. Through this project, I was able to gain an excellent understanding of how Git works which has helped me a ton as a software engineer. Further, this was also the first large project (> thousand lines of code) I worked on which has heightened my confidence in taking on projects with larger codebases.",
    },
    {
        'title': "Algorithm Visualizer",
        'isClassProject': false,
       'href': "https://algorithm-visualizer101.netlify.app/",
       'img': SortingVisualizer,
       'shortDescription': "A web app which visualizes some of the common Sorting and Graph Algorithms",
        'description': "This is a web app which visualizes some of the common Sorting and Graph Algorithms. I am a visual learner and while I was learning different data structures and algorithms in the UC Berkeley's Data Structure course, online visualizers helped me to throughouly understand and build intuition on how the algorithms worked and so I built a similar version of it. Through this web app, users are able perform sorting algorithms such as Insertion and Merge Sort and graph algorithms such as BFS and DFS. By working on this project, I was not only able to solidify my understanding of algorithms but I also learned a new frontend tool to be able to turn my web app ideas into reality.",
    },
    {
        // 'title': "Sharebox - an End-to-End Encrypted File Sharing System",
        'title': "Sharebox",
        'isClassProject': true,
        'href': "https://sp22.cs161.org/proj2/",
        'img': Cs161,
        'shortDescription': "An end-to-end encrypted file-sharing system that allows for the secure sharing of files between multiple users",
        'description': "This is part of a class project for the Computer Security Course. I worked in a team of two to design and implement an end-to-end encrypted file-sharing system that allows for the secure sharing of files between users. Main functionalities include creating users, creating files, storing and loading files, efficiently appending to files, and sharing and unsharing files. This project heavily emphasized project design and from this, I have experienced how effective designing a solution before starting the implementation can be. I could imagine starting implementation without a high-level design (especially for projects like this where one part heavily relies on the other) only to realize later on all the code you have written is garbage.",
    },
    {
        // 'title': "Numc - a version of NumPy",
        'title': "Numc",
        'isClassProject': true,
       'href': "https://inst.eecs.berkeley.edu/~cs61c/fa20/projects/proj4/",
       'img': Numc,
       'shortDescription': "A version of the popular python library NumPy that is able to perform mathematical and logical operations on arrays and matrices efficiently",
        'description': "I built this as part of a class project for the Machine Structures course. Given a python-C interface, I coded most of the functionalities of the popular python library, Numpy, which included matrix addition, subtraction, multiplication, power, absolute value, and negation. Additionally, I optimized all the functionalities to achieve a significantly increased performance using optimization techniques and frameworks learned in class such as minimizing function calls (setting up new stack frames overhead), using OpenMP framework to parallelize computations, and using SIMD vectorized instructions to perform computations in groups.",
    },
    {
        'title': "BarberWeb",
        'isClassProject': false,
       'href': "https://barber-web-frontend.netlify.app/",
       'img': BarberWeb,
       'shortDescription': "A full stack web application designed to help a barber establish online presence for their business",
        'description': "",
    },
    {
        'title': "Database Management System",
        'isClassProject': true,
       'href': "https://cs186.gitbook.io/project/",
        'img': DB,
       'shortDescription': "In this project, I worked on enhancing a basic database system by implementing features such as B+ tree indices, efficient join algorithms, query optimization, concurrent transaction execution with locking, and database recovery",
        'description': "This project is part of a class project for Intro to Database System. We were given a basic database implementation that supports the execution of simple transactions in series. Throughout the duration of the course, I added additional functionalities to make queries faster. In the first part, I implemented support for B+ tree indices which enabled faster insertion, deletion, and search operations. In the second part, I implemented some of the efficient join algorithms such as Block Nested Loop, Sort Merge Join, and Grace Hash Join. Further, I also added query optimization using the Seligner Optimizer. In the last two parts, I added multi-granularity locking to allow concurrent execution of transactions and database recovery. By working on this project, I have acquired a great understanding of how database systems operate behind the scenes to effectively store, retrieve and run queries on data.",
    },
    // {
    //     'title': "Lines of Action",
    //     'isClassProject': true,
    //    'href': "",
    //    'img': Loa,
    //    'shortDescription': "A two player board game invented by Claude Soucie",
    //     'description': "This is part of a class project for Data Structure Course. Lines of Action is a board game invented by Claude Soucie. Given a high-level description of the board game, I coded a terminal version of the game which included implementing the game rules, legal moves, winning conditions, undoing and redoing, etc.  Further, I also implemented an Artificial Intelligence player utilizing alpha-beta pruning (effective version of minimax) algorithm. Finally, to make it more interactive, I also added a graphical user interface of the game using Java Swing library.",
    // },
    {
        'title': "Tints and Shades Generator",
        'isClassProject': false,
        'href': "https://tints-and-shades-generator.netlify.app/",
        'shortDescription': "A simple web app to help users generate variety of tints and shades given a color of their choice ",
        'img': ColorGen,
        'description': "This is a simple web app to help users generate variety of tints and shades given a color of their choice. I wanted all my apps that involves frontend to be colorfully pleasing and so I built this color generator to aid me in picking the best tints/shades.",
    },
]
