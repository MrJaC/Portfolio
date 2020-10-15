import { Component, OnInit, ViewChild } from '@angular/core';
import { ProjectDataService } from 'src/app/service/project-data.service';
import { ModalController } from '@ionic/angular';
import { ViewProjectPage } from './../view-project/view-project.page'
import { IonInfiniteScroll } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})
export class ProjectsPage implements OnInit {
  
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  data: any;

  constructor(
    public projData: ProjectDataService,
    public modalController: ModalController,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getProjects();
   
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.data.length == 3) {
        event.target.disabled = true;
      }
    }, 500);
  }



  presentProject(id, title) {
    var data = {
      id: id,
      title: title
    }
    let navigationExtras: NavigationExtras = {
      queryParams:{
        special: JSON.stringify(data)
      }
    };
    this.router.navigate(['view-project'], navigationExtras);
  }
  getProjects(){

  
    this.data = this.projData.getProjectdata();
    console.log(this.data);
    return this.data;
  }

}
