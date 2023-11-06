interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  // startTrial: () => string;
  startTrial(): string;
  getCoupon(couponName: string, value: number): number;
}

interface User {
  githubToken: string;
}

interface Admin extends User {
  role: 'admin' | 'ta' | 'learner';
}

const john: Admin = {
  dbId: 22,
  email: 'john@example.com',
  userId: 2211,
  role: 'admin',
  githubToken: 'github',
  startTrial: () => {
    return 'trial started';
  },
  getCoupon(name: 'john10', off: 10) {
    return 10;
  },
};

export {};
