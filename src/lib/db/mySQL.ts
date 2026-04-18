import mysql from "mysql2/promise";

export class MySQLDB {
  private pool: mysql.Pool;

  constructor() {
    this.pool = mysql.createPool({
      uri:
        process.env.MYSQL_URI ||
        "mysql://root:password@localhost:3306/my_database",
    });
  }

  async connect() {
    await this.pool.connect();
  }

  async close() {
    await this.pool.end();
  }

  async query<T>(query: string, params?: any[]): Promise<T> {
    const [rows] = await this.pool.query(query, params);
    return rows as T;
  }
}
