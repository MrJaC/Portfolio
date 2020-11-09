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
          },
        ],
        tech: {
          wordpress: [
            {
              show: true,
              name: "WordPress",
              logo: "logo-wordpress",
            },
          ],
          php: [
            {
              show: true,
              name: "PHP",
              logo: null,
            },
          ],
          java: [
            {
              show: false,
              name: "Java",
              logo: null,
            },
          ],
          javascript: [
            {
              show: true,
              name: "JavaScript",
              logo: "logo-javascript",
            },
          ],
          angular: [
            {
              show: false,
              name: "Angular",
              logo: "logo-Angular",
            },
          ],
          css: [
            {
              show: true,
              name: "CSS",
              logo: "logo-css3",
            },
          ],
          html: [
            {
              show: true,
              name: "HTML5",
              logo: "logo-html5",
            },
          ],
          ionic: [
            {
              show: true,
              name: "Ionic",
              logo: "logo-ionic",
            },
          ],
          laravel: [
            {
              show: true,
              name: "Laravel",
              logo: "logo-laravel",
            },
          ],
          bootstrap: [
            {
              show: true,
              name: "Bootstrap",
              logo: null,
            },
          ],
        },
        description: [
          {
            text_one:
              "InTouch Advertising required a quick CMS, as they wanted to updated themselves. Standard Theme via Themeforest installation and setup - with slight customization.",
            text_two: "",
          },
        ],
        blurb: "InTouch Advertising required a quick CMS...",
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
          },
        ],
        tech: {
          wordpress: [
            {
              show: true,
              name: "WordPress",
              logo: "logo-wordpress",
            },
          ],
          php: [
            {
              show: true,
              name: "PHP",
              logo: null,
            },
          ],
          java: [
            {
              show: false,
              name: "Java",
              logo: null,
            },
          ],
          javascript: [
            {
              show: true,
              name: "JavaScript",
              logo: "logo-javascript",
            },
          ],
          angular: [
            {
              show: false,
              name: "Angular",
              logo: "logo-Angular",
            },
          ],
          css: [
            {
              show: true,
              name: "CSS",
              logo: "logo-css3",
            },
          ],
          html: [
            {
              show: true,
              name: "HTML5",
              logo: "logo-html5",
            },
          ],
          ionic: [
            {
              show: true,
              name: "Ionic",
              logo: "logo-ionic",
            },
          ],
          laravel: [
            {
              show: true,
              name: "Laravel",
              logo: "logo-laravel",
            },
          ],
          bootstrap: [
            {
              show: true,
              name: "Bootstrap",
              logo: null,
            },
          ],
        },
        description: "This is a descrition",
        blurb: "This is a blurb",
        url: "https://google.co.za",
      },
      {
        id: 3,
        title: "Oil & Gas Connect",
        type: "Mobile Application",
        mainImage:
          "assets/projects/oilgasconnect/feature_one_white_connect.png",
        image: [
          {
            img: "",
          },
        ],
        tech: {
          wordpress: [
            {
              show: true,
              name: "WordPress",
              logo: "logo-wordpress",
            },
          ],
          php: [
            {
              show: true,
              name: "PHP",
              logo: null,
            },
          ],
          java: [
            {
              show: false,
              name: "Java",
              logo: null,
            },
          ],
          javascript: [
            {
              show: true,
              name: "JavaScript",
              logo: "logo-javascript",
            },
          ],
          angular: [
            {
              show: false,
              name: "Angular",
              logo: "logo-Angular",
            },
          ],
          css: [
            {
              show: true,
              name: "CSS",
              logo: "logo-css3",
            },
          ],
          html: [
            {
              show: true,
              name: "HTML5",
              logo: "logo-html5",
            },
          ],
          ionic: [
            {
              show: true,
              name: "Ionic",
              logo: "logo-ionic",
            },
          ],
          laravel: [
            {
              show: true,
              name: "Laravel",
              logo: "logo-laravel",
            },
          ],
          bootstrap: [
            {
              show: true,
              name: "Bootstrap",
              logo: null,
            },
          ],
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
            img: "",
          },
        ],
        tech: {
          wordpress: [
            {
              show: true,
              name: "WordPress",
              logo: "logo-wordpress",
            },
          ],
          php: [
            {
              show: true,
              name: "PHP",
              logo: null,
            },
          ],
          java: [
            {
              show: false,
              name: "Java",
              logo: null,
            },
          ],
          javascript: [
            {
              show: true,
              name: "JavaScript",
              logo: "logo-javascript",
            },
          ],
          angular: [
            {
              show: false,
              name: "Angular",
              logo: "logo-Angular",
            },
          ],
          css: [
            {
              show: true,
              name: "CSS",
              logo: "logo-css3",
            },
          ],
          html: [
            {
              show: true,
              name: "HTML5",
              logo: "logo-html5",
            },
          ],
          ionic: [
            {
              show: true,
              name: "Ionic",
              logo: "logo-ionic",
            },
          ],
          laravel: [
            {
              show: true,
              name: "Laravel",
              logo: "logo-laravel",
            },
          ],
          bootstrap: [
            {
              show: true,
              name: "Bootstrap",
              logo: null,
            },
          ],
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
            img: "",
          },
        ],
        tech: {
          wordpress: [
            {
              show: true,
              name: "WordPress",
              logo: "logo-wordpress",
            },
          ],
          php: [
            {
              show: true,
              name: "PHP",
              logo: null,
            },
          ],
          java: [
            {
              show: false,
              name: "Java",
              logo: null,
            },
          ],
          javascript: [
            {
              show: true,
              name: "JavaScript",
              logo: "logo-javascript",
            },
          ],
          angular: [
            {
              show: false,
              name: "Angular",
              logo: "logo-Angular",
            },
          ],
          css: [
            {
              show: true,
              name: "CSS",
              logo: "logo-css3",
            },
          ],
          html: [
            {
              show: true,
              name: "HTML5",
              logo: "logo-html5",
            },
          ],
          ionic: [
            {
              show: true,
              name: "Ionic",
              logo: "logo-ionic",
            },
          ],
          laravel: [
            {
              show: true,
              name: "Laravel",
              logo: "logo-laravel",
            },
          ],
          bootstrap: [
            {
              show: true,
              name: "Bootstrap",
              logo: null,
            },
          ],
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
            img: "",
          },
        ],
        tech: {
          wordpress: [
            {
              show: true,
              name: "WordPress",
              logo: "logo-wordpress",
            },
          ],
          php: [
            {
              show: true,
              name: "PHP",
              logo: null,
            },
          ],
          java: [
            {
              show: false,
              name: "Java",
              logo: null,
            },
          ],
          javascript: [
            {
              show: true,
              name: "JavaScript",
              logo: "logo-javascript",
            },
          ],
          angular: [
            {
              show: false,
              name: "Angular",
              logo: "logo-Angular",
            },
          ],
          css: [
            {
              show: true,
              name: "CSS",
              logo: "logo-css3",
            },
          ],
          html: [
            {
              show: true,
              name: "HTML5",
              logo: "logo-html5",
            },
          ],
          ionic: [
            {
              show: true,
              name: "Ionic",
              logo: "logo-ionic",
            },
          ],
          laravel: [
            {
              show: true,
              name: "Laravel",
              logo: "logo-laravel",
            },
          ],
          bootstrap: [
            {
              show: true,
              name: "Bootstrap",
              logo: null,
            },
          ],
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
            img: "",
          },
        ],
        tech: {
          wordpress: [
            {
              show: true,
              name: "WordPress",
              logo: "logo-wordpress",
            },
          ],
          php: [
            {
              show: true,
              name: "PHP",
              logo: null,
            },
          ],
          java: [
            {
              show: false,
              name: "Java",
              logo: null,
            },
          ],
          javascript: [
            {
              show: true,
              name: "JavaScript",
              logo: "logo-javascript",
            },
          ],
          angular: [
            {
              show: false,
              name: "Angular",
              logo: "logo-Angular",
            },
          ],
          css: [
            {
              show: true,
              name: "CSS",
              logo: "logo-css3",
            },
          ],
          html: [
            {
              show: true,
              name: "HTML5",
              logo: "logo-html5",
            },
          ],
          ionic: [
            {
              show: true,
              name: "Ionic",
              logo: "logo-ionic",
            },
          ],
          laravel: [
            {
              show: true,
              name: "Laravel",
              logo: "logo-laravel",
            },
          ],
          bootstrap: [
            {
              show: true,
              name: "Bootstrap",
              logo: null,
            },
          ],
        },
        description: "This is a descrition",
        blurb: "This is a blurb",
        url: "https://google.co.za",
      },
    ];

    return this.projectData;
  }
}
