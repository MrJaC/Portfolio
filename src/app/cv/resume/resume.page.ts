import { Component, OnInit } from '@angular/core';
import { CvDataService } from 'src/app/service/cv-data.service';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.page.html',
  styleUrls: ['./resume.page.scss'],
})
export class ResumePage implements OnInit {

  data: any;


  constructor(
    public cvData: CvDataService
  ) { }

  ngOnInit() {
  this.displayCVData();
  }

  displayCVData(){

    this.data = this.cvData.getCVData();
    console.log(this.data);
    return this.data;
  }

}
