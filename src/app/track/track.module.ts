import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrackListComponent } from './track-list/track-list.component';
import { TrackItemComponent } from './track-item/track-item.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TrackListComponent,
    TrackItemComponent
  ],
  exports: [
    TrackListComponent,
    TrackItemComponent
  ]
})
export class TrackModule { }
