export class EnablingRequest {

  id : number;
  processId : string;
  username : string;

  constructor(id:number, processId:string, username:string){
    this.id = id;
    this.processId = processId;
    this.username = username;
  }
}

export class MagazineRequest {

  id : number;
  processId : string;
  issn : string;
  naziv : string;

  constructor(id:number, processId:string, issn:string, naziv : string){
    this.id = id;
    this.processId = processId;
    this.issn = issn;
    this.naziv = naziv;
  }
}

export class User {
  username : string;
  password : string;

  constructor(username : string, password : string) {
    this.username = username;
    this.password = password;
  }
}
