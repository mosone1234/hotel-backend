const dotenv = require("dotenv");
const fs = require("fs");

if (process.env.NODE_ENV === "production") {
  const envConfig = dotenv.parse(fs.readFileSync(".env.production"));
  for (const k in envConfig) {
    process.env[k] = envConfig[k];
  }
}

if (process.env.NODE_ENV === "development") {
  const envConfig = dotenv.parse(fs.readFileSync(".env.development"));
  for (const k in envConfig) {
    process.env[k] = envConfig[k];
  }
}
