import { openDB } from 'idb';
import bcrypt from 'bcryptjs';

const dbPromise = openDB('UserDB', 1, {
  upgrade(db) {
    db.createObjectStore('users', { keyPath: 'email' });
  },
});

export const registerUser = async (email: string, password: string): Promise<boolean> => {
  const hashedPassword = await bcrypt.hash(password, 10);
  
  try {
    const db = await dbPromise;
    await db.add('users', { email, password: hashedPassword });
    return true;
  } catch (error) {
    console.error('Error registering user:', error);
    return false;
  }
};

export const loginUser = async (email: string, password: string): Promise<boolean> => {
  try {
    const db = await dbPromise;
    const user = await db.get('users', email);
    
    if (user && await bcrypt.compare(password, user.password)) {
      return true;
    }
    
    return false;
  } catch (error) {
    console.error('Error logging in user:', error);
    return false;
  }
};