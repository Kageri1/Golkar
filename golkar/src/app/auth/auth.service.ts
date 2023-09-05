import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: boolean = false;
  private dataPassword: string = this.generatePassword();
  private lastPasswordUpdate: Date = new Date();

  constructor() { }

  authenticate(username: string, passwordInput: string): boolean {
    console.log('Attempting authentication for', username);
    console.log('Trying to authenticate:', username, passwordInput);
    this.shouldUpdatePassword();

    const dataUsername = 'Deki';
    const dataPassword = this.dataPassword;

    const isAuthenticated = username === dataUsername && dataPassword === passwordInput;

    if (isAuthenticated) {
      console.log('Setting loggedIn status in localStorage');
      console.log('Authentication successful for', username);
      this.loggedIn = true;
      localStorage.setItem('loggedIn', 'true');
      localStorage.setItem('username', username);
    }

    return isAuthenticated;
  }

  isAuthenticated(): boolean{
    return this.loggedIn || localStorage.getItem('loggedIn') === 'true'; //fungsi memeriksa status login
  }
  
  login(username: string): boolean {
    // Lakukan autentikasi ...
    if (this.authenticate(username, this.generatePassword())) {
      localStorage.setItem('username', username); // Simpan username di localStorage
      this.loggedIn = true; // Setelah login, ubah status autentikasi menjadi true
      console.log('Auth Service - Logged in:', this.loggedIn);
      return true;
    }
    return false;
  }

  logout(): void {
    this.loggedIn = false ; //loggedin jadi false saat log out
    localStorage.removeItem('loggedIn'); // Hapus status login dari localStorage
    localStorage.removeItem('username'); // Hapus username dari localStorage saat logout
    console.log('Auth Service - Logged out:', this.loggedIn);
  }

  getLoggedInUser(): string {
    const dataUsername = localStorage.getItem('username'); // Ambil username dari localStorage
    return dataUsername !== null ? dataUsername : '';
  }

  private generatePassword(): string {
    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();

    return `Deki/${this.padNumber(day)}/${this.padNumber(month)}/${year}`;
  }

  private padNumber(num: number): string {
    return num.toString().padStart(2, '0');
  }

  private shouldUpdatePassword(): void {
    const today = new Date();
    const oneDay = 24 * 60 * 60 * 1000; // Satu hari dalam milidetik

    // Bandingkan tanggal terakhir password diubah dengan hari ini
    if (today.getTime() - this.lastPasswordUpdate.getTime() >= oneDay) {
      const nextDay = new Date(today);
      nextDay.setDate(today.getDate() + 1); // tanggal hari esok
      this.dataPassword = this.generatePassword();
      this.lastPasswordUpdate = today;

      const dataUsername = localStorage.getItem('username');
      if (dataUsername !== null)
      localStorage.setItem('username', dataUsername); //memperbarui localStorage dengan username
    }
  }
}
