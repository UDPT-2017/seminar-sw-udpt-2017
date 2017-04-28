	import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService{


	 createDb() {
	 	let worklists = [
  {id:1, name:"111111111111111"},
  {id:2, name:"222222222"},
  {id:3, name:"333333333"},
   {id:4, name:"444444444"},
    {id:5, name:"555555555"},
     {id:6, name:"666666666"},
      {id:7, name:"777777777"}

  ];
  return {worklists};
}
}