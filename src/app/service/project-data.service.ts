import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ProjectDataService {
  projectData = [];

  constructor() {}

  getProjectdata() {
    this.projectData = [
      {
        id: 1,
        title: "Intouch Advertising",
        type: "Website",
        mainImage: "assets/images/default.jpg",
        images: [
          {
            img: "assets/images/default.jpg",
          }
        ],
        tech: {
          one: "WordPress",
          two: "PHP", 
          three: "CSS",
          four: "HTML5",
          five: "Theme",
          six: "CMS"
        },
        description: "InTouch Advertising required a quick CMS, as they wanted to updated themselves. Standard Theme via Themeforest installation and setup - with slight customization.",
        blurb: "InTouch Advertising required a quick CMS",
        url: "https://intouchadvertising.co.za",
      },
      {
        id: 2,
        title: "Intouch Advertising",
        type: "Mobile Application",
        mainImage: "assets/images/default.jpg",
        images: [
          {
            img: "",
          }
        ],
        tech: {
          one: "JavaScript",
          two: "PHP",
          three: "CSS",
          four: "HTML5",
        },
        description: "This is a descrition",
        blurb: "This is a blurb",
        url: "https://google.co.za",
      },
      {
        id: 3,
        title: "Oil & Gas Connect",
        type: "Mobile Application",
        mainImage: "assets/projects/oilgasconnect/feature_one_white_connect.png",
        image: [
          {
            img: ""
          }
        ],
        tech: {
          one: "JavaScript",
          two: "PHP",
          three: "CSS",
          four: "HTML5",
        },
        description: "This is a descrition",
        blurb: "This is a blurb",
        url: "https://google.co.za",
      },
      {
        id: 4,
        title: "Oil & Gas Connect",
        type: "Backend - Laravel",
        mainImage: "assets/images/default.jpg",
        image: [
          {
            img: ""
          }
        ],
        tech: {
          one: "JavaScript",
          two: "PHP",
          three: "CSS",
          four: "HTML5",
          five: "Laravel"
        },
        description: "This is a descrition",
        blurb: "This is a blurb",
        url: "https://google.co.za",
      },
      {
        id: 5,
        title: "Oil & Gas Connect",
        type: "Backend - Laravel",
        mainImage: "assets/images/default.jpg",
        image: [
          {
            img: ""
          }
        ],
        tech: {
          one: "JavaScript",
          two: "PHP",
          three: "CSS",
          four: "HTML5",
          five: "Laravel"
        },
        description: "This is a descrition",
        blurb: "This is a blurb",
        url: "https://google.co.za",
      },
      {
        id: 6,
        title: "Oil & Gas Connect",
        type: "Backend - Laravel",
        mainImage: "assets/images/default.jpg",
        image: [
          {
            img: ""
          }
        ],
        tech: {
          one: "JavaScript",
          two: "PHP",
          three: "CSS",
          four: "HTML5",
          five: "Laravel"
        },
        description: "This is a descrition",
        blurb: "This is a blurb",
        url: "https://google.co.za",
      },
      {
        id: 7,
        title: "Oil & Gas Connect",
        type: "Backend - Laravel",
        mainImage: "assets/images/default.jpg",
        image: [
          {
            img: ""
          }
        ],
        tech: {
          one: "JavaScript",
          two: "PHP",
          three: "CSS",
          four: "HTML5",
          five: "Laravel"
        },
        description: "This is a descrition",
        blurb: "This is a blurb",
        url: "https://google.co.za",
      },
    ];

    return this.projectData;
  }
}
