import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router'
import { AlertController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string = ""
  password: string = ""

  constructor(public authF: AngularFireAuth,
    public alert: AlertController,
    public router: Router) { }

  ngOnInit() {
  }

  async login(){
    const { username, password } = this
    try{
      const res = await this.authF.auth.signInWithEmailAndPassword(username, password)
      this.showAlert("Success","Welcome aboard")
      this.router.navigate(['/tabs'])
    }catch(err){
      console.dir(err)
      if(err.code === "auth/user-not-found"){
        console.log("user not found");
        this.showAlert("Error",err.message)
      }
    }
  }

  async showAlert(header: string, message: string){
    const alert = await this.alert.create({
      header,
      message,
      buttons: ["Ok"]
    })
    await alert.present()
  }

  register(){
    this.router.navigate(['/register'])
  }

}
