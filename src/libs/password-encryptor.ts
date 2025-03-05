'use server';
import bcrypt from 'bcryptjs';

const SALT_ROUNDS = 10;

export interface PasswordEncryptor {
  hash(password: string): Promise<string>;
  compare(password: string, hashedPassword: string): Promise<boolean>;
}

export class BcryptPasswordEncryptor implements PasswordEncryptor {
  private saltRounds: number;

  constructor(saltRounds: number = SALT_ROUNDS) {
    this.saltRounds = saltRounds;
  }

  async hash(password: string): Promise<string> {
    return await bcrypt.hash(password, this.saltRounds);
  }

  async compare(password: string, hashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(password, hashedPassword);
  }
}
