export interface Gear {
  id: number;
  name: string;
  description: string;
  image: string;
}

export interface Location {
  id: number;
  name: string;
  description: string;
  image: string;
}

export interface Data {
  gears: Gear[];
  locations: Location[];
}
