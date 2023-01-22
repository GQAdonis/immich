import { DynamicModule, Global, Module, ModuleMetadata, Provider } from '@nestjs/common';
import { APIKeyService } from './api-key';
import { SystemConfigService } from './system-config';
import { UserService } from './user';
import { UserTokenService } from '@app/domain/user-token';

export const INITIAL_SYSTEM_CONFIG = 'INITIAL_SYSTEM_CONFIG';

const providers: Provider[] = [
  //
  APIKeyService,
  SystemConfigService,
  UserService,
  UserTokenService,
  {
    provide: INITIAL_SYSTEM_CONFIG,
    inject: [SystemConfigService],
    useFactory: async (configService: SystemConfigService) => {
      return configService.getConfig();
    },
  },
];

@Global()
@Module({})
export class DomainModule {
  static register(options: Pick<ModuleMetadata, 'imports'>): DynamicModule {
    return {
      module: DomainModule,
      imports: options.imports,
      providers: [...providers],
      exports: [...providers],
    };
  }
}
