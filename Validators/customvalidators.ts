import { AbstractControl,ValidationErrors } from "@angular/forms";


export function passwordValidators(control:AbstractControl):ValidationErrors|null
{
const confirmpassword=control.value;
const password=control.root.get('password')?.value;
if(confirmpassword!='' &&password!=confirmpassword){
    return{isPasswordmatch:true}
}else{
return null;
}
}