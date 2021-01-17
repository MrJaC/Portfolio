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
      email: [''],
      message: [''],
    });
  }

  ngOnInit() {}
}
