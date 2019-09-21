import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-termsconditions',
  templateUrl: './termsconditions.component.html',
  styleUrls: ['./termsconditions.component.css']
})
export class TermsconditionsComponent implements OnInit {

  constructor(private location: Location) {}
  ngOnInit() {
  }
  goHome() {
    this.location.back();
  }
}
