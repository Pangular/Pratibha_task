import { Component } from '@angular/core';
import { TaskServiceService } from './task-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Task';
get:any

  userResponse:any
constructor(private mainService:TaskServiceService){}
ngOnInit(): void {
  // this.getUser()
}
// getUser(){
//   this.mainService.getData().subscribe((response:any)=>{
//   console.log("this response"+response)
//     this.userResponse=response
//   })
// }



}
  

