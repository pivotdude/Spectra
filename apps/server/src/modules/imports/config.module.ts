import { ConfigModule as NestConfigModule } from '@nestjs/config';

export const ConfigModule = NestConfigModule.forRoot({
  isGlobal: true,
  envFilePath: '.env',
});
