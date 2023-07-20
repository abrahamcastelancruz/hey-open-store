import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {

  public registerForm: FormGroup;
  private registerSubscription: Subscription = Subscription.EMPTY;

  constructor(
    private fb: FormBuilder,
    private readonly authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createRegisterForm();
  }

  createRegisterForm(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      lastName: ['', Validators.required],
      middleName: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required]]
    })
  }

  public doRegister(): void {
    if (this.registerForm.valid) {
      Swal.fire({
        title: 'Creando Cuenta',
        didOpen: () => {
          Swal.showLoading()
        },
      });
      this.registerSubscription = this.authService.register(this.registerForm.value).subscribe((data) => {
        Swal.close();
        if (data.token) {
          window.localStorage.setItem('token', data.token);
          console.log(data)
          this.router.navigateByUrl('/home');
          Swal.fire({
            icon: 'success',
            title: 'Cuenta Creada',
            showConfirmButton: false,
            timer: 1000
          });
        }
      }, (err) => {
        Swal.close();
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${err.error}`,
        });
      });
    } else {
      this.registerForm.markAllAsTouched();
    }
  }

  ngOnDestroy(): void {
    this.registerSubscription.unsubscribe();
  }
}
