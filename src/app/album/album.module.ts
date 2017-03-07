import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AlbumListComponent} from "./album-list/album-list.component";
import {AlbumItemComponent} from "./album-item/album-item.component";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AlbumListComponent,
    AlbumItemComponent
  ],
  exports: [
    AlbumListComponent,
    AlbumItemComponent
  ]
})
export class AlbumModule { }
