import { Component, OnInit } from '@angular/core';
import {DataService} from "../../shared/data.service";
import {Track} from "../../shared/data";
import {DsService} from "../../shared/ds.service";

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.css']
})
export class TrackListComponent implements OnInit {

  tracks: Track[];

  constructor(
    public dataService: DataService,
    public dsService: DsService
  ) { }

  ngOnInit() {
    this.tracks = this.dataService.getTracks();
    this.dsService.dsInstance.event.subscribe('update-tracklist', id => {
      this.tracks = this.dataService.getTracksByAlbumId(id);
    })
  }

}
