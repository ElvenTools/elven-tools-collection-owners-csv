### elven-tools-collection-owners-csv

A simple script that will take the output file from `elven-tools collection-nft-owners` and produce a predefined CSV file. There is no way to change the logic with configuration, but it is straightforward, so anyone with JavaScript knowledge can quickly modify it. It can be helpful as a base for other transformations.

Usage:
1. Clone the repository
2. Put your `nft-collection-owners.json` in `data` folder (there is already an example there)
3. Run the script by `npm run generate` (in the root folder)

The format of the output is:

- `<erd_address>,<nft_token_identifier>,<nft_token_asset_file_name>`

Addresses with multiple tokens will be displayed as additional CSV rows. See the example in `data/output.csv`. The output won't cover the number of tokens per address. You would need to count the rows with the same address.
