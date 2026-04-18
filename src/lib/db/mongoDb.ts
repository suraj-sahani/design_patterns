import { Db, MongoClient } from "mongodb";

export class MongoDB {
  private client: MongoClient;
  private db!: Db | null;

  constructor() {
    this.client = new MongoClient(
      process.env.MONGO_URI || "mongodb://localhost:27017",
    );
  }

  async connect() {
    await this.client.connect();
    this.db = this.client.db("your_database");
  }

  async close() {
    await this.client.close();
  }
}
