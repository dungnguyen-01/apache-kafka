import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from "@nestjs/config";
import { KafkaModule } from './kafka/kafka.module';
import { UserLogModule } from './user-log/user-log.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      `${process.env.DB_MONGO_CONNECTION}://${process.env.DB_MONGO_HOST}/${process.env.DB_MONGO_NAME}`),
    KafkaModule,
    UserLogModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
