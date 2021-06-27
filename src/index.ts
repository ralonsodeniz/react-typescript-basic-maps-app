import { User } from './models/User';
import { Company } from './models/Company';
import { Map } from './models/Map';

const user = new User();
const company = new Company();
const mapElement = document.getElementById('map');
const mapOptions = {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0,
  },
};
const map = new Map(mapElement, mapOptions);
map.addMarker(user);
map.addMarker(company);

