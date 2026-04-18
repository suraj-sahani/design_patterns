import type { BaseRecord, Database } from "../lib/types";

// Basic Factory Pattern of creating a db instance
export function createDatabase<T extends BaseRecord>() {
  class InMemoryDatabase implements Database<T> {
    private db: Record<string, T> = {};

    public get(id: string) {
      return this.db[id];
    }

    public set(newValue: T) {
      this.db[newValue.id] = newValue;
    }
  }

  return InMemoryDatabase;
}
