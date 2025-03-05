import {
  PasswordEncryptor,
  BcryptPasswordEncryptor,
} from '@/libs/password-encryptor';
import { MinimalUser } from '@/types/user';

class UserService {
  private passwordEncryptor: PasswordEncryptor;
  constructor(passwordEncryptor: PasswordEncryptor) {
    this.passwordEncryptor = passwordEncryptor;
  }

  async createNewUser(minimalUser: MinimalUser): Promise<void> {
    const { password, ...user } = minimalUser;
    const hashedPassword = await this.passwordEncryptor.hash(password || '');
    console.error({ hashedPassword, user });
  }
}

export const userService = new UserService(new BcryptPasswordEncryptor());
