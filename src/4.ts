class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  public getSignature(): number {
    return this.signature;
  }
}

class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  public getKey(): Key {
    return this.key;
  }
}

abstract class House {
  public door: boolean;
  public key: Key;
  public tenants: Person[] = [];

  constructor(key: Key) {
    this.key = key;
  }

  public comeIn(tenant: Person): void {
    if (this.door) {
      this.tenants.push(tenant);
      console.log(this.tenants);
    } else {
      alert("The door is closed");
    }
  }

  public abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
    }
  }
}
const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
