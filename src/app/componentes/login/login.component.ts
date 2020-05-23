import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      cpf: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }
  mCPF(form: string) {
    let cpf: string
    cpf = this.f.cpf.value;
    cpf = cpf.replace(/\D/g, "")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2")

    this.f.cpf.setValue(cpf);
    return true
  }

}
