import { UserService } from './Service/app.service';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  url = 'http://localhost:3000/players/list';
  title = 'frontend';
  constructor(private http: HttpClient, private userService: UserService){
        
  }
}
