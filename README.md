# Angular Google Maps Integration Demo

This project demonstrates the implementation of Google Maps in an Angular application using the `@babluroy/agm-core` package. The project is built with Angular 19.2.0 and showcases various features of the Google Maps integration.

## Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- Angular CLI (v19.2.14)
- Google Maps API Key

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd angular-app-v19
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your Google Maps API key:
```
GOOGLE_MAPS_API_KEY=your_api_key_here
```

## Project Structure

The project follows Angular's standard structure with additional configuration for Google Maps integration:

```
src/
├── app/
│   ├── components/
│   │   └── map/           # Map-related components
│   │   └── services/
│   │   └── map.service.ts # Map service for handling map operations
│   └── app.module.ts      # Main application module
├── environments/
│   ├── environment.ts
│   ├── environment.prod.ts
│   ├── environment.staging.ts
│   └── environment.local.ts
└── assets/
    └── styles/
        └── map.scss       # Map-specific styles
```

## Features

This demo showcases the following features of `@babluroy/agm-core`:

1. Basic Map Integration
   - Map initialization
   - Custom map styles
   - Map controls configuration

2. Advanced Features
   - Custom markers
   - Info windows
   - Polylines and polygons
   - Clustering
   - Heatmaps

3. Event Handling
   - Click events
   - Drag events
   - Zoom events

## Usage

### Basic Map Setup

```typescript
import { AgmCoreModule } from '@babluroy/agm-core';

@NgModule({
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ]
})
export class AppModule { }
```

### Component Implementation

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  template: `
    <agm-map
      [latitude]="lat"
      [longitude]="lng"
      [zoom]="zoom"
      (mapClick)="onMapClick($event)">
    </agm-map>
  `
})
export class MapComponent {
  lat = 51.678418;
  lng = 7.809007;
  zoom = 8;

  onMapClick(event: any) {
    console.log('Map clicked:', event);
  }
}
```

## Environment Configuration

The project supports multiple environments:

- Development: `ng serve`
- Production: `ng build --configuration production`
- Staging: `ng build --configuration staging`
- Local: `ng build --configuration local`

## Running the Application

1. Development server:
```bash
npm start
```

2. Build for production:
```bash
npm run build
```

## Additional Resources

- [@babluroy/agm-core Documentation](https://www.npmjs.com/package/@babluroy/agm-core)
- [Google Maps JavaScript API Documentation](https://developers.google.com/maps/documentation/javascript/overview)
- [Angular Documentation](https://angular.io/docs)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please open an issue in the GitHub repository or contact the maintainers.
