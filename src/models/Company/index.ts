import { company, address } from 'faker';
import { Location, Mappable } from '../common';

export class Company implements Mappable {
  public companyName: string;
  public location: Location;

  constructor(public catchPhrase?: string) {
    this.companyName = company.companyName();
    this.catchPhrase = company.catchPhrase();
    this.location = {
      lat: parseFloat(address.latitude()),
      lng: parseFloat(address.longitude()),
    };
  }

  markerContent(): string {
    return `
      <div>
        <h1>Company name is ${this.companyName}</h1>
        <h3>Catchpharase is ${this.catchPhrase}</h3>
      </div>
    `;
  }
}
