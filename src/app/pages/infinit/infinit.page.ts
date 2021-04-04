import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinit',
  templateUrl: './infinit.page.html',
  styleUrls: ['./infinit.page.scss'],
})
export class InfinitPage implements OnInit {

  data: any = Array(20);

  // Esto permite tener todo lo del infinite scroll del html en este *.ts
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor() { }

  ngOnInit() {
  }

  loadData(event) {
    // console.log(event)
    // esta en un setTimeout para poder ver el spinner, no es necesario
    setTimeout(() => {
      if (this.data.length > 50) {
        this.infiniteScroll.complete();
        this.infiniteScroll.disabled = true;
      }

      const nuevaData = Array(20);
      this.data.push(...nuevaData);

      this.infiniteScroll.complete();
    }, 1500);

  }

}
