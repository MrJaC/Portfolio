import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.FolderPageModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('./projects/projects/projects.module').then( m => m.ProjectsPageModule)
  },
  {
    path: 'resume',
    loadChildren: () => import('./cv/resume/resume.module').then( m => m.ResumePageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'view-project',
    loadChildren: () => import('./projects/view-project/view-project.module').then( m => m.ViewProjectPageModule)
  },
  { path: '**', 
    loadChildren: () => import('./error/error.module').then( m => m.ErrorPageModule)
  },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
