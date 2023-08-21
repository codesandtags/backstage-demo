# [Backstage](https://backstage.io)

This is your newly scaffolded Backstage App, Good Luck!

To start the app, run:

```sh
yarn install
yarn dev

# run in debug mode for more verbose logging
LOG_LEVEL=debug yarn dev
```

## Catalog incremental ingestion

This branch tests the Catalog incremental ingestion, for further details please review the next links

### Issues

- https://github.com/backstage/backstage/issues/13959

### Alternatives

- https://github.com/backstage/backstage/tree/master/plugins/catalog-backend-module-incremental-ingestion#backstageplugin-catalog-backend-module-incremental-ingestion
- https://backstage.io/blog/2023/01/31/incremental-entity-provider/
- https://github.com/backstage/backstage/pull/14356
- https://github.com/backstage/backstage/pull/14356/files#diff-30553ffe0c5a5fcf83d55a3c6f572d160538dbbce52519201da907b03d3a4caf

## Setup

This approach needs:

- A database to store the catalog data
- A custom catalog with an entity provider
