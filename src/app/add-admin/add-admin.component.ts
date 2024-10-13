import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from '../Entity/Admin.Entity';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent {
commandeMessage="";
AdminForm:FormGroup
constructor(private service:CrudService,private router :Router,private fb:FormBuilder){
  let formControls ={
    name:new FormControl('',[Validators.required,]),
    lastName:new FormControl('',[Validators.required,]),
    email: new FormControl('',[Validators.required,]),
    password:new FormControl('',[Validators.required,]),
    role:new FormControl('',[Validators.required,]),
  }
  this.AdminForm=this.fb.group(formControls)
}
  get name(){return this.AdminForm.get('name');}
  get lastName(){return this.AdminForm.get('lastName');}
  get email(){return this.AdminForm.get('email');}
  get password(){return this.AdminForm.get('password');}
  get role(){return this.AdminForm.get('role');}
  addNewAdmin(){
    let data =this.AdminForm.value;
    console.log(data);
    let admin =new Admin(
      undefined,data.name,data.lastName,data.email,data.password,data.role
    );
    console.log(admin);
    if (
      data.name == 0 ||
      data.lastName == 0||
      data.email == 0 ||
      data.password == 0 ||
      data.role ==0
    ) {
      this.commandeMessage = `<div class="alert alert-warning" role="alert">
       This field is required!
      </div>`
    } else {
    this.service.addAdmin(admin).subscribe(
      res=>{
        console.log(res);
        this.commandeMessage = `<div class="alert alert-success" role="alert">
       Administrator sent successfully !
      </div>`

        this.router.navigate(['']);
      },
      err=>{
        console.log(err);
        this.commandeMessage = `<div class="alert alert-danger" role="alert">
       Server issue!
      </div>` }
    )

    }
  }

 ngOnInit(): void {
    }
}
