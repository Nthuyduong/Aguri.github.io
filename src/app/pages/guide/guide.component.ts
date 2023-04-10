import {Component} from "@angular/core";
import {Data} from "../../interfaces/data.interface";

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})

export class GuideComponent {
  ngOnInit() {
    window.addEventListener('scroll', () => {
      this.windowScrolled = window.pageYOffset !== 0;
    });
  }
  windowScrolled = false;
  scrollToTop(): void {
    window.scrollTo(0, 0);
  }
}
