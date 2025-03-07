import { CommonModule } from '@angular/common';
import { Component,ElementRef, ViewChild, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-catalogo',
  imports: [CommonModule, RouterModule],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent implements OnInit {
  productos: Producto[] = [];

  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;

  constructor(private productoService: ProductoService) {}

  ngOnInit() {
    this.productoService.getProductos().subscribe((data) => {
      console.log("Datos recibidos:", data); // 🔍 Verifica si llegan los datos
      this.productos = data;
    });
  }

  // Función para mover a la izquierda
  scrollLeft() {
    this.scrollContainer.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  // Función para mover a la derecha
  scrollRight() {
    this.scrollContainer.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }
}

