import { Component, OnInit } from "@angular/core";
import { Data } from "../../interfaces/data.interface";
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events
        .pipe(filter((event) => event instanceof NavigationStart))
        .subscribe(() => {
          setTimeout(() => {
            location.reload();
            console.log('eun');
          }, 1000); // Add a delay of 1 second (1000 milliseconds) before reloading the page
        });
  }

  quickviewed?: Data;

  quickview(item: Data) {
    this.quickviewed = item;
  }
}
