import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ResponseLoggingMiddleware } from './middleware/response-logging-middlware';
import { RequestLoggingMiddleware } from './middleware/request-logging-middlware';
import { AuthModule } from './modules/auth/auth.module';
import { TranslatorModule } from './modules/translator/translator.module';
import { CardModule } from './modules/card/card.module';
import { DictionaryModule } from './modules/dictionary/dictionary.module';
import { LibraryModule } from './modules/library/library.module';
import { TrainingModule } from './modules/training/training.module';
import { StatisticsModule } from './modules/statistics/statistics.module';
import { SettingsModule } from './modules/settings/settings.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['env/.env', 'env/.env.project_root'],
      isGlobal: true
    }),
    AuthModule,
    TranslatorModule,
    CardModule,
    DictionaryModule,
    LibraryModule,
    TrainingModule,
    StatisticsModule,
    SettingsModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(RequestLoggingMiddleware, ResponseLoggingMiddleware).forRoutes('*');
  }
}
