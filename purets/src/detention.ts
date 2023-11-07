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
