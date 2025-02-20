import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './home/contact/contact.model';

const contactBaseUrl = 'https://portfolio-contact-jacinto.herokuapp.com'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private http: HttpClient
  ) { }

  projects: any = [
  {
    id: 0,
    title: "Itinerary React.js Web Application",
    description: "Built a travel itinerary web application using the MERN stack (MongoDB, Express.js, React.js, Node.js), with the backend hosted on Netlify and the frontend on GitHub Pages.",
    topics: ["MongoDB", "Express.js", "React.js", "Node.js"],
    imgUrl: "assets/images/skills/react.png",
    repoLink: "https://github.com/jacintomendoza/itinerary-app",
    liveLink: "https://jacintomendoza.github.io/itinerary-app/"
  },
  {
    id: 1,
    title: "Finance Angular Web Application",
    description: "Developed a prototype finance web application as part of a capstone project that utilizes the front-end web application framework, Angular, and the back-end JavaScript runtime environment, Node.js.",
    topics: ["Angular", "Node.js", "Express", "Material", "PostgreSQL"],
    imgUrl: "assets/images/angular.png",
    repoLink: "https://github.com/falconInvestments/falcon-frontend",
    liveLink: "https://jacintomendoza.github.io/falconinvestments/"
  },
  {
    id: 2,
    title: "Motorcycle Inventory Web Application",
    description: "Built an angular application with a mock motorcycle API built with Sprint Boot. Backend has full CRUD functionality and also includes the ability to search for items based off end-point search criteria.",
    topics: ["Angular", "Spring Boot", "MongoDB"],
    imgUrl: "assets/images/angular.png",
    repoLink: "https://github.com/jacintomendoza/moto-inventory-project",
    liveLink: "https://moto-inventory.web.app/"
  },
  {
    id: 3,
    title: "ETL Pipeline",
    description: "Created an end-to-end batch ETL solution via Amazon Web Services (AWS) from an existing on-premises IT infrastructure. This project managed raw data such as semi-structured and structured data to be transformed and loaded using multiple AWS services such as Redshift, DynamoDB, RDS, EMR, QuickSight, and Lambda for data analytics.",
    topics: ["AWS"],
    imgUrl: "assets/images/aws.png",
    repoLink: "",
    liveLink: ""
  },
  {
    id: 4,
    title: "GUI Ice Cream Application",
    description: "Developed a C++ GUI program via gtkmm that displays to customers a user interface for creating order tickets from an ice cream shop. Created for my object-oriented programming course in which had a score percentage above 150 due to the many extra features added into the program.",
    topics: ["C++", "GTK", "gtkmm"],
    imgUrl: "assets/images/ice_cream.png",
    repoLink: "https://github.com/jacintomendoza/ice-cream-emporium",
    liveLink: ""
  },
  {
    id: 5,
    title: "Airline Reservation Database",
    description: "Designed and implemented a relational database system for an online airline travel reservation system. Project included creating an ER/EER schema diagram, implementing MySQL, and running queries.",
    topics: ["MySQL"],
    imgUrl: "assets/images/mysql.png",
    repoLink: "",
    liveLink: ""
  },
  {
    id: 6,
    title: "Service Application",
    description: "Developed an Android application with a small team in which users can initiate service requests for their home or small business and calculate the cost. Created using the agile software development process.",
    topics: ["Android","Java"],
    imgUrl: "assets/images/android.png",
    repoLink: "",
    liveLink: ""
  }
  ]

  skills: any = [
  {
    id: 1,
    skill: "Angular",
    imgUrl: "assets/images/skills/angular.png",
    proficiency: 5
  },
  {
    id: 2,
    skill: "Postman",
    imgUrl: "assets/images/skills/postman.png",
    proficiency: 5
  },
  {
    id: 3,
    skill: "npm",
    imgUrl: "assets/images/skills/npm.png",
    proficiency: 5
  },
  {
    id: 4,
    skill: "React",
    imgUrl: "assets/images/skills/react.png",
    proficiency: 4
  },
  {
    id: 5,
    skill: "Spring Boot",
    imgUrl: "assets/images/skills/spring-boot.png",
    proficiency: 3
  },
  {
    id: 6,
    skill: "Node.js",
    imgUrl: "assets/images/skills/nodejs.png",
    proficiency: 3
  },
  {
    id: 7,
    skill: "CSS",
    imgUrl: "assets/images/skills/css.png",
    proficiency: 4
  },
  {
    id: 8,
    skill: "Express.js",
    imgUrl: "assets/images/skills/expressjs.png",
    proficiency: 3
  },
  {
    id: 9,
    skill: "SCSS",
    imgUrl: "assets/images/skills/scss.png",
    proficiency: 4
  },
  {
    id: 10,
    skill: "TypeScript",
    imgUrl: "assets/images/skills/typescript.png",
    proficiency: 4
  }
  ]

  experiences: any = [
    {
      id: 0,
      company: "Fiserv",
      title: ["Software Development Engineer"],
      description: [
        "Modernize and develop DNA, Fiserv’s core banking platform, leveraging Angular 17+ and agile methodologies.",
        "Collaborate with cross-functional teams to seamlessly integrate front-end user interfaces with back-end service layers.",
        "Diagnose and resolve performance issues across the software development lifecycle, ensuring robust and high-performing solutions.",
        "Deliver timely bug fixes and implement new features to meet stakeholder requirements while ensuring flexibility, scalability, and code maintainability."
      ],
      imgUrl: "assets/images/fiserv.jpg",
      startDate: "May 2022",
      endDate: "Present"
    },
    {
      id: 1,
      company: "Talent Path",
      title: ["Data Engineer", "Full Stack Engineer"],
      description: [
        "Completed an eleven-week full-stack program, working with technologies such as Angular, Node.js, Express.js, and PostgreSQL, building end-to-end solutions for web applications.",
        "Developed a finance web application prototype, applying TypeScript, Angular, Node.js, Material-UI, PostgreSQL and Express.js.",
        "Gained hands-on experience with AWS components (Redshift, RDS, Lambda, etc.), contributing to a strong foundation in cloud services and large application systems."
      ],
      imgUrl: "assets/images/talentpath.png",
      startDate: "July 2021",
      endDate: "April 2022"
    }
  ]

  getProjects(): Observable<any[]> {
    return this.projects;
  }
  
  getSkills(): Observable<any[]> {
    return this.skills;
  }

  getExperiences(): Observable<any[]> {
    return this.experiences;
  }

  createContact(newContact: Contact): Observable<Contact> {
    return this.http.post<Contact>(contactBaseUrl + '/addContact', newContact);
  }
}