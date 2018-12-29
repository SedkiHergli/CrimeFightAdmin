import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
  
  tab2Selected() {
    console.log('My tab was selected!');
  }

  logout() {
    this.authService.logout();
  }

}
