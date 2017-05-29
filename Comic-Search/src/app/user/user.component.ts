import { Component, OnInit } from '@angular/core';
import {MyServiceService} from '../my-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public MyService:MyServiceService) { }
  data=[{

  }];

  post(value1){
    console.log(value1);
     this.MyService.postComment(value1).subscribe(res=>{
    console.log(res)
  })
  }

  ngOnInit() {
    this.MyService.getEpisode().subscribe(res=>{
     
    this.data=res.respData.data;
  })
  }
}
