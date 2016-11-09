# Morfeo

Simple Express js Backend Example that serve files from disk.

### Usage

Set the `MORFEO_PATH` environment variable to the directory you want to serve

```bash
export MORFEO_PATH=/tmp/morfeo
```

or alternatively just edit the config.json file accordingly

```json
//config.json
...
config.morfeo.path = process.env.MORFEO_PATH || '/tmp/morfeo';
...
```

and then just run the project like any other Exrepss js project