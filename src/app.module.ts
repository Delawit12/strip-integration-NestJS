import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StripeModule } from './stripe/stripe.module';
import { StripeController } from './stripe/stripe.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [StripeModule, ConfigModule.forRoot()],
  controllers: [AppController, StripeController],
  providers: [AppService],
})
export class AppModule {}
