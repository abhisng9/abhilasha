import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,  Validators } from '@angular/forms';
import { SignUp } from 'src/app/data';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup
name= new FormControl();
email= new FormControl();
password= new FormControl();
// SignUp!: string;
  constructor(private fb: FormBuilder, private auth: AuthService){

  }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      name: [null, Validators.required],
      email: [null, Validators.required, Validators.email],
      password:[null, Validators.required, Validators.maxLength(8)]
    })
      
  }
  submit(name: string, password: string, email:string) {
    const data: SignUp = {
      name, password, email,
      Id: 0
    };
    this.auth.userSignUp(data).subscribe(
      response => {
        // Handle the successful response
        console.log(response);
      },
      error => {
        // Handle the error response
        console.error(error);
      }
    );
  }



}