import { Component, OnInit } from '@angular/core';
import {MyServiceService} from '../my-service.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.css']
})
export class SuperAdminComponent implements OnInit {

  constructor(public MyService:MyServiceService, public router:Router) { }
  action: string = "Add";
  actions: string[] = ["Add","update"]
  type: string = "Admin";
  types: string[] = ["User","Admin"]
flag=1;
Role;
Buttonflag=0;
Data=[{

}];
form_data={
  username:"",
  password:"",
  role:""
}

onsubmit(value1,value2){
  if( value1=="Add" && value2=="Admin" || value2=="User"){
   this.Role=value2;
  this.flag=0;
}


}
onDelete(id){
 this.MyService.DeleteUsers({id: id}).subscribe(res=>{
    
      console.log(id);
      alert("user deleted")
     this.router.navigate(['superadmin']);
  })
}
onsubmit1(form){
  this.form_data=form.value;
  // console.log(form.value);
    this.form_data.role=this.Role;
    this.MyService.PostUser(this.form_data).subscribe(res=>{
    
   
    console.log(res);
    //  console.log(this.form_data.role);
  })

}

  ngOnInit() {
   
  this.Buttonflag=1;
  this.MyService.getUsers().subscribe(res=>{
    
    this.Data=res.respData.data;
    console.log(this.Data);

  })
}
  

}
