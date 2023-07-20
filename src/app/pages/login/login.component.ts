import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  public loginForm: FormGroup;
  private loginSubscription: Subscription = Subscription.EMPTY;

  constructor(
    private fb: FormBuilder,
    private readonly authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', [Validators.required]]
    })
  }

  public login():void {
    if (this.loginForm.valid) {
      if (this.loginForm.valid) {
        Swal.fire({
          title: 'Iniciando Sesión',
          didOpen: () => {
            Swal.showLoading()
          },
        });
        this.loginSubscription = this.authService.login(this.loginForm.value).subscribe((data) => {
          Swal.close();
          if (data.token) {
            window.localStorage.setItem('token', data.token);
            this.router.navigateByUrl('/home');
            Swal.fire({
              icon: 'success',
              title: 'Sesión iniciada correctamente',
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
      }
    }
  }

  ngOnDestroy(): void {
    this.loginSubscription.unsubscribe();
  }
}
