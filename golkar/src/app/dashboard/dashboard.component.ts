import { Component, OnInit,AfterViewInit, ElementRef } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import * as L from 'leaflet';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit{
  loggedInUser: string = '';
  // private map: L.Map | null = null;
  // private kabupatenMarker: L.Marker | null = null;
  // private nttMarker: L.Marker | null = null;

  constructor(public authService: AuthService , private router: Router,private elementRef: ElementRef) { }

  ngOnInit(): void {
    console.log('DashboardComponent - ngOnInit');

    const loggedInStatus = localStorage.getItem('loggedIn'); // Periksa status login dari localStorage
    console.log('loggedInStatus:', loggedInStatus);

    if (loggedInStatus === 'true') {
      this.loggedInUser = this.authService.getLoggedInUser();
      console.log('Logged in user:', this.loggedInUser);
    } else {
      this.router.navigate(['login']);
      console.log('Redirecting to login...');
    }
  }

  onLogout(): void {
    console.log('Log out...');
    this.authService.logout();
    this.router.navigate(['login']);
    console.log('Logged out.');
  }
  ngAfterViewInit(): void {
    // this.initializeMap(); 
    // // this.createLineChart();


    // const styles = `
    //   .popup{
    //     background-color: white;
    //     width: 150px;
    //     height: 90px;
    //     border-radius: 10px;
    //     margin-left:-15px;
    //     margin-right:-20px;
    //     font-family: 'Inter', sans-serif;
    //   }
    //   #judul{
    //     width: 102px;
    //     height: 12px;
    //     font-size: 10px;
    //     font-weight: 700;
    //     line-height: 12.1px;
    //     color:#000000;
    //   }
    //   hr{
    //     color:#FF0000;
    //     border:1px solid;
    //     margin-top:-3px;
    //     width: 75%;
    //   }

    //   #dpt{
    //     width: 144px;
    //     height: 12px;
    //     font-weight:500;
    //     font-size:10px;
    //     line-height:12.1px;
    //     color:#000000;
    //   }
    //   #tps{
    //   width: 137px;
    //   height: 12px;
    //   font-weight:500px;
    //   font-size:10px;
    //   line-height:12.1px;
    //   color:#000000;
    //   }
    //   #bsnpg{
    //     width: 137px;
    //     height: 12px;
    //     font-weight:500;
    //     font-size:10px;
    //     line-height:12.1px;
    //     color:#000000;
    //   }
    // `;

    // const homeButton = L.Control.extend({ 
    //   options:{ position: 'topleft' },

    //   onAdd: function (map) {
    //     const div = L.DomUtil.create('div', 'leaflet-bar');
    //     div.innerHTML = '<button style="width:50px; height: 40px"onclick="goToInitialView()">Home</button>';
    //     return div;
    //   }
    // });

    // if (this.map instanceof L.Map) {
    //   this.map.addControl(new (homeButton as any)());
    // }


    // (window as any).goToInitialView = () => {
    //   if (this.map) {
    //     if(this.kabupatenMarker) {
    //       this.kabupatenMarker.closePopup();
    //       this.map.removeLayer(this.kabupatenMarker);
    //     }

    //     if (this.nttMarker) {
    //       this.nttMarker.addTo(this.map);
    //     }
    //     this.map.setView([-2.5489, 118.0149],5);
    //   }
    // };

    

    // const styleElement = document.createElement('style');
    // styleElement.type = 'text/css';
    // styleElement.appendChild(document.createTextNode(styles));
    // document.head.appendChild(styleElement);

    // if (this.map instanceof L.Map) {
    //   this.map.on('zoomend', () => {
    //     if (this.map) {
    //       const zoomLevel = this.map.getZoom();
    //       console.log('Zoom Level:', zoomLevel);

    //       if (zoomLevel === 9) {
    //         if (this.nttMarker) {
    //           this.nttMarker.closePopup();
    //           this.map.removeLayer(this.nttMarker);
    //         }
    //         console.log('Adding kabupatenMarker to map');

    //         if (this.kabupatenMarker) {
    //           this.kabupatenMarker.addTo(this.map);
    //         }
    //       } else if (zoomLevel < 9 && zoomLevel >= 5) {
    //         if (this.kabupatenMarker) {
    //           this.kabupatenMarker.closePopup();
    //           this.map.removeLayer(this.kabupatenMarker);
    //         }

    //         if (this.nttMarker) {
    //           this.nttMarker.addTo(this.map);
    //           this.nttMarker.closePopup();
    //         }
    //       } 
    //     }
    //   });
    // }
  }

  // private initializeMap(): void {
  //   if (!this.map) {
  //     const mapElement = this.elementRef.nativeElement.querySelector('#map');

  //     if (mapElement) {
  //       this.map = L.map(mapElement).setView([-2.5489, 118.0149], 5);

  //       L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //         detectRetina: false
  //       }).addTo(this.map);

  //       //Menambahkan polygon batas wilayah Indonesia dari GeoJSON
  //       fetch('../../assets/indonesia-prov.geojson')
  //         .then(response => response.json())
  //         .then(data => {
  //           if (this.map) {
  //             L.geoJSON(data, {
  //               style: {
  //                 color: 'red',
  //                 weight: 1,
  //                 fillOpacity: 0,
  //               }
  //             }).addTo(this.map);
  //           }
  //         })
  //         .catch(error => {
  //           console.error('Error loading GeoJSON:', error);
  //         });

          

  //       // Marker NTT
  //       const nttLocation = L.latLng(-8.881,121.564);
  //       const redIconNtt = new L.Icon({
  //         iconUrl: '../../assets/marker.png',
  //         iconSize: [33.5, 41.14],
  //         iconAnchor: [17, 50],
  //         popupAnchor: [-2, -50],
  //       });

  //       const nttMarker = L.marker(nttLocation, { icon: redIconNtt }).addTo (this.map);
  //       this.nttMarker = nttMarker;

  //         const mapRef = this.map;
  //         if (mapRef && this.nttMarker) {
  //           (nttMarker as any).on('click', () => {
  //           mapRef.flyTo(nttLocation, 9, { 
  //               animate: true,
  //               duration: 2,
  //             });
  //             mapRef.once('zoomend',() =>{
  //               if (this.nttMarker){
  //                 this.nttMarker.remove();
  //               }
  //               if (mapRef.getZoom() === 9) {
  //                 if (this.kabupatenMarker) {
  //                   this.kabupatenMarker.addTo(mapRef);
  //                 }
  //               }

  //               // menambahkan marker kabupaten
  //               const kabupatenLocation = L.latLng(-8.8420,121.6478);
  //               const redIconKabupaten = new L.Icon({
  //                 iconUrl: '../../assets/markerKuning.png',
  //                 iconSize: [33.5, 41.14],
  //                 iconAnchor: [20, 45],
  //                 popupAnchor: [0, -50],
  //               });
  //               const kabupatenMarker = L.marker(kabupatenLocation, { icon: redIconKabupaten }).addTo(mapRef);
  //               this.kabupatenMarker = kabupatenMarker;

  //               // Popup informasi kabupaten
  //               const popupContentKabupaten = `
  //                 <div class="popup">
  //                   <span id="judul">Kabupaten</span>
                    
  //                 </div>
  //               `;

  //                 kabupatenMarker.bindPopup(popupContentKabupaten, {
  //                   closeButton: false
  //                 });
  
  //                 kabupatenMarker.on('click', () => {
  //                   // Tindakan saat marker kabupaten diklik
  //                   // Misalnya, navigasi ke halaman detail kabupaten
  //                 });
  
  //                 kabupatenMarker.on('mouseover', () => {
  //                   kabupatenMarker.openPopup();
  //                 });
  
  //                 kabupatenMarker.on('mouseout', () => {
  //                   kabupatenMarker.closePopup();
  //                 });    
  //             });
  //           });
  //         };

  //       nttMarker.on('mouseover', () => {
  //         nttMarker.openPopup();
  //       });

  //       nttMarker.on('mouseout', () => {
  //         nttMarker.closePopup();
  //       });

  //       //popup informasi NTT
  //       const popupContentNtt =`
  //         <div class="popup">
  //           <span id="judul">Provinsi Nusa Tenggara Timur</span>
  //           <hr>
  //           <span id="dpt">Total DPT: 1.000.000</span><br>
  //           <span id="tps">Total TPS: 100.000</span><br>
  //           <span id="bsnpg">Total BSNPG: 10.000</span>
  //         </div>
  //       `;
      
  //       nttMarker.bindPopup(popupContentNtt, {
  //         closeButton: false
  //       });

  //       // Marker Jawa Timur
  //       const jatimLocation = L.latLng(-7.849,112.621);
  //       const redIconJatim = new L.Icon({
  //         iconUrl: '../../assets/marker.png',
  //         iconSize: [33.5, 41.14],
  //         iconAnchor: [28, 45],
  //         popupAnchor: [-10, -45],
  //       });

  //       const jatimMarker = L.marker(jatimLocation, { icon: redIconJatim }).addTo(this.map);

  //       (jatimMarker as any).on('click', () => {
  //         if (this.map) {
  //           this.map.flyTo(jatimLocation, 9, { //
  //             animate: true,
  //             duration: 2
  //           });
  //         }
  //       });

  //       jatimMarker.on('mouseover', () => {
  //         jatimMarker.openPopup();
  //       });

  //       jatimMarker.on('mouseout', () => {
  //         jatimMarker.closePopup();
  //       });

  //       //popup informasi Jawa Timur
  //       const popupContentJatim =`
  //         <div class="popup">
  //           <span id="judul">Provinsi Jawa Timur</span>
  //           <hr>
  //           <span id="dpt">Total DPT: 1.000.000</span><br>
  //           <span id="tps">Total TPS: 100.000</span><br>
  //           <span id="bsnpg">Total BSNPG: 10.000</span>
  //         </div>
  //       `;
      
  //       jatimMarker.bindPopup(popupContentJatim, {
  //         closeButton: false
  //       });

  //       // Marker Papua Barat
  //       const papbarLocation = L.latLng(-2.118,133.759);
  //       const redIconPapbar = new L.Icon({
  //         iconUrl: '../../assets/marker.png',
  //         iconSize: [33.5, 41.14],
  //         iconAnchor: [20, 43],
  //         popupAnchor: [-2, -45],
  //       });

  //       const papbarMarker = L.marker(papbarLocation, { icon: redIconPapbar }).addTo(this.map);

  //       (papbarMarker as any).on('click', () => {
  //         if (this.map) {
  //           this.map.flyTo(papbarLocation, 9, { //
  //             animate: true,
  //             duration: 2
  //           });
  //         }
  //       });

  //       papbarMarker.on('mouseover', () => {
  //         papbarMarker.openPopup();
  //       });

  //       papbarMarker.on('mouseout', () => {
  //           papbarMarker.closePopup();
  //         });

  //       //popup informasi Papua Barat
  //       const popupContentPapbar =`
  //         <div class="popup">
  //           <span id="judul">Provinsi Papua barat</span>
  //           <hr>
  //           <span id="dpt">Total DPT: 1.000.000</span><br>
  //           <span id="tps">Total TPS: 100.000</span><br>
  //           <span id="bsnpg">Total BSNPG: 10.000</span>
  //         </div>
  //       `;
      
  //       papbarMarker.bindPopup(popupContentPapbar, {
  //         closeButton: false
  //       });

  //       // Marker Papua Selatan
  //       const papselLocation = L.latLng(-7.326,139.417);
  //       const redIconPapsel = new L.Icon({
  //         iconUrl: '../../assets/marker.png',
  //         iconSize: [33.5, 41.14],
  //         iconAnchor: [18, 45],
  //         popupAnchor: [-2, -45],
  //       });

  //       const papselMarker = L.marker(papselLocation, { icon: redIconPapsel }).addTo(this.map);

  //       (papselMarker as any).on('click', () => {
  //         if (this.map) {
  //           this.map.flyTo(papselLocation, 9, { //
  //             animate: true,
  //             duration: 2
  //           });
  //         }
  //       });

  //       papselMarker.on('mouseover', () => {
  //         papselMarker.openPopup();
  //       });

  //       papselMarker.on('mouseout', () => {
  //         papselMarker.closePopup();
  //       });

  //       //popup informasi Papua Selatan
  //       const popupContentPapsel =`
  //         <div class="popup">
  //           <span id="judul">Provinsi Papua Selatan</span>
  //           <hr>
  //           <span id="dpt">Total DPT: 1.000.000</span><br>
  //           <span id="tps">Total TPS: 100.000</span><br>
  //           <span id="bsnpg">Total BSNPG: 10.000</span>
  //         </div>
  //       `;
      
  //       papselMarker.bindPopup(popupContentPapsel, {
  //         closeButton: false
  //       });

  //       // Marker Maluku Utara
  //       const malutLocation = L.latLng(0.451,127.804);
  //       const redIconMalut = new L.Icon({
  //         iconUrl: '../../assets/marker.png',
  //         iconSize: [33.5, 41.14],
  //         iconAnchor: [17, 50],
  //         popupAnchor: [-2, -50],
  //       });

  //       const malutMarker = L.marker(malutLocation, { icon: redIconMalut }).addTo(this.map);

  //       (malutMarker as any).on('click', () => {
  //         if (this.map) {
  //           this.map.flyTo(malutLocation, 9, { //
  //             animate: true,
  //             duration: 2
  //           });
  //         }
  //       });

  //       malutMarker.on('mouseover', () => {
  //         malutMarker.openPopup();
  //       });

  //       malutMarker.on('mouseout', () => {
  //         malutMarker.closePopup();
  //       });

  //       //popup informasi Maluku Utara
  //       const popupContentMalut =`
  //         <div class="popup">
  //           <span id="judul">Provinsi Maluku Utara</span>
  //           <hr>
  //           <span id="dpt">Total DPT: 1.000.000</span><br>
  //           <span id="tps">Total TPS: 100.000</span><br>
  //           <span id="bsnpg">Total BSNPG: 10.000</span>
  //         </div>
  //       `;
      
  //       malutMarker.bindPopup(popupContentMalut, {
  //         closeButton: false
  //       });

  //       // Marker Sulawesi Tengah
  //       const sultengahLocation = L.latLng(-0.999,121.915);
  //       const redIconSultengah = new L.Icon({
  //         iconUrl: '../../assets/marker.png',
  //         iconSize: [33.5, 41.14],
  //         iconAnchor: [17, 52],
  //         popupAnchor: [0, -50],
  //       });

  //       const sultengahMarker = L.marker(sultengahLocation, { icon: redIconSultengah }).addTo(this.map);

  //       (sultengahMarker as any).on('click', () => {
  //         if (this.map) {
  //           this.map.flyTo(sultengahLocation, 9, { //
  //             animate: true,
  //             duration: 2
  //           });
  //         }
  //       });

  //       sultengahMarker.on('mouseover', () => {
  //         sultengahMarker.openPopup();
  //       });

  //       sultengahMarker.on('mouseout', () => {
  //         sultengahMarker.closePopup();
  //       });

  //       //popup informasi Sulawesi Tengah
  //       const popupContentSultengah =`
  //         <div class="popup">
  //           <span id="judul">Provinsi Sulawesi Tengah</span>
  //           <hr>
  //           <span id="dpt">Total DPT: 1.000.000</span><br>
  //           <span id="tps">Total TPS: 100.000</span><br>
  //           <span id="bsnpg">Total BSNPG: 10.000</span>
  //         </div>
  //       `;
        
  //             sultengahMarker.bindPopup(popupContentSultengah, {
  //               closeButton: false
  //             });


  //       // marker Kalimantan Timur
  //       const kalimantanTimurLocation = L.latLng(0.081,116.938);
  //       const redIconKaltim = new L.Icon({
  //         iconUrl: '../../assets/marker.png',
  //         iconSize: [33.5, 41.14],
  //         iconAnchor: [17, 50],
  //         popupAnchor: [0, -50],
  //       });

  //       const kalimantanTimurMarker = L.marker(kalimantanTimurLocation, { icon: redIconKaltim }).addTo(this.map);

  //       (kalimantanTimurMarker as any).on('click', () => {
  //         if (this.map) {
  //           this.map.flyTo(kalimantanTimurLocation, 9, {
  //             animate: true,
  //             duration: 2
  //           });
  //         }
  //       });

  //       kalimantanTimurMarker.on('mouseover', () => {
  //         kalimantanTimurMarker.openPopup();
  //       });

  //       kalimantanTimurMarker.on('mouseout',() => {
  //         kalimantanTimurMarker.closePopup();
  //       });

  //       //popup informasi Kalimantan Timur
  //       const popupContentKalimantanTimur = `
  //         <div class="popup">
  //           <span id="judul">Provinsi Kalimantan Timur</span>
  //           <hr>
  //           <span id="dpt">Total DPT: 800.000</span><br>
  //           <span id="tps">Total TPS: 85.000</span><br>
  //           <span id="bsnpg">Total BSNPG: 8.500</span>
  //         </div>
  //       `;
  //       kalimantanTimurMarker.bindPopup(popupContentKalimantanTimur, {
  //         closeButton: false
  //       });

  //       // marker Bali
  //       const baliLocation = L.latLng(-8.305,115.170);
  //       const redIconBali = new L.Icon({
  //         iconUrl: '../../assets/marker.png',
  //         iconSize: [33.5, 41.14],
  //         iconAnchor: [17, 45],
  //         popupAnchor: [0, -45],
  //       });

  //       const baliMarker = L.marker(baliLocation, { icon: redIconBali }).addTo(this.map);

  //       (baliMarker as any).on('click', () => {
  //         if (this.map) {
  //           this.map.flyTo(baliLocation, 9, {
  //             animate: true,
  //             duration: 2
  //           });
  //         }
  //       });

  //       baliMarker.on('mouseover', () => {
  //         baliMarker.openPopup();
  //       });

  //       baliMarker.on('mouseout',() => {
  //         baliMarker.closePopup();
  //       });

  //         //popup informasi Bali
  //       const popupContentBali = `
  //         <div class="popup">
  //           <span id="judul">Provinsi Bali</span>
  //           <hr>
  //           <span id="dpt">Total DPT: 800.000</span><br>
  //           <span id="tps">Total TPS: 85.000</span><br>
  //           <span id="bsnpg">Total BSNPG: 8.500</span>
  //         </div>
  //       `;

  //       baliMarker.bindPopup(popupContentBali, {
  //         closeButton: false
  //       });

  //       // marker Jawa Tengah
  //       const jatengLocation = L.latLng(-6.936,110.435);
  //       const redIconJateng = new L.Icon({
  //         iconUrl: '../../assets/marker.png',
  //         iconSize: [33.5, 41.14],
  //         iconAnchor: [17, 30],
  //         popupAnchor: [-2, -30],
  //       });

  //       const jatengMarker = L.marker(jatengLocation, { icon: redIconJateng }).addTo(this.map);

  //       (jatengMarker as any).on('click', () => {
  //         if (this.map) {
  //           this.map.flyTo(jatengLocation, 9, {
  //             animate: true,
  //             duration: 2
  //           });
  //         }
  //       });

  //       jatengMarker.on('mouseover', () => {
  //         jatengMarker.openPopup();
  //       });

  //       jatengMarker.on('mouseout',() => {
  //         jatengMarker.closePopup();
  //       });

  //       //popup informasi Jawa Tengah
  //       const popupContentJateng = `
  //         <div class="popup">
  //           <span id="judul">Provinsi Jawa Tengah</span>
  //           <hr>
  //           <span id="dpt">Total DPT: 800.000</span><br>
  //           <span id="tps">Total TPS: 85.000</span><br>
  //           <span id="bsnpg">Total BSNPG: 8.500</span>
  //         </div>
  //       `;

  //       jatengMarker.bindPopup(popupContentJateng, {
  //         closeButton: false
  //       });

  //       // marker Sumatera Barat
  //       const sumbarLocation = L.latLng(-0.9031,100.4041);
  //       const redIconSumbar = new L.Icon({
  //         iconUrl: '../../assets/marker.png',
  //         iconSize: [33.5, 41.14],
  //         iconAnchor: [17, 40],
  //         popupAnchor: [-2, -50],
  //       });

  //       const sumbarMarker = L.marker(sumbarLocation, { icon: redIconSumbar }).addTo(this.map);

  //       (sumbarMarker as any).on('click', () => {
  //         if (this.map) {
  //           this.map.flyTo(sumbarLocation, 9, {
  //             animate: true,
  //             duration: 2
  //           });
  //         }
  //       });

  //       sumbarMarker.on('mouseover', () => {
  //         sumbarMarker.openPopup();
  //       });

  //       sumbarMarker.on('mouseout',() => {
  //         sumbarMarker.closePopup();
  //       });

  //       //popup informasi Sumatera Barat
  //       const popupContentSumbar = `
  //         <div class="popup">
  //           <span id="judul">Provinsi Sumatera Barat</span>
  //           <hr>
  //           <span id="dpt">Total DPT: 800.000</span><br>
  //           <span id="tps">Total TPS: 85.000</span><br>
  //           <span id="bsnpg">Total BSNPG: 8.500</span>
  //         </div>
  //       `;

  //       sumbarMarker.bindPopup(popupContentSumbar, {
  //         closeButton: false
  //       });

  //       // marker Sumatera Selatan
  //       const sumselLocation = L.latLng(-3.041,104.513);
  //       const redIconSumsel = new L.Icon({
  //         iconUrl: '../../assets/marker.png',
  //         iconSize: [33.5, 41.14],
  //         iconAnchor: [17, 50],
  //         popupAnchor: [-2, -50],
  //       });

  //       const sumselMarker = L.marker(sumselLocation, { icon: redIconSumsel }).addTo(this.map);

  //       (sumselMarker as any).on('click', () => {
  //         if (this.map) {
  //           this.map.flyTo(sumselLocation, 9, {
  //             animate: true,
  //             duration: 2
  //           });
  //         }
  //       });

  //       sumselMarker.on('mouseover', () => {
  //         sumselMarker.openPopup();
  //       });

  //       sumselMarker.on('mouseout',() => {
  //         sumselMarker.closePopup();
  //       });

  //       //popup informasi Sumatera Selatan
  //       const popupContentSumsel = `
  //         <div class="popup">
  //           <span id="judul">Provinsi Sumatera Selatan</span>
  //           <hr>
  //           <span id="dpt">Total DPT: 800.000</span><br>
  //           <span id="tps">Total TPS: 85.000</span><br>
  //           <span id="bsnpg">Total BSNPG: 8.500</span>
  //         </div>
  //       `;

  //       sumselMarker.bindPopup(popupContentSumsel, {
  //         closeButton: false
  //       })

  //       // Marker Kalimantan Selatan 
  //       const kalimantanSelatanLocation = L.latLng(-3.281,116.071);
  //       const yellowIconKalsel = new L.Icon({
  //         iconUrl: '../../assets/markerKuning.png',
  //         iconSize: [33.5, 41.14],
  //         iconAnchor: [17, 45],
  //         popupAnchor: [-2, -45],
  //       });

  //         const kalimantanSelatanMarker = L.marker(kalimantanSelatanLocation, {icon: yellowIconKalsel}).addTo(this.map);

  //         (kalimantanSelatanMarker as any).on('click', () => {
  //           if (this.map){
  //             this.map.flyTo(kalimantanSelatanLocation, 9, {
  //               animate: true,
  //               duration: 2
  //             });
  //           }
  //         });

  //         kalimantanSelatanMarker.on('mouseover',  () => {
  //           kalimantanSelatanMarker.openPopup();
  //         });
    
  //         kalimantanSelatanMarker.on('mouseout', () => {
  //           kalimantanSelatanMarker.closePopup();
  //         });
    
  //         //popup informasi Kalimantan Selatan
  //         const popupContentKalimantanSelatan = `
  //         <div class="popup">
  //           <span id="judul">Provinsi Kalimantan Selatan</span>
  //           <hr>
  //           <span id="dpt">Total DPT: 800.000</span><br>
  //           <span id="tps">Total TPS: 85.000</span><br>
  //           <span id="bsnpg">Total BSNPG: 8.500</span>
  //         </div>
  //       `;
  //       kalimantanSelatanMarker.bindPopup(popupContentKalimantanSelatan, {
  //         closeButton: false
  //       });

  //       // Marker Papua Tengah 
  //       const PapuaTengahLocation = L.latLng(-3.829,136.780);
  //       const yellowIconPapteng = new L.Icon({
  //         iconUrl: '../../assets/markerKuning.png',
  //         iconSize: [33.5, 41.14],
  //         iconAnchor: [20, 45],
  //         popupAnchor: [-2, -45],
  //       });

  //         const PapuaTengahMarker = L.marker(PapuaTengahLocation, {icon: yellowIconPapteng}).addTo(this.map);

  //         (PapuaTengahMarker as any).on('click', () => {
  //           if (this.map){
  //             this.map.flyTo(PapuaTengahLocation, 9, {
  //               animate: true,
  //               duration: 2
  //             });
  //           }
  //         });

  //         PapuaTengahMarker.on('mouseover',  () => {
  //           PapuaTengahMarker.openPopup();
  //         });
    
  //         PapuaTengahMarker.on('mouseout', () => {
  //           PapuaTengahMarker.closePopup();
  //         });
    
  //         //popup informasi Kalimantan Selatan
  //         const popupContentPapuaTengah = `
  //         <div class="popup">
  //           <span id="judul">Provinsi Papua Tengah</span>
  //           <hr>
  //           <span id="dpt">Total DPT: 800.000</span><br>
  //           <span id="tps">Total TPS: 85.000</span><br>
  //           <span id="bsnpg">Total BSNPG: 8.500</span>
  //         </div>
  //       `;
  //       PapuaTengahMarker.bindPopup(popupContentPapuaTengah, {
  //         closeButton: false
  //       });

  //       // Marker Maluku
  //       const malukuLocation = L.latLng(-3.622,128.183);
  //       const redIconMaluku = new L.Icon({
  //         iconUrl: '../../assets/markerKuning.png',
  //         iconSize: [33.5, 41.14],
  //         iconAnchor: [17, 50],
  //         popupAnchor: [-2, -50],
  //       });
        
  //       const malukuMarker = L.marker(malukuLocation, { icon: redIconMaluku }).addTo(this.map);
        
  //       (malukuMarker as any).on('click', () => {
  //         if (this.map) {
  //           this.map.flyTo(malukuLocation, 9, { 
  //             animate: true,
  //             duration: 2
  //           });
  //         }
  //       });
        
  //       malukuMarker.on('mouseover', () => {
  //         malukuMarker.openPopup();
  //       });
        
  //       malukuMarker.on('mouseout', () => {
  //         malukuMarker.closePopup();
  //       });
        
  //       //popup informasi Maluku
  //       const popupContentMaluku =`
  //         <div class="popup">
  //           <span id="judul">Provinsi Maluku</span>
  //           <hr>
  //           <span id="dpt">Total DPT: 1.000.000</span><br>
  //           <span id="tps">Total TPS: 100.000</span><br>
  //           <span id="bsnpg">Total BSNPG: 10.000</span>
  //         </div>
  //       `;

  //       malukuMarker.bindPopup(popupContentMaluku, {
  //         closeButton: false
  //       });

  //       // Marker Kalimantan Barat
  //       const kalbarLocation = L.latLng(-1.053,109.940);
  //       const redIconKalbar = new L.Icon({
  //         iconUrl: '../../assets/markerKuning.png',
  //         iconSize: [33.5, 41.14],
  //         iconAnchor: [17, 45],
  //         popupAnchor: [-2, -45],
  //       });
        
  //       const kalbarMarker = L.marker(kalbarLocation, { icon: redIconKalbar }).addTo(this.map);
        
  //       (kalbarMarker as any).on('click', () => {
  //         if (this.map) {
  //           this.map.flyTo(kalbarLocation, 9, { 
  //             animate: true,
  //             duration: 2
  //           });
  //         }
  //       });
        
  //       kalbarMarker.on('mouseover', () => {
  //         kalbarMarker.openPopup();
  //       });
        
  //       kalbarMarker.on('mouseout', () => {
  //         kalbarMarker.closePopup();
  //       });
        
  //       //popup informasi Kalimantan Barat
  //       const popupContentKalbar =`
  //         <div class="popup">
  //           <span id="judul">Provinsi Kalimantan Barat</span>
  //           <hr>
  //           <span id="dpt">Total DPT: 1.000.000</span><br>
  //           <span id="tps">Total TPS: 100.000</span><br>
  //           <span id="bsnpg">Total BSNPG: 10.000</span>
  //         </div>
  //       `;

  //       kalbarMarker.bindPopup(popupContentKalbar, {
  //         closeButton: false
  //       });


  //       // Marker Aceh
  //       const acehLocation = L.latLng(5.5454,95.3284);
  //       const redIconAceh = new L.Icon({
  //         iconUrl: '../../assets/markerKuning.png',
  //         iconSize: [33.5, 41.14],
  //         iconAnchor: [17, 55],
  //         popupAnchor: [-2, -60],
  //       });
        
  //       const acehMarker = L.marker(acehLocation, { icon: redIconAceh }).addTo(this.map);
        
  //       (acehMarker as any).on('click', () => {
  //         if (this.map) {
  //           this.map.flyTo(acehLocation, 9, { 
  //             animate: true,
  //             duration: 2
  //           });
  //         }
  //       });
        
  //       acehMarker.on('mouseover', () => {
  //         acehMarker.openPopup();
  //       });
        
  //       acehMarker.on('mouseout', () => {
  //         acehMarker.closePopup();
  //       });
        
  //       //popup informasi Aceh
  //       const popupContentAceh =`
  //         <div class="popup">
  //           <span id="judul">Provinsi Aceh</span>
  //           <hr>
  //           <span id="dpt">Total DPT: 1.000.000</span><br>
  //           <span id="tps">Total TPS: 100.000</span><br>
  //           <span id="bsnpg">Total BSNPG: 10.000</span>
  //         </div>
  //       `;

  //       acehMarker.bindPopup(popupContentAceh, {
  //         closeButton: false
  //       });

  //       // Marker Sumatera Utara
  //       const sumutLocation = L.latLng(1.8540,98.7836);
  //       const redIconSumut = new L.Icon({
  //         iconUrl: '../../assets/markerKuning.png',
  //         iconSize: [33.5, 41.14],
  //         iconAnchor: [17, 50],
  //         popupAnchor: [-2, -50],
  //       });
        
  //       const sumutMarker = L.marker(sumutLocation, { icon: redIconSumut }).addTo(this.map);
        
  //       (sumutMarker as any).on('click', () => {
  //         if (this.map) {
  //           this.map.flyTo(sumutLocation, 9, { 
  //             animate: true,
  //             duration: 2
  //           });
  //         }
  //       });
        
  //       sumutMarker.on('mouseover', () => {
  //         sumutMarker.openPopup();
  //       });
        
  //       sumutMarker.on('mouseout', () => {
  //         sumutMarker.closePopup();
  //       });
        
  //       //popup informasi Sumatera Utara
  //       const popupContentSumut =`
  //         <div class="popup">
  //           <span id="judul">Provinsi Sumatera Utara</span>
  //           <hr>
  //           <span id="dpt">Total DPT: 1.000.000</span><br>
  //           <span id="tps">Total TPS: 100.000</span><br>
  //           <span id="bsnpg">Total BSNPG: 10.000</span>
  //         </div>
  //       `;

  //       sumutMarker.bindPopup(popupContentSumut, {
  //         closeButton: false
  //       });
        
  //       // Marker Lampung
  //       const lampungLocation = L.latLng(-5.4162,105.2641);
  //       const redIconLampung = new L.Icon({
  //         iconUrl: '../../assets/markerKuning.png',
  //         iconSize: [33.5, 41.14],
  //         iconAnchor: [17, 55],
  //         popupAnchor: [-2, -60],
  //       });
        
  //       const lampungMarker = L.marker(lampungLocation, { icon: redIconLampung }).addTo(this.map);
        
  //       (lampungMarker as any).on('click', () => {
  //         if (this.map) {
  //           this.map.flyTo(lampungLocation, 9, { 
  //             animate: true,
  //             duration: 2
  //           });
  //         }
  //       });
        
  //       lampungMarker.on('mouseover', () => {
  //         lampungMarker.openPopup();
  //       });
        
  //       lampungMarker.on('mouseout', () => {
  //         lampungMarker.closePopup();
  //       });
        
  //       //popup informasi Lampung
  //       const popupContentLampung =`
  //         <div class="popup">
  //           <span id="judul">Provinsi Lampung</span>
  //           <hr>
  //           <span id="dpt">Total DPT: 1.000.000</span><br>
  //           <span id="tps">Total TPS: 100.000</span><br>
  //           <span id="bsnpg">Total BSNPG: 10.000</span>
  //         </div>
  //       `;

  //       lampungMarker.bindPopup(popupContentLampung, {
  //         closeButton: false
  //       });

  //       //marker sulawesi tenggara
  //       const sulawesiTenggaraLocation = L.latLng(-5.406,123.398);
  //       const greenIconSulteng = new L.Icon({
  //         iconUrl: '../../assets/markerHijau.png',
  //         iconSize: [52, 59],
  //         iconAnchor: [22, 55],
  //         popupAnchor: [2, -47],
  //       });

  //       const sulawesiTenggaraMarker = L.marker(sulawesiTenggaraLocation, {icon: greenIconSulteng}).addTo(this.map);
        
  //       (sulawesiTenggaraMarker as any).on('click', () => {
  //         if (this.map){

  //           this.map.flyTo(sulawesiTenggaraLocation, 9, {
  //             animate: true,
  //             duration: 2
  //           });
  //         }
  //       });

  //       sulawesiTenggaraMarker.on('mouseover', () => {
  //         sulawesiTenggaraMarker.openPopup();
  //       });

  //       sulawesiTenggaraMarker.on('mouseout', () => {
  //         sulawesiTenggaraMarker.closePopup();
  //       });

  //       //popup informasi sulawesi tenggara
  //       const popupContentSulteng =`
  //         <div class="popup">
  //           <span id="judul">Provinsi Sulawesi Tenggara</span>
  //           <hr>
  //           <span id="dpt">Total DPT: 1.000.000</span><br>
  //           <span id="tps">Total TPS: 100.000</span><br>
  //           <span id="bsnpg">Total BSNPG: 10.000</span>
  //         </div>
  //       `;

  //       sulawesiTenggaraMarker.bindPopup(popupContentSulteng, {
  //         closeButton: false
  //       });
  
  //     }
  //   }
  // }
  
  //chart
  // createLineChart(): void {
  //   const ctx = document.getElementById('lineChart') as HTMLCanvasElement;
  //   ctx.width = 1000;
  //   ctx.height = 300;

  //   const data = {
  //     labels: ['Januari', 'Februari', 'Maret', 'April', 'Mai', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
  //     datasets: [{
  //       data: [65, 35, 15, 90, 25, 10, 50, 90, 40, 65, 28, 55],
  //       borderColor: '#F0FF00',
  //       backgroundColor: '#F0FF00',
  //       borderWidth: 3

  //     }]
  //   };

  //   const options = {
  //     layout: {
  //       padding: {
  //         left: 50,   
  //         right: 50,  
  //         top: -30,    
  //         bottom: 20  
  //       }
  //     },
  //     scales: {
  //         y: {
  //             beginAtZero: true,
  //             min: 0,
  //             max: 100
  //         }
  //     },
  //     legend: {
  //         display: false 
  //     }
  //   };

  //   window['myLineChart'] = new Chart(ctx, {
  //     type: 'line',
  //     data: data,
  //     options: options
  //   });
  // }
}

