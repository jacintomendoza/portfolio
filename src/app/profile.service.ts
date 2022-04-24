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
    title: "Finance Web Application",
    description: "Developed a prototype finance web application as part of a capstone project that utilizes the front-end web application framework, Angular, and the back-end JavaScript runtime environment, Node.js.",
    topics: ["Angular", "Node.js", "Express", "Material", "PostgreSQL"],
    imgUrl: "assets/images/angular.png",
    repoLink: "https://github.com/falconInvestments/falcon-frontend",
    liveLink: "https://jacintomendoza.github.io/falconinvestments/"
  },
  {
    id: 1,
    title: "Motorcycle Inventory Web Application",
    description: "Built an angular application with a mock motorcycle API built with Sprint Boot. Backend has full CRUD functionality and also includes the ability to search for items based off end-point search criteria.",
    topics: ["Angular", "Spring Boot", "MongoDB"],
    imgUrl: "assets/images/angular.png",
    repoLink: "https://github.com/jacintomendoza/moto-inventory-project",
    liveLink: "https://moto-inventory.web.app/"
  },
  {
    id: 2,
    title: "ETL Pipeline",
    description: "Created an end-to-end batch ETL solution via Amazon Web Services (AWS) from an existing on-premises IT infrastructure. This project managed raw data such as semi-structured and structured data to be transformed and loaded using multiple AWS services such as Redshift, DynamoDB, RDS, EMR, QuickSight, and Lambda for data analytics.",
    topics: ["AWS"],
    imgUrl: "assets/images/aws.png",
    repoLink: "",
    liveLink: ""
  },
  {
    id: 3,
    title: "GUI Ice Cream Application",
    description: "Developed a C++ GUI program via gtkmm that displays to customers a user interface for creating order tickets from an ice cream shop. Created for my object-oriented programming course in which had a score percentage above 150 due to the many extra features added into the program.",
    topics: ["C++", "GTK", "gtkmm"],
    imgUrl: "assets/images/ice_cream.png",
    repoLink: "https://github.com/jacintomendoza/ice-cream-emporium",
    liveLink: ""
  },
  {
    id: 4,
    title: "Airline Reservation Database",
    description: "Designed and implemented a relational database system for an online airline travel reservation system. Project included creating an ER/EER schema diagram, implementing MySQL, and running queries.",
    topics: ["MySQL"],
    imgUrl: "assets/images/mysql.png",
    repoLink: "",
    liveLink: ""
  },
  {
    id: 5,
    title: "Service Application",
    description: "Developed an Android application with a small team in which users can initiate service requests for their home or small business and calculate the cost. Created using the agile software development process.",
    topics: ["Android","Java"],
    imgUrl: "assets/images/android.png",
    repoLink: "",
    liveLink: ""
  },
  {
    id: 6,
    title: "JUnit Program Testing",
    description: "Ensured that a given code has full coverage for all possible inputs using JUnit testing through the Eclipse IDE platform. Involved creating a Control Flow Graph for each individual method as well as for the main method, executing JUnit source code and correcting any detected faults within the program.",
    topics: ["Java"],
    imgUrl: "assets/images/junit.png",
    repoLink: "",
    liveLink: ""
  },
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
    skill: "Spring Boot",
    imgUrl: "assets/images/skills/spring-boot.png",
    proficiency: 4
  },
  {
    id: 5,
    skill: "Node.js",
    imgUrl: "assets/images/skills/nodejs.png",
    proficiency: 4
  },
  {
    id: 6,
    skill: "Express.js",
    imgUrl: "assets/images/skills/expressjs.png",
    proficiency: 4
  },
  {
    id: 7,
    skill: "CSS",
    imgUrl: "assets/images/skills/css.png",
    proficiency: 4
  },
  {
    id: 8,
    skill: "SCSS",
    imgUrl: "assets/images/skills/scss.png",
    proficiency: 4
  },
  {
    id: 9,
    skill: "TypeScript",
    imgUrl: "assets/images/skills/typescript.png",
    proficiency: 4
  },
  {
    id: 10,
    skill: "React",
    imgUrl: "assets/images/skills/react.png",
    proficiency: 2
  },
  ]

  experiences: any = [
    {
      id: 0,
      company: "Talent Path",
      title: ["Data Engineer", "Full Stack Engineer"],
      description: ["Completed a hands-on ten-week program that utilized multiple components of AWS such as Redshift, RDS, Lambda, Glue, EMR, S3, DynamoDB, and QuickSight.",  "Created an end-to-end ETL pipeline that creates analytical insights based on semi and structured data.", "Completed an eleven-week full stack program utilizes technologies such as the front-end Angular framework and the backend Node.js environment with the Express.js framework.",  "Built an angular application with a mock motorcycle API built with Sprint Boot.",  "Backend has full CRUD functionality and also includes the ability to search for items based off end-point search criteria.",  "Created a prototype finance web application that utilizes Angular, Node.js, Material-UI, PostgreSQL, MongoDB and Express.js."],
      imgUrl: "assets/images/talentpath.png",
      startDate: "July 2021",
      endDate: "April 2022"
    },
    {
      id: 1,
      company: "Fiserv",
      title: ["Software Development Engineering - Professional II"],
      description: ["No information available at this current time."],
      imgUrl: "assets/images/fiserv.jpg",
      startDate: "May 2022",
      endDate: "Present"
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