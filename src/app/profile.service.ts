import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from './home/projects/project.model';
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
    id: 1,
    title: "ETL Pipeline",
    description: "Created an end-to-end batch ETL solution via Amazon Web Services (AWS) from an existing on-premises IT infrastructure. This project managed raw data such as semi-structured and structured data to be transformed and loaded using multiple AWS services such as Redshift, DynamoDB, RDS, EMR, QuickSight, and Lambda for data analytics.",
    topics: ["AWS"],
    imgUrl: "assets/images/aws.png",
    repoLink: "",
    liveLink: ""
  },
  {
    id: 2,
    title: "Finance Web Application",
    description: "Developed a prototype finance web application as part of a capstone project that utilizes the front-end web application framework, Angular, and the back-end JavaScript runtime environment, Node.js.",
    topics: ["Angular", "Node.js", "Express", "Material", "PostgreSQL"],
    imgUrl: "assets/images/angular.png",
    repoLink: "https://github.com/falconInvestments/falcon-frontend",
    liveLink: "https://falcon-investments.herokuapp.com/home"
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
    skill: "Spring Boot",
    imgUrl: "",
    proficiency: 4
  },
  {
    id: 3,
    skill: "Node.js",
    imgUrl: "",
    proficiency: 4
  },
  {
    id: 4,
    skill: "Express.js",
    imgUrl: "",
    proficiency: 4
  },
  {
    id: 5,
    skill: "CSS",
    imgUrl: "",
    proficiency: 4
  },
  {
    id: 6,
    skill: "SCSS",
    imgUrl: "",
    proficiency: 4
  },
  {
    id: 7,
    skill: "TypeScript",
    imgUrl: "",
    proficiency: 4
  },
  {
    id: 8,
    skill: "CSS",
    imgUrl: "",
    proficiency: 3
  },
  {
    id: 9,
    skill: "Postman",
    imgUrl: "",
    proficiency: 5
  },
  {
    id: 10,
    skill: "npm",
    imgUrl: "",
    proficiency: 5
  },
  ]

  getProjects(): Observable<any[]> {
    return this.projects;
  }
  
  getSkills(): Observable<any[]> {
    return this.skills;
  }

  createContact(newContact: Contact): Observable<Contact> {
    return this.http.post<Contact>(contactBaseUrl + '/addContact', newContact);
  }
}