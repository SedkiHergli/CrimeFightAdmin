import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Platform, NavParams } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { LocationService } from '../../services/location.service';
import { interval, Subscription } from 'rxjs';



declare var google;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  public distanceView="Loading ...";
  subscription: Subscription;
  token:any;
  user:any;
  sentData:any;

  constructor(
    private locationService: LocationService,
    private storage: Storage, 
    private geolocation: Geolocation, 
    private plt: Platform,
  ) { 
    this.storage.get('data').then(data => {this.sentData = data
    });
  }

  ngOnInit() {
    if(!this.token){
      this.storage.get("access_token").then(tokenn => {
        this.token=tokenn;
        if(!this.user){
          this.storage.get("User").then(userr => {
            this.user=userr;
    this.ionViewDidLoad({'lat':Number(this.sentData.lat),'lng':Number(this.sentData.lng)});
  });}
});
  }
}


  addMarker(message){

    let marker = new google.maps.Marker({
    map: this.map,
    animation: google.maps.Animation.DROP,
    position: this.map.getCenter()
    });

    let content = "<p>"+ message + "!</p>";          
    let infoWindow = new google.maps.InfoWindow({
    content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
    infoWindow.open(this.map, marker);
    });

  }

  ionViewDidLoad(pos) {
    this.plt.ready().then(() => { 
      let mapOptions = {
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        let latLng = new google.maps.LatLng(pos.lat, pos.lng);
        this.map.setCenter(latLng);
        this.addMarker(this.sentData.fullName);
        this.map.setZoom(16);
  
    });
  }
  
}
