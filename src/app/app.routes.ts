import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { CatalogoComponent } from './features/catalogo/catalogo.component';
import { ProductoComponent } from './features/producto/producto.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent }, // Página principal
    { path: 'catalogo', component: CatalogoComponent }, // Nueva ruta para el catálogo
    { path: 'producto/:idB', component: ProductoComponent }, // Página de cada producto
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
