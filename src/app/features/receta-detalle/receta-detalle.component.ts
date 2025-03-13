import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RecetaService } from '../../services/receta.service';
import { Receta } from '../../models/receta.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-receta-detalle',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './receta-detalle.component.html',
  styleUrl: './receta-detalle.component.css'
})
export class RecetaDetalleComponent implements OnInit {
  receta!: Receta;

  constructor(
    private route: ActivatedRoute,
    private recetaService: RecetaService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.recetaService.getRecetas().subscribe((recetas) => {
      this.receta = recetas.find((r) => r.idR === id)!;
    });
  }
}
