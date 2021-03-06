# Jackal Configuration Guide

A Jackal Server can optionally be started with a configuration file in either JSON or YAML format. This can be used to override settings concerning the database, logging and graphing.

## JSON

If specified in JSON, the configuration file should follow the below format:

```json
{
  "db": {
    "path":         "STRING,   DEFAULT: db.json"
  },
  "logger": {
    "environment":  "STRING,   DEFAULT: development"
  },
  "statsD": {
    "host":         "STRING,   DEFAULT: localhost",
    "port":         "INTEGER,  DEFAULT: 8125",
    "prefix":       "STRING,   DEFAULT: jackal",
    "ssl (NOT REQUIRED)": {
      "key":         "STRING,   DEFAULT: null",
      "cert":        "STRING,   DEFAULT: null",
      "passphrase":  "STRING,   DEFAULT: null",
    }
  }
}
```

```
Jackal should now be available at `https://localhost:25863`.

## YAML

```yaml
db:
  path:             STRING,   DEFAULT: db.json
logger:
  environment:      STRING,   DEFAULT: development
statsD:
  host:             STRING,   DEFAULT: localhost
  port:             INTEGER,  DEFAULT: 8125
  prefix:           STRING,   DEFAULT: jackal
  ssl:                NOT REQUIRED
    key:              STRING,   DEFAULT: empty
    cert:             STRING,   DEFAULT: empty
    passphrase:       STRING,   DEFAULT: emptuy
```

## Guidelines

- The `db/path` string is the location in which the Jackal Database will save a JSON serialised copy of the current state to every minute
- The `logger` object contains an `environment` field by default, additional fields specified here will be logged out with each request received by the Jackal Server
- The `statsD` object should be used to specify basic settings to handle graphing of data using a `StatsD` server
