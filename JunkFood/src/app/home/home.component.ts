import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor() {}
  ngOnInit(): void {}

  ngOnDestroy(): void {
    console.log(`Home destroy`);
  }
}
