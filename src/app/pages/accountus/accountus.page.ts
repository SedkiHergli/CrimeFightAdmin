import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { Storage } from '@ionic/storage';
import { interval, Subscription } from 'rxjs';
import { DatePipe, formatDate } from '@angular/common'
import { NavController, AlertController, ToastController, ModalController, Platform } from '@ionic/angular';
import { Network } from '@ionic-native/network/ngx';
import { UserService } from '../../services/user.service';
import { MapsPage } from '../maps/maps.page';
import { CrimesService } from '../../services/crimes.service';
import {FileTransfer, FileTransferObject} from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';


declare var cordova: any;
const TOKEN_KEY = 'access_token';
const REFRESH_TOKEN_KEY = 'refresh_token';


@Component({
  selector: 'app-accountus',
  templateUrl: './accountus.page.html',
  styleUrls: ['./accountus.page.scss'],
  providers: [FileTransfer,FileTransferObject, File]
})
export class AccountusPage implements OnInit {
  userss=[];
  datan:any={};
  user:any;
  token:any;
  subscription: Subscription;
  subscriptionn: Subscription;
  disconnectSubscription:any;
  storageDirectory: string = '';
  constructor(
    private alertController: AlertController,
    private navContrl: NavController,
    private authService: AuthService, 
    private storage:Storage,
    private network: Network,
    private toastCtrl: ToastController,
    private userService: UserService,
    private modalCtrl: ModalController,
    private crimeService: CrimesService,
    private transfer: FileTransfer,    
    private file: File,
    public platform: Platform,
  ) { 
    this.platform.ready().then(() => {
      // make sure this is on a device, not an emulation (e.g. chrome tools device mode)
      if(!this.platform.is('cordova')) {
        return false;
      }

      if (this.platform.is('ios')) {
        this.storageDirectory = cordova.file.documentsDirectory;
      }
      else if(this.platform.is('android')) {
        this.storageDirectory = cordova.file.dataDirectory;
      }
      else {
        // exit otherwise, but you could add further types here e.g. Windows
        return false;
      }
    });
  }

  ngOnInit() {
    this.storage.get(REFRESH_TOKEN_KEY).then(tokeni => {
      this.storage.get(TOKEN_KEY).then(tokenn => {
    this.authService.updateToken("auth",tokeni,tokenn).subscribe(resp=>{this.storage.set(TOKEN_KEY,resp["access_token"]);});
      });});
    this.verifyConnection();
    const sourcee = interval(3599000);
    this.subscriptionn = sourcee.subscribe(val => {
      this.storage.get(REFRESH_TOKEN_KEY).then(tokeni => {
        this.storage.get(TOKEN_KEY).then(tokenn => {
        this.authService.updateToken("auth",tokeni,tokenn).subscribe(resp=>{
          this.storage.set(TOKEN_KEY,resp["access_token"]);
        });
      });});      
      });
    if(!this.token){
      this.storage.get("access_token").then(tokenn => {
        this.token=tokenn;
        if(!this.user){
          this.storage.get("User").then(userr => {
            this.user=userr;
            this.getAllUser();
            const source = interval(60000);
            this.subscription = source.subscribe(val => {
              this.getAllUser();
            });
          });}      
    });}  
    

  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscriptionn.unsubscribe();
    this.disconnectSubscription.unsubscribe();
  }

  verifyConnection(){
    this.disconnectSubscription = this.network.onDisconnect().subscribe(() => {
      this.presentToast("Please turn on your connection !");
    });
  }

  logout() {
    this.authService.logout();
  }
  



presentToast(m) {
  let toast = this.toastCtrl.create({
    message: m,
    duration: 1500,
    position: 'bottom'
  });
  toast.then(res=>res.present());
}

getAllUser(){
  this.userService.getAllUser(this.token).subscribe(resp=>{
    this.userss=[];
    for(let i of resp){
      if(i.stype != "Admin")
      this.userss.push(i);
    }
  });
}

downloadCrime(){
  this.crimeService.downloadCrime(this.token).subscribe(resp=>{
    const fileTransfer: FileTransferObject = this.transfer.create();
    fileTransfer.download(`${this.authService.url}${resp}`, this.file.dataDirectory + resp.split('/')[resp.split('/').length-1]).then((entry) => {
      console.log('download complete: ' + entry.toURL());
    }, (error) => {
      // handle error
    });
  });
}

async goTouser(p){
  const modal = await this.modalCtrl.create({
    component: MapsPage,
    componentProps: {data: p},
    animated:true
  });
  return await modal.present();
}



onPress($event,p) {
  this.ChangeU(p);
}


async ChangeAccountU(user) {
  const alert = await this.alertController.create({
    header: 'Modify User',
    inputs: [
      {
        name: 'fullName',
        type: 'text',
        placeholder: user.fullName
      },
      {
        name: 'email',
        type: 'email',
        placeholder: user.email
      },
      {
        name: 'phone',
        type: 'tel',
        placeholder: user.phone
      }
    ],
    buttons: [
      {
        text: 'CANCEL',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
        }
      }, {
        text: 'SAVE',
        handler: (data) => {
          for (let item of Object.keys(data)) {
            if(!data[item]){
              this.datan[item]=user[item];
            }
            else{
              this.datan[item]=data[item];
            }
          
        }   
        var datta ={};
        datta["name_u"]=this.datan.fullName;
        datta["email_u"]=this.datan.email;
        datta["phone_u"]=this.datan.phone;
        this.userService.updateUser(this.datan,user.email,this.token).subscribe((res)=>{
                this.getAllUser();
                });  
        }
      }
    ]
  });

  await alert.present();
}

async ChangePasswordU(user) {
  const alert = await this.alertController.create({
    header: 'Modify Password',
    inputs: [
      {
        name: 'password',
        type: 'password',
        placeholder: 'Password'
      },
      {
        name: 'cpassword',
        type: 'password',
        placeholder: 'Confirm password'
      }
    ],
    buttons: [
      {
        text: 'CANCEL',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
        }
      }, {
        text: 'SAVE',
        handler: (data) => {
            if(!data["password"] || data["cpassword"]!=data["password"] || data["password"].length < 6  ){
              this.showAlert("Enter password again !!");
          }
          else{  
            this.userService.updateUser(data,user.email,this.token).subscribe(resp=>this.getAllUser());   
          }
          
        }
      }
    ]
  });

  await alert.present();
}

async ChangeU(p) {
  const alert = await this.alertController.create({
    header: 'Modify User',
    buttons: [
      {
        text: 'Modify User',
        handler: (data) => {
          this.ChangeAccountU(p);
        }
      },
      {
        text: 'Modify Password',
        handler: (data) => {
          this.ChangePasswordU(p);
        }
      },
      {
        text: 'Delete User',
        handler: (data) => {
          this.deleteUser(p);
        }
      },
      {
        text: 'CANCEL',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
        }
      }
    ]
  });

  await alert.present();
}

showAlert(msg) {
  let alert = this.alertController.create({
    message: msg,
    header: 'Error',
    buttons: ['OK']
  });
  alert.then(alert => alert.present());
}

deleteUser(user){
    this.userService.deleteUser(user.email,this.token).subscribe((res)=>{
            this.getAllUser();
          });

}

initializee(){
  this.authService.revokeIssuedRefreshTokens(this.token).subscribe();
}

/*

downloadImage(image,lien) {
  const fileTransfer: FileTransferObject = this.transfer.create();
  this.platform.ready().then(() => {

    const imageLocation = `${lien}`;

    fileTransfer.download(imageLocation, this.storageDirectory + image).then((entry) => {

      const alertSuccess = this.alertController.create({
        header: 'Download Succeeded!',
        message: `${image} was successfully downloaded to: ${entry.toURL()}`,
        buttons: ['Ok']
      });

      alertSuccess.then(alert => alert.present());

    }, (error) => {

      const alertFailure = this.alertController.create({
        header: `Download Failed!`,
        message: `${image} was not successfully downloaded. Error code: ${error.code}`,
        buttons: ['Ok']
      });

      alertFailure.then(alert => alert.present());

    });

  });

}

retrieveImage(image) {

  this.file.checkFile(this.storageDirectory, image)
    .then(() => {

      const alertSuccess = this.alertController.create({
        header: `File retrieval Succeeded!`,
        message: `${image} was successfully retrieved from: ${this.storageDirectory}`,
        buttons: ['Ok']
      });

      alertSuccess.then(alert => alert.present());
    })
    .catch((err) => {

      const alertFailure = this.alertController.create({
        header: `File retrieval Failed!`,
        message: `${image} was not successfully retrieved. Error Code: ${err.code}`,
        buttons: ['Ok']
      });

      alertFailure.then(alert => alert.present());


    });
}
*/

}
