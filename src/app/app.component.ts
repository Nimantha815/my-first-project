import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  appTitle = 'Welcome to App';
  myString = "I Love Me";
  myBoolean = false;

  alertMe(val: any){
    alert(val);
  }
  constructor(){
    
  }
  ngOnInit() {
    
  }
}
