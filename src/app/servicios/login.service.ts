import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from "@angular/router";

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class LoginService {

    private user: Observable<firebase.User>;

    constructor(private _firebaseAuth: AngularFireAuth, private router: Router) { 
        this.user = _firebaseAuth.authState;
    }

    signInWithEmailAndPass(email, pass){

    }

    signInWithGoogleMail(email, pass){

    }

}