import { Component, OnInit } from '@angular/core';

export class FormData {
  public employeeid: string
}

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit {

  formData = new FormData();

  constructor() { }

  ngOnInit() {
  }

  formSubmit(formData) {
    console.log(formData.value);
  }
}
