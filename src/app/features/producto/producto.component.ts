import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductoService } from '../../services/producto.service';
import { Producto } from '../../models/producto.model';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.css'
})
export class ProductoComponent implements OnInit {
  producto: Producto | null = null;

  constructor(
    private route: ActivatedRoute,
    private productoService: ProductoService
  ) {}

  ngOnInit() {
    const idB = this.route.snapshot.paramMap.get('idB'); // Obtener ID desde la URL

    if (idB) {
      this.productoService.getProductoPorId(idB).subscribe((data) => {
        if (data) {
          this.producto = data;
        }
      });
    }
  }
}
