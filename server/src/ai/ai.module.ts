import { DomainModule } from '@app/domain';
import { InfraModule } from '@app/infra';
import { Module } from '@nestjs/common';
import { AiService } from './ai.service';

@Module({
  imports: [DomainModule.register({ imports: [InfraModule] })],
  providers: [AiService],
})
export class AiModule {}
