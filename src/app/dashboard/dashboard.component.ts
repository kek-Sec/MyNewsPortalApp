import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  Posts = 0;

  constructor() { }

  ngOnInit(): void {
  }

  addPost()
  {
    this.Posts++;
  }
}
