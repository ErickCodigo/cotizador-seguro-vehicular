export interface PolicyholderGeolocation {
    lat: string;
    lng: string;
}

export interface PolicyholderAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: PolicyholderGeolocation;
}

export interface PolicyholderCompany {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface Policyholder {
    id: number;
    name: string;
    username: string;
    email: string;
    address: PolicyholderAddress;
    phone: string;
    website: string;
    company: PolicyholderCompany;
    dni: string;
}

export interface PolicyholderToUpdate {
    name?:string;
    phone?:string;
}
