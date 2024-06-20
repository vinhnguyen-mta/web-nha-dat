import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit{
  ngOnInit(): void {
    $("#slidey").slidey({
      interval: 8000,
      listCount: 5,
      autoplay: false,
      showList: true
    });
    $(".slidey-list-description").dotdotdot();
  }
}
