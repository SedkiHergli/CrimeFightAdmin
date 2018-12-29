import { Component, OnInit } from '@angular/core';
import { DatePipe, formatDate } from '@angular/common'
import { SupervisorService } from '../../services/supervisor.service';
import { interval, Subscription} from 'rxjs';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
import { UserService } from '../../services/user.service';



@Component({
  selector: 'app-weathers',
  templateUrl: './weathers.page.html',
  styleUrls: ['./weathers.page.scss'],
})
export class WeathersPage implements OnInit {
  token:any;
  userss=[];
  datan:any={};
  subscriptionnn: Subscription;

  constructor(
    private supervisorService:SupervisorService,
    private userService: UserService,
    private storage:Storage,
    private alertController: AlertController
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
    this.supervisorService.getAllSupervisor(this.token).subscribe(resp=>{
      this.userss=[];
      for(let i of resp){
        if(i.stype != "Admin")
        this.userss.push(i);
      }
    });
  }

  onPress($event,p) {
    this.ChangeU(p);
  }
  


  async ChangeU(p) {
    const alert = await this.alertController.create({
      header: 'Modify Supervisor',
      buttons: [
        {
          text: 'Modify User',
          handler: (data) => {
            this.ChangeAccountS(p);
          }
        },
        {
          text: 'Modify Password',
          handler: (data) => {
            this.ChangePasswordS(p);
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
                  this.supervisorService.updateSupervisor(this.datan,user.email,this.token).subscribe(resp=>this.getAllSupervisor());
                });  
          }
        }
      ]
    });

    await alert.present();
  }

  async ChangePasswordS(user) {
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
              this.supervisorService.updateSupervisor(data,user.email,this.token).subscribe(resp=>this.getAllSupervisor());   
            }
            
          }
        }
      ]
    });

    await alert.present();
  }
  
}
