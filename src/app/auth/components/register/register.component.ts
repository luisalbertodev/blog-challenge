import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from '@app/core/services/auth/auth.service';
import { SEOService } from '@src/app/core/services/SEOService/seo.service';
import { NotificationService } from '@app/core/services/notification/notification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private SEOService: SEOService,
    private authService: AuthService,
    private notifyService: NotificationService
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    const { meta } = this.route.snapshot.data;
    this.SEOService.setTagsAndTitleToPage(meta);
  }

  register(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      this.authService.createUser(value.email, value.password).then(() => {
        this.notifyService.showSuccess(
          '¡Se completo el registro con exito!',
          ''
        );
        this.router.navigate(['/']);
      });
    } else {
      this.notifyService.showError(
        'Ingresa un correo y contraseña para continuar',
        'Faltan campos por llenar'
      );
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(5)]),
      ],
    });
  }
}
