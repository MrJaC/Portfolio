import { Component, OnInit } from '@angular/core';


import { CvDataService } from 'src/app/service/cv-data.service';
@Component({
  selector: 'app-resume',
  templateUrl: './resume.page.html',
  styleUrls: ['./resume.page.scss'],
})
export class ResumePage implements OnInit {

  data: any;
  cvExp: any;
  cvSkill: any;
  cvEdu: any;

  constructor(
    public cvData: CvDataService
  ) { }

  ngOnInit() {
  this.displayCVData();
  }

  displayCVData(){

    this.data = this.cvData.getCVData();

    let a = this.cvData.getCVData();

    this.cvExp = a[0]['cvExperience'];
    this.cvEdu = a[1]['cvEducation'];
    this.cvSkill = a[2]['cvSkills']['list'];

    console.log(this.cvExp);
    console.log(this.cvEdu);
    console.log(this.cvSkill);
    return this.data;
  }

}
