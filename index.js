import fs from "fs";
import { cwd, exit } from "process";

// Input file requiredd structure (output of the elven-tools collection-nft-owners). 
// Example:
// [
//   {
//     "owner": "erd1fz05226fmg8m964pxg208v8vupvj27n642tarnu346099c7fwpzsnq5r4j",
//     "tokens": [
//       {
//         "identifier": "EAPES-8f3c1f-1ca2",
//         "metadataFileName": "7329"
//       },
//       {
//         "identifier": "EAPES-8f3c1f-1bf9",
//         "metadataFileName": "7160"
//       }
//     ],
//     "tokensCount": 2
//   }
// ]

const inputFile = `${cwd()}/nft-collection-owners.json`;

try {
  fs.accessSync(inputFile, fs.constants.R_OK | fs.constants.W_OK);
} catch(e) {
  console.log(e.message);
  console.log('\nPlease provide the nft-collection-owners.json file\n');
  exit(9);
}

const ownersFile = fs.readFileSync(inputFile, { encoding: "utf8" });
const ownersJSON = JSON.parse(ownersFile);

if (ownersJSON) {
  const CSV = ownersJSON.map((item) => {
    return item.tokens.map((token) => {
      return `${item.owner},${token.identifier},${token.metadataFileName}`;
    }).join('\r\n');
  }).join('\r\n');
  fs.writeFileSync(`${cwd()}/output.csv`, CSV);
  console.log("Saved the output to the CSV file: data/output.csv");
} else {
  console.log("There is no JSON input file!");
}
