import { Component, OnInit } from '@angular/core';
import {DataService} from "../../shared/data.service";
import {DsService} from "../../shared/ds.service";

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  albums;

  constructor(
    public dsService: DsService,
    public dataService: DataService,
  ) { }

  ngOnInit() {
    this.albums = this.dataService.getAlbums();
  }

  updateTrackList(id) {
    this.dsService.dsInstance.event.emit('update-tracklist', id);
  }

}
