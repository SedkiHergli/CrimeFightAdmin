import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Platform, NavParams, ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { interval, Subscription } from 'rxjs';
import { UserService } from '../../services/user.service';
import { CrimeDetailPage } from '../crime-detail/crime-detail.page';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {
  subscription: Subscription;
  token:any;
  crimes:any;
  errMess:any;

  constructor(
    private storage: Storage, 
    private plt: Platform,
    private userService: UserService,
    private modalCtrl:ModalController,
    private navParam: NavParams,
  ) { 
    
  }

  ngOnInit() {
    if(!this.token){
      this.storage.get("access_token").then(tokenn => {
        this.token=tokenn;
          var data = this.navParam.get('data');
          this.getUser(data);
          const source = interval(60000);
          this.subscription = source.subscribe(val => {
            this.getUser(data);
          });
}).catch(err=>this.errMess=err);
  }
}

ngOnDestroy() {
  this.subscription.unsubscribe();
}

getUser(data){
  
  this.userService.getApiUser(data.email,this.token).subscribe(resp=>{
    this.crimes = resp[0].crimeReports;
  });
}

async goTouser(p){
  const modal = await this.modalCtrl.create({
    component: CrimeDetailPage,
    componentProps: {crime: p},
    animated:true
  });
  return await modal.present();
}

closeModal()
{
  this.modalCtrl.dismiss();    
}

}
