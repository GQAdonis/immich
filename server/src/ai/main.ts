import {Logger} from "@nestjs/common";
import {NestFactory} from "@nestjs/core";
import {envName, getLogLevels, serverVersion} from "@app/domain";
import {RedisIoAdapter} from "@app/infra";
import {AppService} from "../microservices/app.service";
import {AiModule} from "./ai.module";
import {AiService} from "./ai.service";


const logger = new Logger('ImmichAiService');
const port = Number(process.env.AI_PORT) || 3033;


export async function bootstrap() {
  const app = await NestFactory.create(AiModule, { logger: getLogLevels() });

  app.useWebSocketAdapter(new RedisIoAdapter(app));

  await app.get(AiService).init();
  await app.listen(port);

  logger.log(`Immich AI Microservices is listening on ${await app.getUrl()} [v${serverVersion}] [${envName}] `);
}
