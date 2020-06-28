import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";
import { AuthenticationService } from "../../_service/authentication.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  loadingLogin = false;
  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(["/dashboard"]);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      cpf: ["", Validators.required],
      senha: ["", Validators.required],
    });
  }

  get fLogin() {
    return this.loginForm.controls;
  }

  mCPF(form: string) {
    let cpf: string;
    cpf = this.fLogin.cpf.value;
    cpf = cpf.replace(/\D/g, "");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    this.fLogin.cpf.setValue(cpf);
    return true;
  }
  onSubmit() {
    if (!this.loginForm.valid) {
      return;
    }
    console.log(this.fLogin.cpf.value);
    this.authenticationService
      .login(this.fLogin.cpf.value, this.fLogin.senha.value)
      .pipe(first())
      .subscribe(
        (data) => {
          this.router.navigate([this.returnUrl]);
        },
        (error) => {
          this.popupService.show(error.message, "danger");
          this.loadingLogin = false;
        }
      );
  }
}
