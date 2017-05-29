import { Component, OnInit } from '@angular/core';
import {MyServiceService} from '../my-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public MyService:MyServiceService,public router:Router) { }
  Name;
  Password;
  comic;
  display=1;
  data=[{

  }];
onsubmit(comic){
  this.MyService.PostMongo(comic.value).subscribe(res=>{
    console.log(res);
    console.log(res.respData.data.Role);
    if(res.respData.data.Role=="superadmin"){

      this.router.navigate(['superadmin']);

    }else if(res.respData.data.Role=="admin"){
      this.router.navigate(['admin']);
    } else if(res.respData.data.Role=="User"){
      console.log(res.respData.data.Role);
      this.router.navigate(['user']);
      

    }
  })

}

searchComic(comic){

console.log(comic.value);
     this.MyService.searchEpisode(comic.value).subscribe(res=>{
     console.log(comic.value);
   
    console.log(res);
    this.data=res.respData.data;
    this.display=0;
})
}
  ngOnInit() {
  }

}
