import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { CatalogoComponent } from './features/catalogo/catalogo.component';
import { ProductoComponent } from './features/producto/producto.component';
import { HistoriaComponent } from './features/historia/historia.component';
import { RecetasComponent } from './features/recetas/recetas.component';
import { RecetaDetalleComponent } from './features/receta-detalle/receta-detalle.component';
import { LogrosComponent } from './features/logros/logros.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent }, // Página principal
    { path: 'catalogo', component: CatalogoComponent }, // Nueva ruta para el catálogo
    { path: 'producto/:idB', component: ProductoComponent }, // Página de cada producto
    { path: 'recetas', component: RecetasComponent },
    { path: 'receta/:id', component: RecetaDetalleComponent },
    { path: 'historia', component: HistoriaComponent },
    { path: 'logros', component: LogrosComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' } // Cualquier otra pagina te manda aca
];
