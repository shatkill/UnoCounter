import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'uc-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {

  constructor(private appRouter: Router) { }

  ngOnInit(): void {
  }

  public goToHome() {
    this.appRouter.navigate([""]);
  }

}
