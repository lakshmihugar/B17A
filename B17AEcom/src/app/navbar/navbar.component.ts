import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  loggedinUser: any;

  constructor() { }

  ngOnInit(): void {
  }
  loggedin(){
    return localStorage.getItem('userName');
    return this.loggedinUser;
}
onLogout(){
  localStorage.removeItem('token');
}
}