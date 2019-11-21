import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  register() {
   this.authService.register(this.model).subscribe(() => {
     console.log('Registeration Successful');
   }, error => {
     console.log('Failed to Register');
   })
  }

  cancel() {
    this.cancelRegister.emit(false);
    console.log('cancelled');
  }


}
