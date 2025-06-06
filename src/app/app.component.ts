import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { 
  AgmCoreModule, 
  AgmMap, 
  AgmMarker,
  AgmPolygon,
  AgmInfoWindow,
  MapsAPILoader,
} from '@babluroy/agm-core';
import { AgmDrawingManager } from '@babluroy/agm-drawing';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgFor,
    AgmMap,
    AgmMarker,
    AgmPolygon,
    AgmInfoWindow,
    AgmDrawingManager
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: MapsAPILoader,
      useValue: {
        load: () => Promise.resolve()
      }
    }
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-app-v19';
  lat = 51.678418;
  lng = 7.809007;
  zoom = 8;
  apiKey = environment.googleMapsApiKey;

  // Dummy data for markers
  markers = [
    {
      lat: 51.678418,
      lng: 7.809007,
      label: 'Marker 1',
      title: 'First Location'
    },
    {
      lat: 51.678418,
      lng: 7.819007,
      label: 'Marker 2',
      title: 'Second Location'
    }
  ];

  // Dummy data for polygon
  polygon = [
    { lat: 51.678418, lng: 7.809007 },
    { lat: 51.678418, lng: 7.819007 },
    { lat: 51.688418, lng: 7.819007 },
    { lat: 51.688418, lng: 7.809007 }
  ];

  // Info window options
  infoWindowOptions = {
    maxWidth: 300,
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '15px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
  };

  drawingControlOptions = {
    drawingModes: ['polygon', 'circle', 'rectangle'],
    position: 2 // TOP_CENTER (google.maps.ControlPosition.TOP_CENTER)
  };

  onPolygonComplete(event: any) {
    console.log('Polygon completed:', event);
  }
}
