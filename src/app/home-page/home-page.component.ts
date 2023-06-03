import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ApiService} from "../../apiService";
import {LocalStorageUtil} from "../../localStorageUtil";
import {NgToastService} from "ng-angular-popup";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  title = 'grievance-management-system';

  loginForm: FormGroup = new FormGroup<any>({});
  userDetails: any;
  isSubmitted: boolean = false;

  constructor(
    private client: HttpClient,
    private formBuilder: FormBuilder,
    private router: Router,
    private apiService: ApiService,
    private toastService: NgToastService,
    private ngxToastr: ToastrService
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = this.formBuilder.group({
      email: [undefined, [Validators.required, Validators.email]],
      password: [undefined, [Validators.required, Validators.minLength(8)]]
    });
  }

  submit() {
    this.isSubmitted = true;
    if (this.loginForm.invalid) {
      return
    } else {
      let token: any = '';
      const userCredentials =
        {
          email: (this?.loginForm?.get('email')?.value),
          password: (this.loginForm.get('password')?.value)
        };
      this.apiService.login(userCredentials).subscribe(res => {
        token = res;
        this.getUser(token.jwt);
      }, error => {
        this.ngxToastr.info("jsdsjdfsdjfsdjfhsdjshdjfshdfjsdhfjsdhfsdhfsdfhsjdfhsdjfshdjfshdjfhsdjfsdf");
        this.toastService.error({detail: 'error', summary: 'log in failed', duration: 2000});
        console.log(error);
      });
    }
  }

  getUser(token: string) {
    this.apiService.getLoggedInUserDetails().subscribe(res => {
      this.userDetails = res;
      const storage = LocalStorageUtil.getStorage();
      storage.id = this.userDetails.id;
      storage.name = this.userDetails.name;
      storage.email = this.userDetails.email;
      storage.is_admin = this.userDetails.is_admin;
      storage.is_approved = this.userDetails.is_approved;
      storage.token = token;
      LocalStorageUtil.setStorage(storage);
      this.toastService.success({detail: 'success', summary: 'logged in successfully', duration: 2000});
      this.router.navigate(['dashboard']);
    }, error => {
      console.log(error);
    });
  }
}
