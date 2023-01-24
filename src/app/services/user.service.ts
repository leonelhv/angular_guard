import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { signInWithEmailAndPassword } from '@firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private auth: Auth, private router: Router) {}

  registerUser({ email, password }: any) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    this.auth
      .signOut()
      .then(() => {
        this.router.navigate(['/auth']);
      })
      .catch((error) => console.log(error));
  }
}
