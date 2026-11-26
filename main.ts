const fs = require("node:fs");

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", "I'm out of office until Monday; please " + "treat my absence as the urgent matter it has clearly become.");
