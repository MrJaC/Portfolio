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
        date: "2019-07-01",
        mainImage: "assets/projects/intouch/website/intouch_website.png",
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
        date: "2019-06-01",
        mainImage: "/assets/projects/intouch/application/landing_img_v1.png",
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
        id: 2,
        title: "Intouch Advertising - Admin Panel",
        type: "Admin Panel",
        date: "2019-06-01",
        mainImage: "/assets/projects/codeigniter/intouch/intouch_admin_panel.png",
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
        date: "2020-03-01",
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
        date: "2020-03-01",
        mainImage: "assets/projects/laravel/oilgasconnect_panel/admin_panel_oilgas.png",
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
        title: "AWCI Property",
        type: "Wordpress",
        date: "2018-05-01",
        mainImage: "assets/projects/wp/awci_property/awci_property_home_page.png",
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
        title: "AWCI Institute",
        type: "Wordpress",
        date: "2018-10-01",
        mainImage: "assets/projects/wp/awci_institute/awci_institute_home.png",
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
        id: 8,
        title: "SADL Decryptor",
        type: "Java",
        date: "2020-8-01",
        mainImage: "assets/projects/sadl/sadl.jpg",
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
        id: 9,
        title: "Zwane Trucking - Mobile Application",
        type: "Angular",
        date: "2019-09-01",
        mainImage: "assets/projects/zwane/zwane-mobile/zwane.jpg",
        images: [
          {
            img: "assets/images/default.jpg",
          },
        ],
        tech: {
          wordpress: [
            {
              show: false,
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
              show: true,
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
              show: false,
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
        id: 10,
        title: "Zwane Trucking - Admin Panel",
        type: "PHP",
        date: "2019-09-01",
        mainImage: "assets/projects/zwane/zwane-mobile/zwane.jpg",
        images: [
          {
            img: "assets/images/default.jpg",
          },
        ],
        tech: {
          wordpress: [
            {
              show: false,
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
              show: true,
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
              show: false,
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
        id: 11,
        title: "Consulting - Website",
        type: "WordPress",
        date: "2020-06-01",
        mainImage: "assets/projects/consulting/consulting_landing.jpg",
        images: [
          {
            img: "assets/images/default.jpg",
          },
        ],
        tech: {
          wordpress: [
            {
              show: false,
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
              show: true,
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
              show: false,
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
        id: 12,
        title: "Netrisk - Website",
        type: "WordPress",
        date: "2019-08-01",
        mainImage: "assets/projects/netrisk/netris-landing.jpg",
        images: [
          {
            img: "assets/images/default.jpg",
          },
        ],
        tech: {
          wordpress: [
            {
              show: false,
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
              show: true,
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
              show: false,
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
    ];

    return this.projectData;
  }
}
