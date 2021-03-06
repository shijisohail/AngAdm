import { Component, OnInit } from '@angular/core';

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: '/dashboard',
    title: 'HOME',
    rtlTitle: 'لوحة القيادة',
    icon: 'icon-chart-pie-36',
    class: ''
  },
  {
    path: '/notifications',
    title: 'CTF CHALLENGES',
    rtlTitle: 'إخطارات',
    icon: 'icon-bell-55',
    class: ''
  },

  {
    path: '/tables',
    title: 'WEB CHALLENGES',
    rtlTitle: 'قائمة الجدول',
    icon: 'icon-puzzle-10',
    class: ''
  },
  // {
  //   path: '/training',
  //   title: 'BLOGS',
  //   rtlTitle: 'قائمة الجدول',
  //   icon: 'icon-puzzle-10',
  //   class: ''
  // },
  {
    path: '/maps',
    title: 'BLOGS APPROVAL',
    rtlTitle: 'خرائط',
    icon: 'icon-pin',
    class: '' },


  {
    path: '/user',
    title: 'PRIVILLAGE MANAGMENT',
    rtlTitle: 'ملف تعريفي للمستخدم',
    icon: 'icon-single-02',
    class: ''
  },
  {
    path: '/typography',
    title: 'LAB SCENARIOS CREATION ',
    rtlTitle: 'طباعة',
    icon: 'icon-align-center',
    class: ''
  },
  {
    path: '/icons',
    title: 'SYSTEM DETAILS',
    rtlTitle: 'الرموز',
    icon: 'icon-atom',
    class: ''
  },
 // {
 //    path: '/rtl',
 //    title: 'TRAINING',
 //    rtlTitle: 'ار تي ال',
 //    icon: 'icon-world',
 //    class: ''
 //  }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
