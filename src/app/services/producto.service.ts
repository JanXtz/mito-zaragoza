import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, docData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto.model';
import { doc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private coleccionProductos = 'productos'; // Nombre de la colección en Firestore

  constructor(private firestore: Firestore) {} // ✅ Usa Storage correctamente

  // Obtener todos los productos desde Firestore
  getProductos(): Observable<Producto[]> {
    const productosRef = collection(this.firestore, this.coleccionProductos);
    return collectionData(productosRef, { idField: 'idB' }) as Observable<Producto[]>;
  }

  getProductoPorId(idB: string): Observable<Producto | undefined> {
    const productoRef = doc(this.firestore, `${this.coleccionProductos}/${idB}`);
    return docData(productoRef) as Observable<Producto | undefined>;
  }


}
