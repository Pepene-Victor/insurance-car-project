export class Owners{
  private _id?: number;
  private _firstName: string;
  private _lastName: string;
  private _cnp: bigint;
  private _birtDate: Date;
  private _gender: string;

  constructor(firstName : string, lastName : string, cnp : bigint, birthDate : Date, gender : string) {
    this._firstName=firstName;
    this._lastName=lastName;
    this._cnp=cnp;
    this._birtDate=birthDate;
    this._gender=gender;
  }
  get firstName(){ return this._firstName};
  set firstName(firstName: string ){ this._firstName = firstName};
  get lastName(){ return this._lastName};
  set lastName(lastName: string ){ this._lastName = lastName};
  get cnp(){ return this._cnp};
  set cnp(cnp: bigint ){ this._cnp=cnp};
  get birtDate(){ return this._birtDate};
  set birtDate(birthDate: Date ){ this._birtDate=birthDate};
  get gender(){ return this._gender};
  set gender(gender: string ){ this._gender=gender};
  get id(){
    return this._id;
  }
  set id(newId){
    this._id = newId;
  }


}
