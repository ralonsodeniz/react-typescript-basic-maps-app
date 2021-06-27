import { Mappable } from '../common';

export class Map {
  private readonly googleMap: google.maps.Map;
  constructor(
    private mapElement: Element,
    private mapOptions: google.maps.MapOptions,
  ) {
    this.googleMap = new google.maps.Map<Element>(mapElement, mapOptions);
  }

  addMarker(source: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: source.location.lat,
        lng: source.location.lng,
      },
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: source.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
