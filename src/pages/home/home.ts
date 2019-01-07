import { Component } from '@angular/core';
import { NavController, ModalController, ViewController } from 'ionic-angular';
import { Note } from '../../Models/note';
import { CreateNotePage } from '../create-note/create-note';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  notes: Note[] = [];

  constructor(public navCtrl: NavController, public modalCrtl: ModalController) {}

  createNote() {
    let modalNote = this.modalCrtl.create(CreateNotePage.name);
    
    modalNote.onDidDismiss((data) => {
      this.notes.push(data);
    });
    
    modalNote.present();
  }

}
