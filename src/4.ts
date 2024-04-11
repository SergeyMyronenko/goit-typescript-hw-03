class Key {
  constructor(protected signature: any) {
    this.signature = Math.random();
  }

  public getSignature(): any {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {
    this.key = key;
  }

  public getKey(): Key {
    return this.key;
  }
}

abstract class House {
  constructor(
    public door: boolean,
    protected key: Key,
    public tenants: Person[]
  ) {
    this.door = false;
    this.key = key;
    this.tenants = [];
  }

  public comeIn(tenant: Person): void {
    if (this.door === true) {
      this.tenants.push(tenant);
    } else {
        alert("The door is closed")
    }
  }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  constructor( key: Key) {
    super(false, key, [])
  }


  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
    }
}

const key = new Key(55);

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
