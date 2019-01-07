import { NgModule } from '@angular/core';
import { IonicPageModule} from 'ionic-angular';
import { CreateNotePage } from './create-note';

@NgModule({
  declarations: [
    CreateNotePage,
  ],
  imports: [
    IonicPageModule.forChild(CreateNotePage),
  ],
  exports: [
    CreateNotePage
  ]
})
export class CreateNotePageModule {}