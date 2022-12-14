import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {
  personal!:FormGroup
  userResponse:any
  use:any
  constructor(private fb:FormBuilder,private taskSer:TaskServiceService) { }

  ngOnInit(): void {
this.getuserInfo()

    this.personal=this.fb.group({
      "firstname":["",[Validators.required]],
      "middlename":["",[Validators.required]],
      "lastname":["",[Validators.required]],
      "gender":["",[Validators.required]],
      "city":["",[Validators.required]],
      "state":["",[Validators.required]],
    })
  }
  getuserInfo(){
    this.taskSer.getUserDetails().subscribe(response=>{
      this.userResponse = response;
    })
  }
  DeleteRecord(id:any){
    this.taskSer.deleteUser(id).subscribe(res=>{
      this.getuserInfo();
    })
      }
   
      SubmitUserRecord(){   
        let obj={
          firstname:this.personal.value.firstname, 
          middlename:this.personal.value.middlename,
          lastname:this.personal.value.lastname,
          gender:this.personal.value.gender,
          city:this.personal.value.city,
          state:this.personal.value.state,
          
        }
     
        this.taskSer.saveuserInfo(obj).subscribe(response =>{
          console.log("Data saved successfully" + response)
           this.getuserInfo();   
      
           this.personal.reset();
        })
      }

      EditRecords(user:any){
        this.personal.patchValue({
          firstname:user.firstname,
          middlename:user.middlename,
          lastname:user.lastname,
          gender:user.gender,
          city:user.city,
          state:user.state,
        })
        this.use=user
          }
          update(){
            let user1={
          firstname:this.personal.value.firstname, 
          middlename:this.personal.value.middlename,
          lastname:this.personal.value.lastname,
          gender:this.personal.value.gender,
          city:this.personal.value.city,
          state:this.personal.value.state

            }
        this.taskSer.updateData(this.use.id,user1).subscribe(()=>{
          this.getuserInfo();
        })
          }
}
