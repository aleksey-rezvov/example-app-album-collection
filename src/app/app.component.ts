import {Component, OnInit} from '@angular/core';
import {DataService} from "./shared/data.service";
import {DsService} from "./shared/ds.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  albumTracks;
  showModalInfo = {
    showModal: false,
    payload: {}
  };
  constructor(
    public dataService: DataService,
    public dsService: DsService
  ){}

  ngOnInit() {
    this.dsService.dsInstance.event.subscribe('update-tracklist', id => {
      this.albumTracks = this.dataService.getTracksByAlbumId(id);
    })
  }

  showModal(payload?) {
      // debugger
      this.showModalInfo = {showModal: true, payload};
  }

  add() {
      this.showModal();
  }

  edit(id) {
    this.showModal({editing:true});
    this.dsService.event.emit('edit-album', id)
  }

  deleteAlbum(id) {
    this.dsService.event.emit('delete-album', id)
  }
}
