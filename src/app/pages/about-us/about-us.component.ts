import {Component} from "@angular/core";

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})

export class AboutUsComponent {
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
