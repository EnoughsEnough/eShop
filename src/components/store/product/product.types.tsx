export interface IRating {
    rate: number;
    count: number;
}

export interface IProducts {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: IRating;
}

export interface Geolocation {
    lat: string;
    long: string;
}

export interface IAddress {
    geolocation: Geolocation;
    city: string;
    street: string;
    number: number;
    zipcode: string;
}

export interface IName {
    firstname: string;
    lastname: string;
}

export interface IUsers {
    address: IAddress;
    id: number;
    email: string;
    username: string;
    password: string;
    name: IName;
    phone: string;
    __v: number;
}
