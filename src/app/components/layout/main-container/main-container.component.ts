import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader } from '../animations/route-animations';

@Component({
  selector: 'app-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.css'],
  animations: [
    fader
  ]
})
export class MainContainerComponent implements OnInit {

  showSidebar = false;

  constructor() { }

  ngOnInit() {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet.isActivated && outlet.activatedRoute.routeConfig!.path;
  }
}
