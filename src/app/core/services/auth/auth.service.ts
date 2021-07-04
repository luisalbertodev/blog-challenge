import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  getTheMessagefromErrorFirebaseAuth,
  getTheMessagefromErrorFirebaseCreateAccount,
} from '@app/utils/firebase';
import { NotificationService } from '@app/core/services/notification/notification.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private firebaseAuth: AngularFireAuth,
    private notifyService: NotificationService
  ) {}

  createUser(email: string, password: string) {
    return new Promise((res, rej) => {
      return this.firebaseAuth
        .createUserWithEmailAndPassword(email, password)
        .then(res)
        .catch((error) => {
          this.notifyService.showError(
            getTheMessagefromErrorFirebaseCreateAccount(error),
            '¡Ocurrio un error!'
          );

          rej(error);
        });
    });
  }

  login(email: string, password: string) {
    return new Promise((res, rej) => {
      return this.firebaseAuth
        .signInWithEmailAndPassword(email, password)
        .then(res)
        .catch((error) => {
          this.notifyService.showError(
            getTheMessagefromErrorFirebaseAuth(error),
            '¡Ocurrio un error!'
          );
          rej(error);
        });
    });
  }

  logout(): Promise<void> {
    return new Promise((res, rej) => {
      return this.firebaseAuth
        .signOut()
        .then((response) => {
          this.notifyService.showSuccess(
            '!Hasta pronto, Gracias por visitarnos!',
            ''
          );
          res(response);
        })
        .catch((error) => {
          rej(error);
        });
    });
  }

  hasUser() {
    return this.firebaseAuth.authState;
  }
}
