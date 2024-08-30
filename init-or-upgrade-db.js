#!/usr/bin/env node
import { fileURLToPath } from "url";
import postgres from "postgres";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sql = postgres(
    process.env.POSTGRES_URL || "postgres://postgres:password@localhost:5432/postgres",
    {
        onnotice: () => {}
    }
);

await sql.file(path.resolve(__dirname, "./sqls/init.sql")).simple();

await sql.end();

