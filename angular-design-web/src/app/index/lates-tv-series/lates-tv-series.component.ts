import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-lates-tv-series',
  templateUrl: './lates-tv-series.component.html',
  styleUrls: ['./lates-tv-series.component.scss']
})
export class LatesTvSeriesComponent implements OnInit{
  ngOnInit(): void {
    $(document).ready(function() {
      $(window).load(function(){
        $('.flexslider').flexslider({
        animation: "slide",
        start: function(slider: any){
          $('body').removeClass('loading');
        }
        });
      });
      $('.w3_play_icon,.w3_play_icon1,.w3_play_icon2').magnificPopup({
        type: 'inline',
        fixedContentPos: false,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
      });

      });
  }
}
