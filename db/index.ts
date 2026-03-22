export function getDatabaseConfig() {
  return {
    url: process.env.DATABASE_URL ?? 'postgresql://postgres:postgres@localhost:5432/fitfin'
  };
}
