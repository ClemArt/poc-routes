import {Component} from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";

  side = true;
  main = true;
  header = true;

  sideDeactivate() {
    this.side = false;
    console.log("treeDeactivate");
  }

  headerDeactivate() {
    this.header = false;
    console.log("headerDeactivate");
  }

  mainDeactivate() {
    this.main = false;
    console.log("mainDeactivate");
  }

  reset() {
    this.main = true;
    this.header = true;
    this.side = true;
  }
}
