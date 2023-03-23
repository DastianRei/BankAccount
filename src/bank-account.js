//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor(monto) {
    this.activo = false;
    this.monto = monto;
  }

  open() {
    if (this.activo) {
      throw new ValueError();
    }
    this.activo = true;
    this.monto = 0;
  }

  close() {
    //throw new Error("Remove this statement and implement this function");
    if (this.activo) {
      this.activo = false;
    }
    else{
      throw new ValueError();
    }
  }

  deposit(monto) {
    //throw new Error("Remove this statement and implement this function");
    if (this.activo) {
      this.monto += monto;
    } else {
      throw new ValueError();
    }
  }

  withdraw(monto) {
    if (!this.activo) {
      throw new ValueError();
    }

    this.monto -= monto;
  }

  get balance() {
    //throw new Error("Remove this statement and implement this function");
    if (!this.activo) {
      throw new ValueError();
    }
    return this.monto;
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}
