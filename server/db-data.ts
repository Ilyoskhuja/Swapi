export const CARS: any = {


  17: {
    id: 17,
    description: 'Cadillac',
    iconUrl: 'https://blogapp.bitdefender.work/hotforsecurity/content/images/wordpress/2016/09/cadillac.jpeg',
    category: 'B',
    partsCount: 10,
    price: 35000

  },
  3: {
    id: 3,
    description: 'A',
    iconUrl: 'https://www.ccarprice.com/products/Tesla_Model_S_Performance_2021.jpg',
    category: 'A',
    partsCount: 10,
    price: 50000
  },

  4: {
    id: 4,
    description: 'mercedes',
    iconUrl: 'https://www.mercedes-benz.ie/passengercars/mercedes-benz-cars/a-class/range-overview/_jcr_content/swipeableteaserbox/par/swipeableteaser/asset.MQ6.12.20201207171351.jpeg',
    category: 'B',
    partsCount: 10,
    price: 50
  },


  2: {
    id: 2,
    description: 'BMW',
    iconUrl: 'https://imgd.aeplcdn.com/0x0/n/cw/ec/41406/bmw-8-series-right-front-three-quarter8.jpeg',
    partsCount: 10,
    category: 'B',
    price: 45000
  },


  5: {
    id: 5,

    description: 'Chevy',
    iconUrl: 'https://w7.pngwing.com/pngs/395/162/png-transparent-2018-chevrolet-tahoe-ls-car-general-motors-ls-based-gm-small-block-engine-chevrolet-compact-car-driving-car.png',
    category: 'A',
    partsCount: 10,
    price: 85000
  },

  12: {
    id: 12,
    description: 'mustang',
    iconUrl: 'https://cdn.motor1.com/images/mgl/myp8j/s1/2021-ford-mustang-shelby-gt500-grabber-yellow.webp',
    category: 'A',
    partsCount: 10,
    price: 55000
  },


  
};

export const PARTS = {

  1: {
    id: 1,
    'description': 'wheel',
    carId: 5
  },
  2: {
    id: 2,
    'description': 'window',
    carId: 2
  },
  3: {
    id: 3,
    'description': 'other part',
    carId: 1
  },
  4: {
    id: 4,
    'description': 'da',
    carId: 3
  },
  5: {
    id: 5,
    'description': ' ss',
    carId: 4
  },
  6: {
    id: 6,
    'description': 'ff',
    carId: 6
  },
  

};


export const USERS = {
  1: {
    id: 1,
    email: 'test@angular.io',
    password: 'test',
    pictureUrl: 'https://lh3.googleusercontent.com/-1pUNnTB3vaA/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdn4uEc0ti8YE4Uuw6_Kz04tVe2Mg.CMID/s32-c/photo.jpg'
  }

};


export function findCarsById(carId: number) {
  return CARS[carId];
}

export function findPartsForCars(carId: number) {
  return Object.values(PARTS).filter(part => part.carId == carId);
}

export function authenticate(email: string, password: string) {

  const user: any = Object.values(USERS).find(user => user.email === email);

  if (user && user.password == password) {
    return user;
  } else {
    return undefined;
  }

}
