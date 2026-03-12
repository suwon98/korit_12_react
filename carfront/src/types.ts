export type CarResponse = {
  brand: string;
  model: string;
  color: string;
  registrationNumbere: string;
  modelYear: number;
  price: number;
  _links: {
    self: {
      href: string;
    }, 
    car: {
      href: string;
    }, 
    owner: {
      href: string;
    }
  }
}