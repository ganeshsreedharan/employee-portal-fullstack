import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SideBarService } from './side-bar.service';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
  animations: [
    trigger('slide', [
      state('up', style({ height: 0 })),
      state('down', style({ height: '*' })),
      transition('up <=> down', animate(200))
    ])
  ]
})
export class SideBarComponent implements OnInit {
  menus = [];
  constructor(private sideBarService: SideBarService) {
  }
  ngOnInit() {
    this.menus = this.sideBarService.getMenuList();
  }


}
