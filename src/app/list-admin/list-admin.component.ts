import { Component } from '@angular/core';
import { Admin } from '../Entity/Admin.Entity';
import { CrudService } from '../service/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-admin',
  templateUrl: './list-admin.component.html',
  styleUrls: ['./list-admin.component.css']
})
export class ListAdminComponent {
  role:String
 listAdmin: Admin[]
 constructor(private service :CrudService,private router : Router){}
  //delete
  Deleteadmin(admin: Admin ){
    if (confirm("sure to delet this admin "+admin.id +"!?")){
      this.service.onDeleteAdmin(admin.id).subscribe(() => {
        this.router.navigate(['/listAdmin']).then(() => {
          window.location.reload()
        })
      })
    }
  }
  ngOnInit(): void {
    this.role =localStorage.getItem("role")as String;
    this.service.getAdmin().subscribe(admin =>{
      this.listAdmin = admin
    })
  }
}
