import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-can-job-list',
  templateUrl: './can-job-list.component.html',
  styleUrls: ['./can-job-list.component.css']
})
export class CanJobListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  canJobSingle(data) {
    this.router.navigate(['candidate/home/candidate-single']);
  }
}
