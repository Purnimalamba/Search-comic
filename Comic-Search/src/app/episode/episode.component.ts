import { Component, OnInit } from '@angular/core';
import {MyServiceService} from '../my-service.service';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.css']
})
export class EpisodeComponent implements OnInit {

   constructor( public MyService:MyServiceService) {}
  data=[{}];
 onsubmit3(form){
     
    console.log(form.value);
     this.MyService.PostEpisode(form.value).subscribe(res=>{
    
   
    console.log(res);
    this.data=res;
  })


 }
 onDelete(id){
 this.MyService.DeleteEpisode({id: id}).subscribe(res=>{
    
      console.log(id);
      alert("user deleted");
     
  })
}

  ngOnInit() {
     this.MyService.getEpisode().subscribe(res=>{
   
    this.data=res.respData.data;
  
    console.log(this.data);
  })
  }

}
