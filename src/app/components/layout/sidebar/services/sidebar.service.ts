import { Injectable } from "@angular/core";
import { SidebarItem } from "./sidebar.interfaces";
import { SidebarConstants } from "./sidebar.constants";
import { Observable, Subject, of } from "rxjs";

@Injectable()
export class SidebarService {

  private expand = new Subject<number>();
  expand$ = this.expand.asObservable();

  private resizeSidebar = new Subject<boolean>();
  resizeSidebar$ = this.resizeSidebar.asObservable();

  accordionId: number= Object.create(null);

  onExpand(accordionId: number) {
    this.expand.next(accordionId);
  }

  onResize(re: boolean) {
    this.resizeSidebar.next(re);
  }

  setAccordion(accordionId: number) {
    this.accordionId = accordionId;
  }

  // Get Items - Fake API
  getSidebarItems(): Observable<SidebarItem[]> {
    return of([
      {
        text: "Dashboard",
        link: "/app/dashboard",
        icon: "dashboard"
      },
      {
        text: "Reports",
        link: "/app/company-setup",
        icon: "supervisor_account"
      },
      {
        text: "Admin",
        icon: "settings_applications",
        subItems: [
          {
            text: "Users",
            link: " ",
            icon: "person"
          },
          {
            text: "Roles",
            link: " ",
            icon: "wc"
          }
        ]
      },
      {
        text: "Help",
        link: "/app/help",
        icon: "help"
      },
      
    ]);
  }
}
