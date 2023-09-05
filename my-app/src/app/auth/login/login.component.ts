import { Component, OnInit,} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';



@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
    username: string = '';
    password: string = '';
    showPassword: boolean = false;

    constructor (private authService: AuthService, private router: Router){}

    ngOnInit(): void { 
    }

    togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
    }
    
    onLogin(): void {
        console.log('Login button clicked with username:', this.username);
        if (this.authService.authenticate(this.username, this.password)){
            console.log('Authentication successful');
            alert ('Login Berhasil !!!');
            this.router.navigate(['dashboard']);
        }else{
            console.log('Log failed...');
            alert('Login Gagal !!!');
        }
    }

}