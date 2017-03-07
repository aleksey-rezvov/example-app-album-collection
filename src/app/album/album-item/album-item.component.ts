import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Album} from "../../shared/data";

@Component({
  selector: 'app-album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['./album-item.component.css']
})
export class AlbumItemComponent implements OnInit {

  @Input() album: Album;
  @Output() albumClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
