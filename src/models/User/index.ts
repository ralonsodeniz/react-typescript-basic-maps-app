import { name as fakerName, address as fakerAddress } from 'faker';
import { Location, Mappable } from '../common';

export class User implements Mappable { // this way we tell User that it has to satisfy at least Mappable interface requirements
  protected name: string;
  public location: Location;

  constructor() {
    this.name = fakerName.firstName();
    this.location = {
      lat: parseFloat(fakerAddress.latitude()),
      lng: parseFloat(fakerAddress.longitude()),
    };
  }

  markerContent(): string {
    return `User name is ${this.name}`;
  }
}
