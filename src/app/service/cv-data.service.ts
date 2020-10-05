import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CvDataService {
  cvData = [];

  constructor() {}

  getCVData() {
    this.cvData = [
      {
        cvExerpeince: [
          {
            id: 1,
            show: true,
            tech: ["JAVA", "Honeywell SDK", "Android SDK"],
            type: "Mobile Developer",
            problem:
              "Client needed to supply barcode scanners to various location’s but the South African driver’s license barcode is encrypted",
            solution:
              "Created an android package that Honeywell scanners can use to decrypt the SA driver’s license and enable storage of driver license details in their online database.",
            url: [
              {
                github: "https://github.com/MrJaC/SADL-Decrypt",
                icon: "logo-github",
                visible: true,
              },
            ],
            title: "DRIVERS LICENCE AND SA ID SCANNER",
            time_start: "AUGUST 2020",
            time_end: "AUGUST 2020",
          },
          {
            id: 2,
            show: true,
            tech: [
              "Laravel Framework",
              "PHP",
              "HTML",
              "CSS",
              "Javascript",
              "Ionic 4/5",
              "Angular",
              "GIT",
            ],
            type: "Mobile & Web Developer",
            problem:
              "Building an eCommerce solution to provide products to consumers via a mobile application. ",
            solution:
              "The system entails a web administration backend, a customer app, a seller app and a delivery tracking system",
            url: [
              {
                github: "",
                icon: "logo-github",
                visible: false,
              },
              {
                link: "http://ecommerce.jodicoetzee.co.za",
                icon: "globe-outline",
                visible: true,
              },
              {
                playstore:
                  "https://play.google.com/store/apps/details?id=com.oilgasconnect.app",
                icon: "logo-google-playstore",
                visible: true,
              },
            ],
            title: "OIL & GAS CONNECT",
            time_start: "JANUARY 2020",
            time_end: "--",
          },
          {
            id: 3,
            show: true,
            tech: [
              "Codeigniter Framework",
              "PHP",
              "HTML",
              "CSS",
              "Javascript",
              "Ionic 4/5",
              "Angular",
              "GIT",
            ],
            type: "Mobile & Web Developer",
            problem:
              "Building an eCommerce solution to provide products to consumers via a mobile application. ",
            solution:
              "The system entails a web administration backend, a customer app, a seller app and a delivery tracking system",
            url: [
              {
                github: "",
                icon: "logo-github",
                visible: false,
              },
              {
                link: "http://ecommerce.jodicoetzee.co.za",
                icon: "globe-outline",
                visible: true,
              },
              {
                playstore:
                  "https://play.google.com/store/apps/details?id=com.oilgasconnect.app",
                icon: "logo-google-playstore",
                visible: true,
              },
            ],
            title: "OIL & GAS CONNECT",
            time_start: "JANUARY 2020",
            time_end: "--",
          },
        ],
      },
      {
        cvEducation: [
          {
            id: 1,
            title:
              "MICROSOFT TECHNOLOGY ASSOCIATE: HTML5 APPLICATION DEVELOPMENT FUNDAMENTALS",
            date: "APRIL 2016 ",
            where: "ULTIMO - TAFE , SYDNEY",
          },
          {
            id: 2,
            title: "CERTIFICATE IV IN WEB-BASED TECHNLOGIES ",
            date: "20/07/2015 - 25/11/2015 ",
            where: "ULTIMO - TAFE , SYDNEY",
          },
          {
            id: 2,
            title:
              "BTECT NATIONAL DIPLOMA IN IT PRACTITIONERS (SOFTWARE DEVELOPMENT)",
            date: "2010 - 2012",
            where: "ULTIMO - TAFE , SYDNEY",
            attained: [
              {
                text: "Achieved 2 A Levels (Distinction, Merit)",
              },
              {
                text:
                  "Studied information Systems, event programming(C#/VB), front-end and backend production with the following skills: HTML4, CSS2, JavaScript and PHP",
              },
              {
                text: "Functional Skills - IT ( Level 2 ) Passed",
              },
              {
                text:
                  "Functional Skills - Mathematics and English  ( Level 2) Passed",
              },
              {
                text: "CISCO - CCNA Certified",
              },
            ],
          },
        ],
      },
      {
        cvSkills: {
          list: [
            {
              tech: "Laravel Framework",
              logo: "logo-laravel",
            },
            {
              tech: "Ionic Framework",
              logo: "logo-ionic",
            },
            {
              tech: "Angular",
              logo: "logo-Angular",
            },
            {
              tech: "WordPress",
              logo: "logo-wordpress",
            },
            {
              tech: "HTML5",
              logo: "logo-html5",
            },
            {
              tech: "CSS",
              logo: "logo-css3",
            },
            {
              tech: "JavaScript",
              logo: "logo-javascript",
            },
            {
              tech: "PHP",
              logo: "",
            },
          ],
        },
      },
    ];

    return this.cvData;
  }
}
