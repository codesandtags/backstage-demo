import { CatalogBuilder } from '@backstage/plugin-catalog-backend';
import { ScaffolderEntitiesProcessor } from '@backstage/plugin-scaffolder-backend';
import { GithubEntityProvider } from '@backstage/plugin-catalog-backend-module-github';

import { Router } from 'express';

import { PluginEnvironment } from '../types';

export default async function createPlugin(
  env: PluginEnvironment,
): Promise<Router> {
  // Default configuration catalog
  const builder = await CatalogBuilder.create(env);

  // Setup Github entity provider
  builder.addEntityProvider(
    GithubEntityProvider.fromConfig(env.config, {
      logger: env.logger,
      // optional: alternatively, use scheduler with schedule defined in app-config.yaml
      schedule: env.scheduler.createScheduledTaskRunner({
        frequency: { minutes: 5 },
        timeout: { minutes: 3 },
      }),
      // optional: alternatively, use schedule
      scheduler: env.scheduler,
    }),
  );

  builder.addProcessor(new ScaffolderEntitiesProcessor());
  const { processingEngine, router } = await builder.build();

  // Subscribe to check errors
  builder.subscribe({
    onProcessingError(event) {
      console.log('Error processing entity');
      console.error(event);
    },
  });

  await processingEngine.start();
  return router;
}
