import { Pool } from "pg";

export class PostgresDB {
  private pool: Pool;

  constructor() {
    this.pool = new Pool({
      host: "localhost",
      port: 5432,
      user: "your_user",
      password: "your_password",
      database: "your_database",
    });
  }

  async connect() {
    await this.pool.connect();
  }

  async close() {
    await this.pool.end();
  }

  async query<T>(query: string, params: any[]): Promise<T> {
    const res = await this.pool.query(query, params);
    return res.rows as T;
  }
}
