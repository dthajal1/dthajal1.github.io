import Numc from "../../resources/images/portfolio/numc.jpg";
import Gitlet from "../../resources/images/portfolio/gitlet.jpg";
import Loa from "../../resources/images/portfolio/loa.jpg";
import SortingVisualizer from "../../resources/images/portfolio/sorting.jpg";
import Placeholder from "../../resources/images/portfolio/placeholder.jpg";
import Cs161 from "../../resources/images/portfolio/cs161.png";
import ColorGen from '../../resources/images/portfolio/color-gen.jpg'
import BarberWeb from "../../resources/images/portfolio/barber.png"
import DB from "../../resources/images/portfolio/db.jpeg"
import TxtToZoomChat from "../../resources/images/portfolio/txtToZoomChat.png"
import DocuBot from "../../resources/images/portfolio/docuBot.png"
import PathFinder from "../../resources/images/portfolio/pathFinder.png"
import Typing from "../../resources/images/portfolio/typing.png"


export const projectList = [
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
        'title': "Docu Bot",
        'isClassProject': false,
        'href': "https://github.com/dthajal1/docu-bot",
        'technologies': ["Python", "LangChain", "Pinecone","Streamlit"],
        'img': DocuBot,
        'shortDescription': "A GenAI powered Q&A bot for your documentation",
    },
    {
        'title': "Txt-to-zoomChat",
        'isClassProject': false,
        'href': "https://github.com/dthajal1/txt-to-zoom-chat",
        'technologies': ["React", "Javascript", "Material UI"],
        'img': TxtToZoomChat,
        'shortDescription': "A web app to convert chat logs in text file to Zoom chat format",
    },
    {
        'title': "Gitlet",
        'isClassProject': true,
       'href': "https://inst.eecs.berkeley.edu/~cs61b/sp20/materials/proj/proj3/",
       'technologies': ["Java"],
       'img': Gitlet,
       'shortDescription': "A mini version control system that mimics most of the basic features of Git",
    },
    {
        "title": "Path Finder",
        "isClassProject": false,
        "href": "https://github.com/dthajal1/pathfinder",
        "technologies": ["React", "Javascript", "Material UI"],
        "img": PathFinder,
        "shortDescription": "Graph Algorithm Visualizer. Visualizes the paths each algorithm takes to get to its goal state.",
    },
    {
        'title': "Sorting Algorithm Visualizer",
        'isClassProject': false,
       'href': "https://algorithm-visualizer101.netlify.app/",
       'technologies': ["React", "Javascript", "Material UI"],
       'img': SortingVisualizer,
       'shortDescription': "An app that visualizes some of the common Sorting Algorithms",
    },
    {
        // 'title': "Sharebox - an End-to-End Encrypted File Sharing System",
        'title': "Sharebox",
        'isClassProject': true,
        'href': "https://sp22.cs161.org/proj2/",
        'technologies': ["Go", "Git"],
        'img': Cs161,
        'shortDescription': "An end-to-end encrypted file-sharing system that allows for the secure sharing of files between multiple users",
    },
    {
        // 'title': "Numc - a version of NumPy",
        'title': "Numc",
        'isClassProject': true,
       'href': "https://inst.eecs.berkeley.edu/~cs61c/fa20/projects/proj4/",
       'technologies': ["C", "Python", "Git"],
       'img': Numc,
       'shortDescription': "A version of the popular python library NumPy that is able to perform mathematical and logical operations on arrays and matrices efficiently",
    },
    {
        'title': "BarberWeb",
        'isClassProject': false,
       'href': "https://barber-web-frontend.netlify.app/",
       'technologies': ["Next.js", "React", "Material UI", "MongoDB"],
       'img': BarberWeb,
       'shortDescription': "A full stack web application for a barber to establish online presence for their haircut business",
    },
    {
        'title': "Database Management System",
        'isClassProject': true,
       'href': "https://cs186.gitbook.io/project/",
       'technologies': ["Java", "Git"],
        'img': DB,
       'shortDescription': "In this project, I worked on enhancing a basic database system by implementing features such as B+ tree indices, efficient join algorithms, query optimization, concurrent transaction execution with locking, and database recovery",
    },
    {
        'title': "Lines of Action",
        'isClassProject': true,
       'href': "",
       'img': Loa,
       'technologies': ["Java", "Java Swing", "Git"],
       'shortDescription': "A two player board game invented by Claude Soucie",
    },
    {
        'title': "Tints/Shades Generator",
        'isClassProject': false,
        'href': "https://tints-and-shades-generator.netlify.app/",
        'technologies': ["React", "Javascript", "CSS"],
        'shortDescription': "An app to help users generate variety of tints and shades given a color of their choice ",
        'img': ColorGen,
    },
    {
        'title': 'Autocorrected Typing Software',
        'isClassProject': true,
        'href': "https://github.com/dthajal1/cs61a/blob/master/Projects/cats/typing.py",
        'technologies': ["Python", "Git"],
        'img': Typing,
        'shortDescription': "A simple typing game with autocorrection"
    },
    {
        'title' : "Portfolio",
        'isClassProject': false,
        'href': "https://dthajal1.tech/",
        'technologies': ["React", "Material UI", "GH Pages"],
        'img': Placeholder,
        'shortDescription': "I created this site to showcase my portfolio",
    },
]
