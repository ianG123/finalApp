import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  
  @ViewChild('tabs', {static: true}) tabs : IonTabs

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {console.log(this.tabs.select('feed'))}, 1500)
  }

}
