import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Receta } from '../models/receta.model';
import { doc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {
  private coleccionRecetas = 'recetas';

  constructor(private firestore: Firestore) {}

  // Obtener todas las recetas desde Firestore
  getRecetas(): Observable<Receta[]> {
    const recetasRef = collection(this.firestore, this.coleccionRecetas);
    return collectionData(recetasRef, { idField: 'idR' }) as Observable<Receta[]>;
  }

  getRecetaPorId(idR: string): Observable<Receta | undefined> {
      const recetasRef = doc(this.firestore, `${this.coleccionRecetas}/${idR}`);
      return docData(recetasRef) as Observable<Receta | undefined>;
    }
}
