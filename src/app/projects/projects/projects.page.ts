import { Component, OnInit } from '@angular/core';
import { ProjectDataService } from 'src/app/service/project-data.service';

 

@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit {
  

  data: any;

  constructor(
    public projData: ProjectDataService

  ) { }

  ngOnInit() {
    this.getProjects();
   
  }

  getProjects(){

  
    this.data = this.projData.getProjectdata();
    console.log(this.data);
    return this.data;
  }

}
