import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, NavController, ToastController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { CrimesService } from '../../services/crimes.service';

const TOKEN_KEY = 'access_token';
const REFRESH_TOKEN_KEY = 'refresh_token';
@Component({
  selector: 'app-add-crimes',
  templateUrl: './add-crimes.page.html',
  styleUrls: ['./add-crimes.page.scss'],
})
export class AddCrimesPage implements OnInit {
  typecs = ['ARSON', 'ASSAULT', 'BATTERY','BURGLARY', 'CRIMINAL DAMAGE', 'CRIM SEXUAL ASSAULT'
,'DOMESTIC VIOLENCE', 'GAMBLING', 'HOMICIDE','HUMAN TRAFFICKING', 'INTERFERENCE WITH PUBLIC OFFICER',
 'INTIMIDATION','KIDNAPPING','LIQUOR LAW VIOLATION','NARCOTICS','OBSCENITY','OFFENSE INVOLVING CHILDREN','OTHER OFFENSE'
 ,'STALKING','THEFT','WEAPONS VIOLATION'];
  typec = 'ARSON';
  myDate:any;
  credentialsForm: FormGroup;
  data:any;
  p:any;
  arrest="false";
  arrests=[true,false];

  constructor(
    private modalCtrl:ModalController,
    private navParams: NavParams,
    private formBuilder: FormBuilder, 
    private storage: Storage,
    private crimesService: CrimesService,
    private navCtrl: NavController,
    private toastCtrl:ToastController
  ) { }

  ngOnInit() {
    this.credentialsForm = this.formBuilder.group({
      description: ['', [Validators.required]],
      ldescription: ['', [Validators.required]],
      myDate: ['', [Validators.required]],
      caseNumber: ['', [Validators.required]],
         });
    this.data=this.navParams.get('data');
    this.p=this.navParams.get('p');
    this.p.lat=this.data.lat;
    this.p.lng=this.data.lng;
    this.typec=this.p.type;
    this.credentialsForm.get('description').setValue(this.p.description);
    this.credentialsForm.get('ldescription').setValue(this.p.locationDescription);
    this.credentialsForm.get('myDate').setValue(this.p.date);
  }
  
  closeModal()
  {
    this.modalCtrl.dismiss();    
  }

  addCrime(){
    this.p["description"]=this.credentialsForm.value.description;
    this.p["locationDescription"]=this.credentialsForm.value.ldescription;
    this.p["date"]=this.credentialsForm.value.myDate;
    this.p["caseNumber"]=this.credentialsForm.value.caseNumber;
    this.p["type"]=this.typec;
    this.p["arrest"]=Boolean(this.arrest);
    console.log(this.p);
      this.storage.get(TOKEN_KEY).then(tokenn => {
        this.crimesService.postCrime(this.p,tokenn).subscribe(resp=>{
          this.crimesService.deleteCrime(this.p.author,this.p._id,tokenn).subscribe();
          this.presentToast("Choose crime location !!");
          this.closeModal();
        });
    }).catch(err=>{console.log(err);});
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
