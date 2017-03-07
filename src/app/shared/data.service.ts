import { Injectable } from '@angular/core';
import { Album, Track } from './data';
import {DsService} from "./ds.service";

@Injectable()
export class DataService {

  constructor(
    public dsService: DsService
  ) { }

  private albums: Album[] = [
    {
      id: 1,
      title: 'The Chief',
      category: 'Hip/Hop',
      year: '2017',
      artist: 'Jidenna'
    },
    {
      id: 2,
      title: 'The Playmaker',
      category: 'Afro Hip/Hop',
      year: '2016',
      artist: 'Phyno'
    }
  ];
  private tracks: Track[] = [
    {
      title: 'Bambi',
      number: 4,
      duration: '4:10',
      albumId: 1
    },
    {
      title: 'Little Bit More',
      number: 11,
      duration: '3:26',
      albumId: 1
    },
    {
      title: 'The Let Out',
      number: 8,
      duration: '3:43',
      albumId: 1
    },
    {
      title: 'Mistakes',
      number: 14,
      duration: '4:15',
      albumId: 2
    },
    {
      title: 'So Far So Good (SFSG)',
      number: 12,
      duration: '4:03',
      albumId: 2
    }
  ];

  public getTracks() {
    return this.tracks.sort((a, b) => {
      if(a.number < b.number) return -1;
      if(a.number > b.number) return 1;
      return 0;
    });
  }

  public getAlbums() {
    return this.albums.sort((a, b) => {
      if(a.title < b.title) return -1;
      if(a.title > b.title) return 1;
      return 0;
    });
  }

  public addAlbum(album) {
    this.albums.push(album);
  }

  public updateAlbum(album) {
    const index = this.albums.findIndex(a => a.id === album.id)
    this.albums[index] = album
  }

  getTracksByAlbumId(id) {
    return this.tracks.filter(track => track.albumId == id);
  }

  public addTrack(tracks) {
    tracks.forEach(v => {
      this.tracks.push(v);
    })
  }
  public updateTrack(tracks) {
    tracks.forEach((v, i) => {
      const index = tracks.findIndex(t => t.number === v.number);
      debugger
      this.tracks[index] = v;
      debugger
    });
  }
  public deleteAlbumTracks(id) {
    const albumIndex = this.albums.findIndex(a => a.id === id);
    this.albums.splice(albumIndex, 1)
    this.tracks.forEach((v, i) => {
      if(v.albumId == id) {
        this.tracks.splice(i, 1);
      }
    });
    if(this.albums[albumIndex-1]) {
      this.dsService.dsInstance.event.emit('update-tracklist', this.albums[albumIndex - 1].id)
    } else {
      this.dsService.dsInstance.event.emit('update-tracklist', this.albums[albumIndex].id)
    }
  }
  public getAlbumTracks(albumId) {
    const album = this.albums.filter(album => album.id == albumId)[0];

    const tracks = this.tracks.filter(track => track.albumId == albumId);

    const albumTracks = Object.assign({}, album, {tracks});
    console.debug('new state', albumTracks);

    return albumTracks
  }
}
