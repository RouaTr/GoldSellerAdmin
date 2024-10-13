import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { ListAdminComponent } from './list-admin/list-admin.component';
import { ModifyAdminComponent } from './modify-admin/modify-admin.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'addAdmin',component:AddAdminComponent},
  {path:'listAdmin',component:ListAdminComponent},
  {path:'updateAdmin/:id',component:ModifyAdminComponent},
  {path:'',component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
