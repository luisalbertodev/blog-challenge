import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { LayoutComponent } from '@app/layout/layout.component';
import { sectionsMetadata } from '@app/shared/constants/sectionsMetadata';
import { AppGuard } from '@app/guard/app.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AppGuard],
    children: [
      {
        path: '',
        redirectTo: '/inicio?categoria=business&pais=MX',
        pathMatch: 'full',
      },
      {
        path: 'inicio',
        data: sectionsMetadata.homePage,
        loadChildren: () =>
          import('@app/home/home.module').then((m) => m.HomeModule),
      },
    ],
  },
  {
    path: 'seguridad',
    loadChildren: () =>
      import('@app/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '**',
    data: sectionsMetadata.notFound,
    loadChildren: () =>
      import('@app/page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
