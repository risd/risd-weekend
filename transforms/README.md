# Transforms

To use, from the root of your site. 

`node transforms/index.js backup.json sample-transform transformed.json`

- `backup.json` is the relative path from the current directory to the webhook JSON data.
- `sample-transform` is the name of the module within the `transforms` directory that gets used to update the data.
- `transformed.json` is where the updated data gets written.
