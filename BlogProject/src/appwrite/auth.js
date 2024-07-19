import conf from "../conf/conf";
import {Client,Account,ID} from "appwrite";

export class AuthService {
   client = new Client()
   //account = new Account(client)
   account; //Here,account is taken as a variable,because we have to do setEndpoint,setProject for Client()

   constructor(){
      this.client
          .setEndpoint(conf.appwriteUrl)
          .setProject(conf.appwriteProjectId);
      this.account = new Account(this.client);
   }

   //To avoid dependency of Appwrite when we want to change it
   //Creating a method to call Appwrite services(creating a wrapper)
   async createAccount({email,password,name}){
      try{
         const userAccount = await this.account.create(ID.unique(),email,password,name);

         if(userAccount){
            //Call another method
            return this.login({email,password});
         }
         else{
            return userAccount;
         }
      }catch(error){
         throw error;
      }
   }

   async login({email,password}){
      try{
         return await this.account.createEmailPasswordSession(email,password);
      }catch(error){
         throw error;
      }
   }

   async getCurrentUser(){
      try{
         return await this.account.get();
      }catch(error){
         console.log("Appwrite service :: getCurrentUser :: error",error);
      }
      return null;//To return null when there is an error in try catch
   }

   async logout(){
      try{
         //For deleting all sessions
         await this.account.deleteSessions();
      }catch(error){
         console.log("Appwrite service :: logout :: error",error);
      }
   }

}

const authService = new AuthService(); //authService is an object

export default AuthService