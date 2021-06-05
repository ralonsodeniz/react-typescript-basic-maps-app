import { name as fakerName, address as fakerAddress } from 'faker';
import { Location } from '../common';

export class User {
  constructor(protected name?: string, protected location?: Location) {
    this.name = fakerName.firstName();
    this.location = {
      lat: parseFloat(fakerAddress.latitude()),
      long: parseFloat(fakerAddress.longitude()),
    };
  }
}
