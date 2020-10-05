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
        cvExperience: [
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
              "Client wanted a solution that tracked their truck drivers and deliveries. ",
            solution:
              "It is designed to allow the business owner to report on truck driver productivity with the ability to view their weekly /monthly trip lists, create reports and perform invoicing. The application allows to capture trips, load waybills, petrol and delivery documents",
            url: [
              {
                github: "",
                icon: "logo-github",
                visible: false,
              },
              {
                link: "",
                icon: "globe-outline",
                visible: false,
              },
              {
                playstore:
                "https://play.google.com/store/apps/details?id=com.zst.app&hl=en_ZA",
                icon: "logo-google-playstore",
                visible: true,
              },
            ],
            title: "Zwane Squared Trucking",
            time_start: "SEPTEMBER 2019",
            time_end: "NOVEMBER 2020",
          },
          {
            id: 4,
            show: true,
            tech: ["WordPress"],
            type: "Web Developer",
            problem:
              "Client needed a website to display their mobile application ",
            solution:
              "We decided on a WordPress theme for the fast customization and to allow the client to update the site themselves",
            url: [
              {
                github: "",
                icon: "logo-github",
                visible: false,
              },
              {
                link: "https://intouchadvertising.co.za",
                icon: "globe-outline",
                visible: true,
              },
              {
                playstore:
                "",
                icon: "logo-google-playstore",
                visible: false,
              },
            ],
            title: "InTouch Advertising",
            time_start: "June 2019",
            time_end: "July 2019",
          },
          {
            id: 5,
            show: true,
            tech: ["CodeIgniter", "Angular", "HTML5", "CSS3", "Ionic 3", "JavaScript", "OneSignal"],
            type: "Mobile & Web Developer",
            problem:
              "Client had an idea to create an advertisment platform via a mobile application for both iOS and Android",
            solution:
              "Built the mobile application using Ionic version 3 & used the Codeigniter Framework for the backend. The application pulls in JSON data for display purposes as well integrated OneSignal for notifications.",
            url: [
              {
                github: "",
                icon: "logo-github",
                visible: false,
              },
              {
                link: "https://intouchadvertising.co.za",
                icon: "globe-outline",
                visible: true,
              },
              {
                playstore:
                "https://play.google.com/store/apps/details?id=com.intoucheastrand.intoucheastrandapp",
                icon: "logo-google-playstore",
                visible: true,
              },
            ],
            title: "InTouch Advertising Mobile Application",
            time_start: "Febuary 2019",
            time_end: "June 2019",
          },
          {
            id: 6,
            show: true,
            tech: ["WordPress"],
            type: "Web Developer",
            problem:
              "Client needed a website that allowed for students to sign up for courses provided by the client.",
            solution:
              "We decided on a WordPress Theme and all intregration were set up by myself, which also allowed the clients employees to edit any content or add in any new courses.",
            url: [
              {
                github: "",
                icon: "logo-github",
                visible: false,
              },
              {
                link: "https://awciinstute.co.za",
                icon: "globe-outline",
                visible: true,
              },
              {
                playstore:
                "",
                icon: "logo-google-playstore",
                visible: false,
              },
            ],
            title: "AWCI Institute",
            time_start: "October 2018",
            time_end: "November 2018",
          },
          {
            id: 7,
            show: true,
            tech: ["WordPress"],
            type: "Web Developer",
            problem:
              "Client wanted to revamp their website",
            solution:
              "AWCI required a new and fresh look for their company website. I decided to go with WordPress as they were familiar with the platform. The requirements were to be able to show case their properties and for their employees to login and update page content when needed.",
            url: [
              {
                github: "",
                icon: "logo-github",
                visible: false,
              },
              {
                link: "https://awciproperty.co.za",
                icon: "globe-outline",
                visible: true,
              },
              {
                playstore:
                "",
                icon: "logo-google-playstore",
                visible: false,
              },
            ],
            title: "AWCI Property",
            time_start: "April 2018",
            time_end: "May 2018",
          },
          {
            id: 8,
            show: true,
            tech: ["WordPress"],
            type: "Web Developer",
            problem:
              "A Sydney based tattoo studio contacted me about rebuilding their website which was to include both a portfolio and an ecommerce store",
            solution:
              "The Solution was to go with WordPress & WooCommerce which allowed the studio to allow for bookings and to sell products related to their studio and to allow ttheir respective artists to upload their content( ART Work )",
            url: [
              {
                github: "",
                icon: "logo-github",
                visible: false,
              },
              {
                link: "https://v-ink.com.au",
                icon: "globe-outline",
                visible: true,
              },
              {
                playstore:
                "",
                icon: "logo-google-playstore",
                visible: false,
              },
            ],
            title: "Venomous Ink",
            time_start: "January 2016",
            time_end: "September 2016",
          },
          {
            id: 9,
            show: true,
            tech: ["WordPress"],
            type: "Web Developer",
            problem:
              "The client contacted me on updated repairing his WordPress template that he installed.",
            solution:
              "I fixed navigational items, changed layouts, updated content and added various items as well doing WordPress updates and database backups.",
            url: [
              {
                github: "",
                icon: "logo-github",
                visible: false,
              },
              {
                link: "https://tattoodirectory.com.au",
                icon: "globe-outline",
                visible: true,
              },
              {
                playstore:
                "",
                icon: "logo-google-playstore",
                visible: false,
              },
            ],
            title: "Tattoo Directory",
            time_start: " Febuary 2016",
            time_end: "",
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
            where: "Bedford College, UK",
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
