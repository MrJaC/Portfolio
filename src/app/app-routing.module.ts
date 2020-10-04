import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'home/:id',
    loadChildren: () => import('./home/home.module').then( m => m.FolderPageModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('./projects/projects/projects.module').then( m => m.ProjectsPageModule)
  },
  {
    path: 'resume',
    loadChildren: () => import('./cv/resume/resume.module').then( m => m.ResumePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
