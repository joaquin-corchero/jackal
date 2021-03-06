# Jackal Statistics Guide

## Default Statistics

The below statistics are returned when neither the consumer nor the provider are specified using the query string parameter detailed in the [Jackal API Guide](https://github.com/findmypast-oss/jackal/blob/master/docs/api.md).

```json
{
  "consumerCount":  "INTEGER   // Number of Consumers in Jackal's Database",
  "consumers":      "ARRAY     // Array of Consumers in Jackal's Database",
  "providerCount":  "INTEGER   // Number of Providers in Jackal's Database",
  "providers":      "ARRAY     // Array of Providers in Jackal's Database",
  "apiCount":       "INTEGER   // Number of APIs in Jackal's Database",
  "contractCount":  "INTEGER   // Number of Contracts in Jackal's Database"
}
```

## Specific Consumer

The below statistics are returned when the consumer is specified using the query string parameter detailed in the [Jackal API Guide](https://github.com/findmypast-oss/jackal/blob/master/docs/api.md).

```json
{
  "consumer":       "STRING    // Consumer specified in query string",
  "providerCount":  "INTEGER   // Number of Providers for this Consumer in Jackal's Database",
  "providers":      "ARRAY     // Array of Providers for this Consumer in Jackal's Database",
  "apiCount":       "INTEGER   // Number of APIs for this Consumer in Jackal's Database",
  "contractCount":  "INTEGER   // Number of Contracts for this Consumer in Jackal's Database"
}
```

## Specific Provider

The below statistics are returned when the provider is specified using the query string parameter detailed in the [Jackal API Guide](https://github.com/findmypast-oss/jackal/blob/master/docs/api.md).

```json
{
  "provider":       "STRING    // Provider specified in query string",
  "consumerCount":  "INTEGER   // Number of Consumers for this Provider in Jackal's Database",
  "consumers":      "ARRAY     // Array of Consumers for this Provider in Jackal's Database",
  "apiCount":       "INTEGER   // Number of APIs for this Provider in Jackal's Database",
  "apis":           "ARRAY     // Array of APIs for this Provider in Jackal's Database",
  "contractCount":  "INTEGER   // Number of Contracts for this Provider in Jackal's Database"
}
```

## Specific Consumer & Provider

The below statistics are returned when both the consumer and provider are specified using the query string parameters detailed in the [Jackal API Guide](https://github.com/findmypast-oss/jackal/blob/master/docs/api.md).

```json
{
  "consumer":       "STRING    // Consumer specified in query string",
  "provider":       "STRING    // Provider specified in query string",
  "apiCount":       "INTEGER   // Number of APIs for this combination of Consumer and Provider in Jackal's Database",
  "apis":           "ARRAY     // Array of APIs for this combination of Consumer and Provider in Jackal's Database",
  "contractCount":  "INTEGER   // Number of Contracts for this combination of Consumer and Provider in Jackal's Database"
}
```
