import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-can-resume-add-new',
  templateUrl: './can-resume-add-new.component.html',
  styleUrls: ['./can-resume-add-new.component.css']
})
export class CanResumeAddNewComponent implements OnInit {
  username = JSON.parse(localStorage.getItem('userData')).name;
  constructor() { }

  ngOnInit() {
  }

}
