import { company, address } from 'faker';
import { Location } from '../common';

export class Company {
  constructor(
    public companyName?: string,
    public catchPhrase?: string,
    public location?: Location,
  ) {
    this.companyName = company.companyName();
    this.catchPhrase = company.catchPhrase();
    this.location = {
      lat: parseFloat(address.latitude()),
      long: parseFloat(address.longitude()),
    };
  }
}
