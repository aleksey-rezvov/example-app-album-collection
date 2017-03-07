import {
  Component, OnInit, trigger, style, state, transition, animate, Input
} from '@angular/core';
import {Validators, FormGroup, FormArray, FormBuilder, FormControl} from '@angular/forms';
import {DsService} from "../shared/ds.service";
import {DataService} from "../shared/data.service";

@Component({
  selector: 'app-modal',
  animations: [
    trigger('modal', [
      state('void', style({
        'transform':'translateY(-100%)'
      })),
      transition('* => *', animate(500))
    ])
  ],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  defaults: any;
  modalForm: FormGroup;
  tracksControls: FormArray;
  @Input() showModalInfo;
  editing = this.showModalInfo && this.showModalInfo.payload && this.showModalInfo.payload.editing;

  constructor(
    public fb: FormBuilder,
    public dsService: DsService,
    public dataService: DataService
  ) {

  }

  ngOnInit() {

    this.modalForm = this.fb.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      category: ['', [Validators.required]],
      year: ['', [Validators.required]],
      artist: ['', [Validators.required]],
      tracks: this.fb.array([
        this.initTracks(),
      ])
    });

    this.tracksControls = <FormArray>this.modalForm.controls['tracks']


    this.dsService.event.subscribe('edit-album', id => {
      this.defaults = this.dataService.getAlbumTracks(id)
      let tracks = this.defaults.tracks;
      if(tracks){
        console.log(tracks);
        tracks.forEach(() => {
          this.tracksControls.controls.push(this.initTracks());
        });
        this.tracksControls.patchValue(tracks);
      }
    });


    this.dsService.dsInstance.event.subscribe('update-album', album => {
      this.dataService.updateAlbum(album);
    });
    this.dsService.dsInstance.event.subscribe('new-album', album => {
      this.dataService.addAlbum(album);
    });
    this.dsService.dsInstance.event.subscribe('update-tracks', tracks => {
      this.dataService.updateTrack(tracks);
    });
    this.dsService.dsInstance.event.subscribe('new-tracks', tracks => {
      this.dataService.addTrack(tracks);
    });
    this.dsService.dsInstance.event.subscribe('delete-album', id => {
      this.dataService.deleteAlbumTracks(id);
    });
  }

  initTracks() {
    return this.fb.group({
      title: ['', Validators.required],
      number: ['', Validators.required],
      duration: ['', Validators.required],
      albumId: ['']
    });
  }

  addTrack() {
    const control = <FormArray>this.modalForm.controls['tracks'];
    control.push(this.initTracks());
  }

  removeTrack(i: number) {
    const control = <FormArray>this.modalForm.controls['tracks'];
    control.removeAt(i);
  }

  save(values) {
    this.saveAlbum(values).saveTracks(values).hideModal();
  }

  saveAlbum(values) {
    const clonedValues = Object.assign({}, values);
    delete clonedValues.tracks;
    if(this.editing){
      this.dsService.dsInstance.event.emit('update-album', clonedValues)
    } else {
      this.dsService.dsInstance.event.emit('new-album', clonedValues)
    }
    return this;
  }

  saveTracks(values) {
    if(this.editing){
      this.dsService.dsInstance.event.emit('update-tracks', values.tracks)
    } else {
      this.dsService.dsInstance.event.emit('new-tracks', values.tracks)
    }
    return this;
  }

  hideModal() {
    this.showModalInfo.showModal= false;
    for(let i=0; i <= this.tracksControls.length; i++) {
      this.tracksControls.removeAt(i);
    }
    this.modalForm.reset();
  }

}
