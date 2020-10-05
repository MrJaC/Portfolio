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
              },
            ],
            title: "DRIVERS LICENCE AND SA ID SCANNER",
            time_start: "AUGUST 2020",
            time_end: "AUGUST 2020",
          },
          {
            id: 2,
            tech: ["Laravel Framework", "PHP", "HTML" , "CSS" , "Javascript", "Ionic 4/5", "Angular", "GIT"],
            type: "Mobile Developer",
            problem:
              "Building an eCommerce solution to provide products to consumers via a mobile application. ",
            solution:
              "The system entails a web administration backend, a customer app, a seller app and a delivery tracking system",
            url: [
              {
                github: "https://github.com/MrJaC/SADL-Decrypt",
                icon: "logo-github",
              },
            ],
            title: "DRIVERS LICENCE AND SA ID SCANNER",
            time_start: "AUGUST 2020",
            time_end: "AUGUST 2020",
          }
        ],
      },
      {
        cvEducation: {},
      },
      {
        cvSkills: {},
      },
    ];

    return this.cvData;
  }
}
