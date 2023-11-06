interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  // startTrial: () => string;
  startTrial(): string;
  getCoupon(couponName: string, value: number): number;
}

const john: User = {
  dbId: 22,
  email: 'john@example.com',
  userId: 2211,
  startTrial: () => {
    return 'trial started';
  },
  getCoupon(name: 'john10', off: 10) {
    return 10;
  },
};

export {};
