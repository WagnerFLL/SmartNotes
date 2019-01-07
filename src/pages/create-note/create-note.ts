import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController  } from 'ionic-angular';
import { Note } from '../../Models/note';

@IonicPage()
@Component({
  selector: 'page-create-note',
  templateUrl: 'create-note.html',
})
export class CreateNotePage {

  note: Note;
  title: string;
  text: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateNotePage');
  }

  create() {
    this.note = {
      title: this.title, 
      text: this.text
    };
    this.viewCtrl.dismiss(this.note);
  }



}
