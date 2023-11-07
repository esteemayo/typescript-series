function detectType(val: number | string) {
  if (typeof val === 'string') {
    return val.toLowerCase();
  }
  return val + 3;
}

function provideId(id: string | null) {
  if (!id) {
    console.log('Please provide ID');
    return;
  }
  return id.toLowerCase();
}

function printAll(strs: string | string[] | null) {
  if (strs) {
    if (typeof strs === 'object') {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === 'string') {
      console.log(strs);
    }
  }
}

interface IUser {
  name: string;
  email: string;
}

interface IAdmin {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdminAccount(account: IUser | IAdmin) {
  if ('isAdmin' in account) {
    return account.isAdmin;
  }
}

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet;
    return 'Fish Food';
  } else {
    pet;
    return 'Bird Food';
  }
}