// import { HttpClient } from "@angular/common/http";
// import { Injectable } from "@angular/core";
// import { Observable } from "rxjs";
// import { detailJSONList } from "../details.datasource";
// import { PhoneDetails } from "../details.interface";
// @Injectable({
//     providedIn: 'root'
//   })
//   export class PhoneDetailsService {
//       detailPhoneUrl = detailJSONList;

//       constructor(
//         private http: HttpClient
//       ) { }

//       getDetail():Observable<PhoneDetails[]> {
         
//           return this.http.get<PhoneDetails[]>(this.detailPhoneUrl[1]);
//       }

//       getDetail(id: String): Observable<PhoneDetails | any>{
//         return this.http.get<PhoneDetails>(this.detailPhoneUrl[1]+'/'+id);
//       }
      
//     }












// export class PhoneDetailsService {
//     apiPhoneIdDellStreak7 = "assets/phones/dell-streak-7.json";
//     apiPhoneIdDellVenue = "assets/phones/dell-venue.json";
//     apiPhoneIdDroid2GlobalByMotorola = "assets/phones/droid-2-global-by-motorola.json";
//     apiPhoneIdDroidProByMotorola = "assets/phones/droid-pro-by-motorola.json";
//     apiPhoneIdLgAxis = "assets/phones/lg-axis.json";
//     apiPhoneIdMotorolaAtrix4G = "assets/phones/motorola-atrix-4g.json";
//     apiPhoneIdMotorolaBravoWithMotoblur = "assets/phones/motorola-bravo-with-motoblur.json";
//     apiPhoneIdMotorolaCharmWithMotoblur = "assets/phones/motorola-charm-with-motoblur.json";
//     apiPhoneIdMotorolaDefyWithMotoblur = "assets/phones/motorola-defy-with-motoblur.json";
//     apiPhoneIdMotorolaXoom = "assets/phones/motorola-xoom.json";
//     apiPhoneIdMotorolaXoomWithWifi = "assets/phones/motorola-xoom-with-wi-fi.json";
//     apiPhoneIdNexusS = "assets/phones/nexus-s.json";
//     apiPhoneIdSamsungGalaxyTab = "assets/phones/samsung-galaxy-tab.json";
//     apiPhoneIdSamsungGem = "assets/phones/samsung-gem.json";
//     apiPhoneIdSamsungMesmerizeAGalaxySPhone = "assets/phones/samsung-mesmerize-a-galaxy-s-phone.json";
//     apiPhoneIdSamsungShowcaseAGalaxySPhone = "assets/phones/samsung-showcase-a-galaxy-s-phone.json";
//     apiPhoneIdSamsungTransform = "assets/phones/samsung-transform.json";
//     apiPhoneIdSanyoZio = "assets/phones/sanyo-zio.json";
//     apiPhoneIdTMobileG2 = "assets/phones/t-mobile-g2.json";
//     apiPhoneIdTMobileMytouch4G = "assets/phones/t-mobile-mytouch-4g.json";

//     detailJSONList = [
//         this.apiPhoneIdDellStreak7,
//         this.apiPhoneIdDellVenue,
//         this.apiPhoneIdDroid2GlobalByMotorola,
//         this.apiPhoneIdDroidProByMotorola,
//         this.apiPhoneIdLgAxis,
//         this.apiPhoneIdMotorolaAtrix4G,
//         this.apiPhoneIdMotorolaBravoWithMotoblur,
//         this.apiPhoneIdMotorolaCharmWithMotoblur,
//         this.apiPhoneIdMotorolaDefyWithMotoblur,
//         this.apiPhoneIdMotorolaXoom,
//         this.apiPhoneIdMotorolaXoomWithWifi,
//         this.apiPhoneIdNexusS,
//         this.apiPhoneIdSamsungGalaxyTab,
//         this.apiPhoneIdSamsungGem,
//         this.apiPhoneIdSamsungMesmerizeAGalaxySPhone,
//         this.apiPhoneIdSamsungShowcaseAGalaxySPhone,
//         this.apiPhoneIdSamsungTransform,
//         this.apiPhoneIdSanyoZio,
//         this.apiPhoneIdTMobileG2,
//         this.apiPhoneIdTMobileMytouch4G

//     ]
    
//     getJSONList(){
//         console.log(this.detailJSONList);
//     }

//     constructor(
//         private http: HttpClient
//       ) { }

    
      
// }