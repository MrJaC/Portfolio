import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators , FormControl} from "@angular/forms";
@Component({
  selector: "app-contact",
  templateUrl: "./contact.page.html",
  styleUrls: ["./contact.page.scss"],
})
export class ContactPage implements OnInit {
  
  public submitAttempt: boolean = false;
  public messageForm: FormGroup;
  
  constructor(public formBuilder: FormBuilder) {

    this.messageForm = formBuilder.group({
      name: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      email: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])],
      message: ['', Validators.required, Validators.pattern('[a-zA-Z ]*')],
    });
  }

  ngOnInit() {}
  get errorControl() {
    return this.messageForm.controls;
  }
  sendMessage(){
    this.submitAttempt = true;
    if (!this.messageForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.messageForm.value)
    }
  }

}
