import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/RX';

@Injectable()
export class MyServiceService {

  constructor(public GitHttp : Http) { }
PostMongo(form){
  console.log(form);
  let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
   
    
    return this.GitHttp.post("http://localhost:2000/api/u1/verify", form, headers).map((res: Response) => res.json());
  
}

PostUser(form){
  let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
 
    
    return this.GitHttp.post("http://localhost:2000/api/u1/addUser", form, headers).map((res: Response) => res.json());
  
}
getUsers(){
  let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
  
    
    return this.GitHttp.get("http://localhost:2000/api/u1/addUser").map((res: Response) => res.json());
  
}

DeleteUsers(id){
  let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
  console.log(id);
    
    return this.GitHttp.post("http://localhost:2000/api/u1/deleteUser",id,headers).map((res: Response) => res.json());
  
}

PostSeries(form){
  console.log(form);
  let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
 
    
    return this.GitHttp.post("http://localhost:2000/api/u1/addSeries", form, headers).map((res: Response) => res.json());
  
}
getSeries(){
  let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
  
    
    return this.GitHttp.get("http://localhost:2000/api/u1/addSeries").map((res: Response) => res.json());
  
}
DeleteSeries(id){
  let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
  console.log(id);
    
    return this.GitHttp.post("http://localhost:2000/api/u1/deleteSeries",id,headers).map((res: Response) => res.json());
  
}

PostSeason(form){
  console.log(form);
  let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
 
    
    return this.GitHttp.post("http://localhost:2000/api/u1/addSeason", form, headers).map((res: Response) => res.json());
  
}


DeleteSeason(id){
  let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
  console.log(id);
    
    return this.GitHttp.post("http://localhost:2000/api/u1/deleteSeason",id,headers).map((res: Response) => res.json());
  
}

getSeason(){
  let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
  
    
    return this.GitHttp.get("http://localhost:2000/api/u1/addSeason").map((res: Response) => res.json());
  
}

PostEpisode(form){
  console.log(form);
  let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
 
    
    return this.GitHttp.post("http://localhost:2000/api/u1/addEpisode", form, headers).map((res: Response) => res.json());
  
}


DeleteEpisode(id){
  let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
  console.log(id);
    
    return this.GitHttp.post("http://localhost:2000/api/u1/deleteEpisode",id,headers).map((res: Response) => res.json());
  
}

getEpisode(){
  let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
  
    
    return this.GitHttp.get("http://localhost:2000/api/u1/addEpisode").map((res: Response) => res.json());
  
}
searchEpisode(name){
  console.log(name);
  let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
  console.log(name);
    
    return this.GitHttp.post("http://localhost:2000/api/u1/searchEpisode",name,headers).map((res: Response) => res.json());
  
}

postComment(name){
  console.log(name);
  let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
  console.log(name);
    
    return this.GitHttp.post("http://localhost:2000/api/u1/postComment",name,headers).map((res: Response) => res.json());
  
}

}

