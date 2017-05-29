import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule , Routes} from '@angular/router';
import {MyServiceService} from './my-service.service';


import { AppComponent } from './app.component';
import { SuperAdminComponent } from './super-admin/super-admin.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { SeriesComponent } from './series/series.component';
import { SeasonComponent } from './season/season.component';
import { EpisodeComponent } from './episode/episode.component';

const routes:Routes =[

{
  path:"" , component:LoginComponent
} ,
{
path:'superadmin' , component:SuperAdminComponent
},
{
path:'admin' , component:AdminComponent
},
{
path:'user' , component:UserComponent
}
]


@NgModule({
  declarations: [
    AppComponent,
    SuperAdminComponent,
    AdminComponent,
    UserComponent,
    LoginComponent,
    SeriesComponent,
    SeasonComponent,
    EpisodeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)

  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
