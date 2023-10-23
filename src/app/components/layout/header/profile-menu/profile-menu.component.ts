import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../../../services/auth.service";

@Component({
  selector: "app-profile-menu",
  templateUrl: "./profile-menu.component.html",
  styleUrls: ["./profile-menu.component.css"]
})
export class ProfileMenuComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  logout() {
    this.authService.logout();
  }
}
