import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
      const heroes = [
{id:0,name :'Harpreet'},
  {    id:1 , name : 'Dhoni'} ,
  {    id:2 , name : 'Virat'} ,
  {    id:3 , name : 'Bumrah'} ,
  {    id:4 , name : 'Jadeja'} ,
  {    id:5 , name : 'Yuvraj'} ,
  {    id:6 , name : 'Sachin'} ,
  {    id:7 , name : 'Ganguly'} ,
  {    id:8 , name : 'Dravid'} ,
  {    id:9 , name : 'Patel'} ,
   {   id:10 , name : 'Ishant'} ,

 
];
return{heroes};
  }}
