import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor(private _http:HttpClient) { }
  
  getUserDetails(){   
  return this._http.get('https://devservices.qpathways.com/otc/test/user')
  }
  saveuserInfo(obj :any){
    return this._http.post('https://devservices.qpathways.com/otc/test/user/save',obj)
  }
  
  deleteUser(id:any){
    return this._http.delete('https://devservices.qpathways.com/otc/test/user'+id)
  }
  
  updateData(id:any,obj:any){
    return this._http.put('https://devservices.qpathways.com/otc/test/user/update'+id,obj)
  }
  

}
