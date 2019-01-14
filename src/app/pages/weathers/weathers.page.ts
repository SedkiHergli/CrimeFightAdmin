import { Component, OnInit } from '@angular/core';
import { DatePipe, formatDate } from '@angular/common'
import { interval, Subscription} from 'rxjs';
import { Storage } from '@ionic/storage';
import { ModalController, ToastController, NavParams, AlertController } from '@ionic/angular';
import { UserService } from '../../services/user.service';
import { AddCrimePage } from '../add-crime/add-crime.page';
import { CrimesService } from '../../services/crimes.service';
import { CrimeDetailPage } from '../crime-detail/crime-detail.page';



@Component({
  selector: 'app-weathers',
  templateUrl: './weathers.page.html',
  styleUrls: ['./weathers.page.scss'],
})
export class WeathersPage implements OnInit {
  token:any;
  crimes=[];
  datan:any={};
  subscriptionnn: Subscription;

  constructor(
    private userService: UserService,
    private crimeService: CrimesService,
    private storage:Storage,
    private alertController: AlertController,
    private modalController: ModalController,
  ) { }

  ngOnInit() {
    this.storage.get("access_token").then(tokenn => {
      this.token=tokenn;
      if(this.token){
        this.getAllSupervisor();
       const source = interval(60000);
            this.subscriptionnn = source.subscribe(val => {
              this.getAllSupervisor();
            });
      }
    });

  
  }

  ngOnDestroy() {
    this.subscriptionnn.unsubscribe();
  }

  getAllSupervisor(){
      this.userService.getAllUser(this.token).subscribe(resp=>{
        this.crimes=[];
        for(let i of resp){
          if(i.stype != "Admin"){
            for(let j of i["crimeReports"]){
              this.crimes.push(j);
            }
          }
        }
      });
  }

  onPress($event,p) {
    this.ChangeU(p);
  }

  async openAddCrime(p) {
    const modal = await this.modalController.create({
      component: AddCrimePage,
      componentProps: { value: p },
      animated:true
    });
    return await modal.present();
  }
  


  async ChangeU(p) {
    const alert = await this.alertController.create({
      header: 'Modify Crime',
      buttons: [
        {
          text: 'Modify crime',
          handler: (data) => {
            this.openAddCrime(p);
          }
        },
        {
          text: 'Delete crime',
          handler: (data) => {
            this.deleteCrime(p);
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
  
  
  async ChangeAccountS(user) {
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
          datta["name_s"]=this.datan.fullName;
          datta["email_s"]=this.datan.email;
          datta["phone_s"]=this.datan.phone;
          this.userService.updateUser(datta,user.email_u,this.token).subscribe((res)=>{
                });  
          }
        }
      ]
    });

    await alert.present();
  }


  deleteCrime(user){
    this.crimeService.deleteCrime(user.author,user._id,this.token).subscribe((res)=>{
            this.getAllSupervisor();
          });

}

async goTouser(p){
  const modal = await this.modalController.create({
    component: CrimeDetailPage,
    componentProps: {crime: p},
    animated:true
  });
  return await modal.present();
}
  
}
