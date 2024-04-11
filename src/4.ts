class Key {
  constructor(protected signature: number) {
    this.signature = Math.random();
  }

  public getSignature(): number {
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
  ) {}

  public comeIn(tenant: Person): void {
    if (this.door === true) {
      this.tenants.push(tenant);
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
const key = new Key(55);

const house = new MyHouse(false, key, []);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
