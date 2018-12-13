import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { VinoInterface } from '../models/vino';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private afs: AngularFirestore) { }

  private vinosCollection: AngularFirestoreCollection<VinoInterface>;
  private vinos: Observable<VinoInterface[]>;
  private vinoDoc: AngularFirestoreDocument<VinoInterface>;
  private vino: Observable<VinoInterface>;
  public selectedVino: VinoInterface = {
    id: null
  };

  getAllVinos() {
    this.vinosCollection = this.afs.collection<VinoInterface>('vinos');
    return this.vinos = this.vinosCollection.snapshotChanges()
      .pipe(map(changes => {
        return changes.map(action => {
          const data = action.payload.doc.data() as VinoInterface;
          data.id = action.payload.doc.id;
          return data;
        });
      }));
  }

  getOneVino(idVino: string) {
    this.vinoDoc = this.afs.doc<VinoInterface>(`vinos/${idVino}`);
    return this.vino = this.vinoDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as VinoInterface;
        data.id = action.payload.id;
        return data;
      }
    }));
  }


  addVino(vino: VinoInterface): void {
    this.vinosCollection.add(vino);
  }
  updateVino(vino: VinoInterface): void {
    let idVino = vino.id;
    this.vinoDoc = this.afs.doc<VinoInterface>(`vinos/${idVino}`);
    this.vinoDoc.update(vino);
  }
  deleteVino(idVino: string): void {
    this.vinoDoc = this.afs.doc<VinoInterface>(`vinos/${idVino}`);
    this.vinoDoc.delete();
}
}
