import conf from "../conf/conf";

import { Client, Account, ID } from "appwrite";


export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    console.log(email, password, name, ID.unique());
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      console.log("account created success");
      if (userAccount) {
        //   Call another Method
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw ("I am here appwrit:: auth :: login", error);
    }
  }

  async getcurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("App write service :: getCurrentUser :: error", error);
    }

    return null;
  }

  async logout() {
    try {
      return this.account.deleteSessions();
    } catch (error) {
      console.log("App write service :: Logout :: error", error);
    }
  }
}

const authService = new AuthService();
export default authService;






