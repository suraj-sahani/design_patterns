import { MongoDB } from "../lib/db/mongoDb";
import { MySQLDB } from "../lib/db/mysql";
import { PostgresDB } from "../lib/db/postgreSQL";

type DBTypeMap = {
  postgreSQL: PostgresDB;
  mongoDB: MongoDB;
  mySQL: MySQLDB;
};

class DatabaseFactory {
  public static createDb<T extends keyof DBTypeMap>(type: T): DBTypeMap[T] {
    switch (type) {
      case "postgreSQL": {
        return new PostgresDB() as DBTypeMap[T];
      }
      case "mongoDB": {
        return new MongoDB() as DBTypeMap[T];
      }
      case "mySQL": {
        return new MySQLDB() as DBTypeMap[T];
      }
      default:
        throw new Error(`Unsupported DB type: ${type}`);
    }
  }
}

const pgPool = DatabaseFactory.createDb("postgreSQL");
const mongoDb = DatabaseFactory.createDb("mongoDB");
const mySQL = DatabaseFactory.createDb("mySQL");
