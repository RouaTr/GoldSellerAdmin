import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Admin } from '../Entity/Admin.Entity';
import { CrudService } from '../service/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AddAdminComponent } from '../add-admin/add-admin.component';

@Component({
  selector: 'app-modify-admin',
  templateUrl: './modify-admin.component.html',
  styleUrls: ['./modify-admin.component.css']
})
export class ModifyAdminComponent {
updateForm:FormGroup;
id :number;
currentAdmin = new Admin ();
userFile: any;
public message!: string;
constructor(
  private fb :FormBuilder,
  private service :CrudService,
  private route :Router,
  private router : ActivatedRoute
){
  let formControles = {
    name : new FormControl('',[
      Validators.required,
      Validators.pattern("[a-z A-Z .'-]+"),
      Validators.minLength(4),

    ]),
    lastName : new FormControl('',[
      Validators.required,
      Validators.pattern("[a-z A-Z .'-]+"),
      Validators.minLength(4),

    ]),
    email : new FormControl('',[
      Validators.required,
      Validators.email

    ]),
    password : new FormControl('',[
      Validators.required,

    ]),
    role : new FormControl('',[
      Validators.required,

    ]),

  };
  this.updateForm=this.fb.group(formControles);
}
get name (){
  return this.updateForm.get('name');
}
get lastName(){
  return this.updateForm.get('lastName');
}
get email(){
  return this.updateForm.get('email');

}
get password(){
  return this.updateForm.get('password');
}
get role (){
  return this.updateForm.get('role');
}
ngOnInit():void{
  let idEvent = this.router.snapshot.params['id'];
  this.id=idEvent;
  this.service.findAdminById(idEvent).subscribe((result) =>{
    let admin = result;
    console.log(admin);
    this.updateForm.patchValue({
      name:admin.name,
      lastName:admin.lastName,
      email:admin.email,
      password:admin.password,
      role:admin.role
    });
  });
}
updateAdmin(){
  let data = this.updateForm.value;
  let admin = new Admin(
    this.id,
    data.name,
    data.lastName,
    data.email,
    data.password,
    data.role
  );
  console.log(admin);
  console.log(data);
  this.service.updateAdmin(this.id, admin).subscribe((res) => {
    console.log(res);
    this.route.navigate(['/']);
  });
}
}
