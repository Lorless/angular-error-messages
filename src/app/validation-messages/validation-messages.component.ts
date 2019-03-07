import {Component, OnInit, Input} from '@angular/core';


class CustomError {
  message?: string
}

@Component({
  selector: 'angular-validation-messages',
  templateUrl: './validation-messages.component.html',
  styleUrls: ['./validation-messages.component.scss']
})

export class ValidationMessagesComponent implements OnInit {

  @Input() name: string;
  @Input() errors: any;
  @Input() customErrors: CustomError | undefined;

  constructor() {
    this.name = '';
    this.errors = [];
    this.customErrors = {};
  }

  getErrors() {
    if (this.errors !== null && this.errors !== undefined) {
      return Object.keys(this.errors);
    } else {
      return [];
    }
  }

  getCustomErrors() {
    if (this.customErrors) {
      return Object.keys(this.customErrors);
    } else {
      return [];
    }
  }

  ngOnInit() {

  }

}
