import {Component, OnInit, Input} from '@angular/core';
import {Track} from "../../shared/data";

@Component({
  selector: 'app-track-item',
  templateUrl: './track-item.component.html',
  styleUrls: ['./track-item.component.css']
})
export class TrackItemComponent implements OnInit {

  @Input() track: Track;

  constructor() { }

  ngOnInit() {
  }

}
