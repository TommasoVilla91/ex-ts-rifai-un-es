export type Chef = {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    birthDate: string;
    image: string;
    bloodGroup: string;
    height: number;
    weight: number;
    eyeColor: string;
    hair: {
        color: string;
        type: string;
    };
    ip: string;
    address: {
        address: string;
        city: string;
        state: string;
        stateCode: string;
        postalCode: string;
        coordinates: {
            lat: number;
            lng: number;
        };
        country: string;
    };
    macAddress: string;
    university: string;
    bank: {
        cardExpire: string;
        cardNumber: string;
        cardType: string;
        currency: string;
        iban: string;
    }
    company: {
        department: string;
        name: string;
        title: string;
        address: {
            address: string;
            city: string;
            state: string;
            stateCode: string;
            postalCode: string;
            coordinates: {
                lat: number;
                lng: number;
            };
            country: string;
        };
    };
    ein: string;
    ssn: string;
    userAgent: string;
    crypto: {
        coin: string;
        wallet: string;
        network: string;
    };
    role: string;
}

export function isChef(result: unknown): result is Chef {
    if(
        result && typeof result === 'object' &&
        'id' in result && typeof result.id === 'number' &&
        'firstName' in result && typeof result.firstName === 'string' &&
        'lastName' in result && typeof result.lastName === 'string' &&
        'maidenName' in result && typeof result.maidenName === 'string' &&
        'age' in result && typeof result.age === 'number' &&
        "gender" in result && typeof result.gender === 'string' &&
        'email' in result && typeof result.email === 'string' &&
        'phone' in result && typeof result.phone === 'string' &&
        'username' in result && typeof result.username === 'string' &&
        'password' in result && typeof result.password === 'string' &&
        'birthDate' in result && typeof result.birthDate === 'string' &&
        'image' in result && typeof result.image === 'string' &&
        'bloodGroup' in result && typeof result.bloodGroup === 'string' &&
        'height' in result && typeof result.height === 'number' &&
        'weight' in result && typeof result.weight === 'number' &&
        'eyeColor' in result && typeof result.eyeColor === 'string' &&
        'hair' in result && typeof result.hair === 'object' &&
        result.hair && 'color' in result.hair && typeof result.hair.color === 'string' &&
        'type' in result.hair && typeof result.hair.type === 'string' &&
        'ip' in result && typeof result.ip === 'string' &&
        'address' in result && typeof result.address === 'object' &&
        result.address && 'address' in result.address && typeof result.address.address === 'string' &&
        'city' in result.address && typeof result.address.city === 'string' &&
        'state' in result.address && typeof result.address.state === 'string' &&
        'stateCode' in result.address && typeof result.address.stateCode === 'string' &&
        'postalCode' in result.address && typeof result.address.postalCode === 'string' &&
        'coordinates' in result.address && typeof result.address.coordinates === 'object' &&
        result.address.coordinates && 'lat' in result.address.coordinates && typeof result.address.coordinates.lat === 'number' &&
        'lng' in result.address.coordinates && typeof result.address.coordinates.lng === 'number' &&
        'country' in result.address && typeof result.address.country === 'string' &&
        'macAddress' in result && typeof result.macAddress === 'string' &&
        'university' in result && typeof result.university === 'string' &&
        'bank' in result && typeof result.bank === 'object' &&
        result.bank && 'cardExpire' in result.bank && typeof result.bank.cardExpire === 'string' &&
        'cardNumber' in result.bank && typeof result.bank.cardNumber === 'string' &&
        'cardType' in result.bank && typeof result.bank.cardType === 'string' &&
        'currency' in result.bank && typeof result.bank.currency === 'string' &&
        'iban' in result.bank && typeof result.bank.iban === 'string' &&
        'company' in result && typeof result.company === 'object' &&
        result.company && 'department' in result.company && typeof result.company.department === 'string' &&
        'name' in result.company && typeof result.company.name === 'string' &&
        'title' in result.company && typeof result.company.title === 'string' &&
        'address' in result.company && typeof result.company.address === 'object' &&
        result.company.address && 'address' in result.company.address && typeof result.company.address.address === 'string' &&
        'city' in result.company.address && typeof result.company.address.city === 'string' &&
        'state' in result.company.address && typeof result.company.address.state === 'string' &&
        'stateCode' in result.company.address && typeof result.company.address.stateCode === 'string' &&
        'postalCode' in result.company.address && typeof result.company.address.postalCode === 'string' &&
        'coordinates' in result.company.address && typeof result.company.address.coordinates === 'object' &&
        result.company.address.coordinates && 'lat' in result.company.address.coordinates && typeof result.company.address.coordinates.lat === 'number' &&
        'lng' in result.company.address.coordinates && typeof result.company.address.coordinates.lng === 'number' &&
        'country' in result.company.address && typeof result.company.address.country === 'string' &&
        'ein' in result && typeof result.ein === 'string' &&
        'ssn' in result && typeof result.ssn === 'string' &&
        'userAgent' in result && typeof result.userAgent === 'string' &&
        'crypto' in result && typeof result.crypto === 'object' &&
        result.crypto && 'coin' in result.crypto && typeof result.crypto.coin === 'string' &&
        'wallet' in result.crypto && typeof result.crypto.wallet === 'string' &&
        'network' in result.crypto && typeof result.crypto.network === 'string' &&
        'role' in result && typeof result.role === 'string'
    ){
        return true;
    }
    return false;
}