import { Component, OnInit, OnDestroy } from "@angular/core";
import { Observable, Subscription } from "rxjs";
import { Router } from "@angular/router";
import { SidebarItem } from "./services/sidebar.interfaces";
import { SidebarService } from "./services/sidebar.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit, OnDestroy {
  resize = false;
  resizeSub: Subscription;

  sidebarItems: Observable<SidebarItem[]>= Object.create(null);

  constructor(private router: Router, private sidebarService: SidebarService) {
    // For Screen Sizes between Mobile and Desktop, resize Sidebar by default
    // App needs to check the size windows when inits.
    if (window.innerWidth <= 1350 && window.innerWidth > 768) {
      this.resize = true;
    } else {
      this.resize = false;
    }

    this.resizeSub = this.sidebarService.resizeSidebar$.subscribe(result => {
      this.resize = result;
    });
  }

  ngOnInit(): void {
    this.sidebarItems = this.sidebarService.getSidebarItems();
  }

  ngAfterViewInit(): void {
    this.sidebarService.onResize(this.resize);
  }

  ngOnDestroy(): void {
    this.resizeSub.unsubscribe();
  }

  onResizeSidebar() {
    this.sidebarService.onResize(!this.resize);
  }
}
