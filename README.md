### elven-tools-collection-owners-csv

A simple script that will take the output file from `elven-tools collection-nft-owners` and produce a predefined CSV file. There is no way to change the output structure with configuration, but it is straightforward, so anyone with JavaScript knowledge can quickly modify it. It can be helpful as a base for other transformations.

#### Usage:
1. Clone the repository
2. Put your `nft-collection-owners.json` in `data` folder (there is already an example there)
3. Run the script by `npm run generate` (in the root folder)

#### The format of the output is:

- `<erd_address>,<nft_token_identifier>,<nft_token_asset_file_name>`

Addresses with multiple tokens will be displayed as additional CSV rows. See the example in `data/output.csv`. The output won't cover the number of tokens per address. You would need to count the rows with the same address.

#### Filtering the CSV output

You can add two additional filters for tokens. In default, the elven tools CLI doesn't limit the output of the tokens array. It will limit only addresses in the output JSON. The token arrays will stay the same, even if addresses were filtered by specific file names of the token assets.

Here you can filter the CSV output to show only required NFT tokens on the list. There are two flags:

- `identifiers`
- `fileNames`

Usage examples with filters: 

- `npm run generate identifiers=EAPES-8f3c1f-1c87,EAPES-8f3c1f-15d6`
- `npm run generate fileNames=7329,5589`
- `npm run generate fileNames=5589,7329 identifiers=EAPES-8f3c1f-1bf9,EAPES-8f3c1f-1c87`

---

**Check how to use the:** [elven-tools collection-nft-owners](https://www.elven.tools/docs/recipes.html#how-to-get-owners-addresses-using-the-collection-ticker)
