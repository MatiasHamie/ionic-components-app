import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNacimiento: Date = new Date();
  customPickerOptions = {
    buttons: [
      {
        text: 'Hola',
        handler: (event) => console.log(event)
      },
      {
        text: 'Mundo',
        handler: () => console.log('log')
      },
    ]
  }

  constructor() { }

  ngOnInit() {
  }

  cambioFecha(e) {
    console.log(e)
    console.log(new Date(e.detail.value))
  }

}
