import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {logger} from 'codelyzer/util/logger';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  constructor() { }
  @Output() scrollEvent: EventEmitter<boolean> = new EventEmitter();
  videoSource = '../../../assets/videos/banner.mp4';
  name = 'Hasham Rasheed';
  jobTitle = 'Full Stack Engineer';
  ngOnInit(): void {
  }

  callToScroll() {
    this.scrollEvent.emit(true);
  }
}
