import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'rest',
    loadChildren: () => import('./pages/rest/rest.module').then( m => m.RestPageModule)
  },
  {
    path: 'rest2',
    loadChildren: () => import('./pages/rest2/rest2.module').then( m => m.Rest2PageModule)
  },

  {
    path: 'detalle/:id',
    loadChildren: () => import('./pages/rest/detalle/detalle.module').then( m => m.DetallePageModule)
  }
 
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
