import {Profile} from '../../models/profile/profile.interface'

const userList:Profile[]=[
  {
    firstName:'Amit',
    lastName:'Shely',
    email:'papushe9@gmail.com',
    avatar:'assets/imgs/avatar.png',
    dateOfBirth: new Date(),
    $key: 'papushe123'
  },
  {
    firstName:'Moran',
    lastName:'Shely',
    email:'moranru111@gmail.com',
    avatar:'assets/imgs/avatar.png',
    dateOfBirth: new Date(),
    $key: 'papushe123'
  },
  {
    firstName:'Hovav',
    lastName:'Cohen',
    email:'hovavC@gmail.com',
    avatar:'assets/imgs/avatar.png',
    dateOfBirth: new Date(),
    $key: 'papushe123'
  },
  {
    firstName:'Naor',
    lastName:'Haimov',
    email:'naorhai@gmail.com',
    avatar:'assets/imgs/avatar.png',
    dateOfBirth: new Date(),
    $key: 'papushe123'
  },
]

export const USER_LIST = userList;
