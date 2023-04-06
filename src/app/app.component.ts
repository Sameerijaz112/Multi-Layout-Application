import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userType: string = 'user'; // default selection


  constructor(private router: Router) { }



  
  signIn() {
    if (this.userType === 'user') {
      this.router.navigate(['/user']);
    } else if (this.userType === 'admin') {
      this.router.navigate(['/user-dashboard']);
    }
  }
}


