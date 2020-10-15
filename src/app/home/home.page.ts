import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectDataService } from 'src/app/service/project-data.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public home: string;
  data: any;
  constructor(private activatedRoute: ActivatedRoute, public projData: ProjectDataService) {
    this.getProjects();
   }

  ngOnInit() {
    this.home = this.activatedRoute.snapshot.paramMap.get('id');
    
  }
  getProjects(){

  
    this.data = this.projData.getProjectdata();
    console.log(this.data);
    return this.data;
  }
}
