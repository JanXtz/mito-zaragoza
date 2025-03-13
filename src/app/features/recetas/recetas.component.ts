import { RouterModule } from '@angular/router';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Receta } from '../../models/receta.model';
import { RecetaService } from '../../services/receta.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recetas',
  imports: [CommonModule, RouterModule],
  templateUrl: './recetas.component.html',
  styleUrl: './recetas.component.css'
})
export class RecetasComponent implements OnInit {
  recetas: Receta[] = [];
  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;
  constructor(private recetaService: RecetaService) {}

  ngOnInit() {
    this.recetaService.getRecetas().subscribe((data) => {
      console.log('Recetas:', data);
      this.recetas = data;
    });
  }

  scrollLeft() {
    this.scrollContainer.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  // Función para mover a la derecha
  scrollRight() {
    this.scrollContainer.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }
}