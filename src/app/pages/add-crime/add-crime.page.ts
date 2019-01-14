import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ModalController, ToastController, NavParams } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { interval, Subscription } from 'rxjs';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AddCrimesPage } from '../add-crimes/add-crimes.page';

declare var google;

@Component({
  selector: 'app-add-crime',
  templateUrl: './add-crime.page.html',
  styleUrls: ['./add-crime.page.scss'],
})
export class AddCrimePage implements OnInit {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  marker: any;
  data:any={
    lat:"",
    lng:""
  };


  constructor(
    private modalCtrl:ModalController,
    private plt: Platform,
    private geolocation: Geolocation,
    private navParams: NavParams,
    private toastCtrl: ToastController
  ) {

   }

  ngOnInit() {
    this.ionViewDidLoad();
    this.presentToast("Choose crime location !!");
  }

  ionViewDidLoad() {
    this.plt.ready().then(() => { 
      let mapOptions = {
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        streetViewControl: false,
        mapTypeControl: false,
        disableDoubleClickZoom: true,
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        var p=this.navParams.get('value');
        let latLng = new google.maps.LatLng(Number(p.lat), Number(p.lng));
        this.map.setCenter(latLng);
        this.map.setZoom(16);
        this.addMarker(this.map.getCenter());
        google.maps.event.addListener(this.map, 'click', (event) => {
          this.marker.setMap(null);
          this.addMarker(event.latLng);
        });
    });
  }

  closeModal()
  {
    this.modalCtrl.dismiss();
  }

  async openAddCrime() {
    var p=this.navParams.get('value');
    const modal = await this.modalCtrl.create({
      component: AddCrimesPage,
      componentProps: {data: this.data,p:p},
      animated:true
    });
    return await modal.present();
  }

  addMarker(location) {
    this.data.lat=location.lat();
    this.data.lng=location.lng();
    this.marker = new google.maps.Marker({
      position: location,
      map: this.map,
      animation: google.maps.Animation.DROP,
    });
  }

  presentToast(m) {
    let toast = this.toastCtrl.create({
      message: m,
      duration: 1500,
      position: 'middle'
    });
    toast.then(res=>res.present());
  }
 

}
