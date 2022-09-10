import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { ApiService } from '../providers/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form_usuario = this.fb.group({
    username:['', Validators.required],
    password:['', Validators.required]
  })
  constructor(private api: ApiService, private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  login(){
    this.api.login(this.form_usuario.value)
    .subscribe(
      data => {
        console.log(data)
      }
    )

  }

}
