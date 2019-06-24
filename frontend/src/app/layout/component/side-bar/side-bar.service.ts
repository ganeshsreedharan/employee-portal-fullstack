import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideBarService {

  menus = [];
  constructor() {
    this.menus = [

      {
        title: 'Users List',
        icon: 'fa fa-users',
        url: '/user-list',
        active: false,
      },
      {
        title: 'Add Users',
        icon: 'fa fa-user-plus',
        url: '/user-add',
        active: false,
      },
    ];
  }
  getMenuList() {
    return this.menus;
  }
}
