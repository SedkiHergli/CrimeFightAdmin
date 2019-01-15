import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Storage } from '@ionic/storage';
import { interval, Subscription } from 'rxjs';
import { DatePipe, formatDate } from '@angular/common'
import { NavController, AlertController, ToastController, ModalController, Platform } from '@ionic/angular';
import { Network } from '@ionic-native/network/ngx';
import { UserService } from '../services/user.service';
import { MapsPage } from '../pages/maps/maps.page';
import { CrimesService } from '../services/crimes.service';
import {FileTransfer, FileTransferObject} from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';



declare var cordova: any;
const TOKEN_KEY = 'access_token';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  providers: [FileTransfer,FileTransferObject, File,InAppBrowser]

})
export class AdminComponent implements OnInit {

  data:any;
  storageDirectory: string = '';
  constructor(
    private authService: AuthService,
    private alertController: AlertController,
    private navContrl: NavController,
    private storage:Storage,
    private toastCtrl: ToastController,
    private userService: UserService,
    private modalCtrl: ModalController,
    private crimeService: CrimesService,
    private transfer: FileTransfer,    
    private file: File,
    public platform: Platform,
    private iab: InAppBrowser,
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
  }
  
  tab2Selected() {
    console.log('My tab was selected!');
  }

  logout() {
    this.authService.logout();
  }

  downloadCrime(){
    this.storage.get(TOKEN_KEY).then(tokenn => {
    this.crimeService.downloadCrime(tokenn).subscribe(resp=>{
      const fileTransfer: FileTransferObject = this.transfer.create();
      fileTransfer.download(`${this.authService.url}${resp}`, this.file.dataDirectory + resp.split('/')[resp.split('/').length-1]).then((entry) => {
        console.log('download complete: ' + entry.toURL());
      }, (error) => {
        // handle error
      });
      this.data=`${this.authService.url}${resp}`;
      const browser = this.iab.create(this.data);
      browser.show()
    });});
  }

}
