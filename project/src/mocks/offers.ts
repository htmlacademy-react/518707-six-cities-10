import {Offer} from '../types/offer';

export const offersList: Offer[] = [
  {
    bedrooms: 4,
    city: {
      location: {
        latitude: 52.371807,
        longitude: 4.896029,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'Tempor sit labore id et. Enim laborum excepteur irure amet non qui do anim officia enim non. Sint commodo quis nisi Lorem enim Lorem nostrud exercitation tempor. Culpa ex irure ullamco Lorem voluptate nostrud magna. In exercitation et nulla consequat fugiat enim id et voluptate in sint dolore.',
    goods: ['Heating', 'Wifi'],
    host: {
      avatarUrl: 'img/avatar-max.jpg',
      id: 1,
      isPro: true,
      name: 'Max',
    },
    id: 1,
    images: ['img/apartment-01.jpg','img/apartment-02.jpg'],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 10,
    },
    maxAdults: 8,
    previewImage: 'img/apartment-01.jpg',
    price: 300,
    rating: 4.5,
    title: 'Best offer in city center',
    type: 'apartment',
  },
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.371807,
        longitude: 4.896029,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'Tempor sit labore id et. Enim laborum excepteur irure amet non qui do anim officia enim non. Sint commodo quis nisi Lorem enim Lorem nostrud exercitation tempor. Culpa ex irure ullamco Lorem voluptate nostrud magna. In exercitation et nulla consequat fugiat enim id et voluptate in sint dolore.',
    goods: ['Kitchen', 'Wifi'],
    host: {
      avatarUrl: 'img/avatar-angelina.jpg',
      id: 2,
      isPro: false,
      name: 'Angelina',
    },
    id: 2,
    images: ['img/apartment-02.jpg','img/apartment-03.jpg'],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 10,
    },
    maxAdults: 8,
    previewImage: 'img/apartment-02.jpg',
    price: 57,
    rating: 3.8,
    title: 'Cozy room',
    type: 'room',
  },
  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.371807,
        longitude: 4.896029,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'Tempor sit labore id et. Enim laborum excepteur irure amet non qui do anim officia enim non. Sint commodo quis nisi Lorem enim Lorem nostrud exercitation tempor. Culpa ex irure ullamco Lorem voluptate nostrud magna. In exercitation et nulla consequat fugiat enim id et voluptate in sint dolore.',
    goods: ['Wifi', 'Heating', 'Kitchen', 'Cable TV'],
    host: {
      avatarUrl: 'img/avatar.svg',
      id: 3,
      isPro: true,
      name: 'Alex',
    },
    id: 3,
    images: ['img/apartment-02.jpg','img/apartment-03.jpg'],
    isFavorite: true,
    isPremium: true,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 10,
    },
    maxAdults: 4,
    previewImage: 'img/apartment-01.jpg',
    price: 85,
    rating: 2.8,
    title: 'New house, perfect location',
    type: 'house',
  },
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.371807,
        longitude: 4.896029,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    description: 'Tempor sit labore id et. Enim laborum excepteur irure amet non qui do anim officia enim non. Sint commodo quis nisi Lorem enim Lorem nostrud exercitation tempor. Culpa ex irure ullamco Lorem voluptate nostrud magna. In exercitation et nulla consequat fugiat enim id et voluptate in sint dolore.',
    goods: ['Wifi'],
    host: {
      avatarUrl: 'img/avatar.svg',
      id: 4,
      isPro: true,
      name: 'Jean-Claude',
    },
    id: 4,
    images: ['img/apartment-02.jpg','img/apartment-03.jpg'],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 10,
    },
    maxAdults: 2,
    previewImage: 'img/apartment-03.jpg',
    price: 111,
    rating: 4.9,
    title: 'Famous hotel near Grote Markt',
    type: 'hotel',
  }
];
