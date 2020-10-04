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
        image: "assets/projects/intouch/website/intouch_website.png",
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
        image: "Image",
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
    ];

    return this.projectData;
  }
}
