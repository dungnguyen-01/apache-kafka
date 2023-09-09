import { Module } from "@nestjs/common";
import { KafkaService } from "./kafka.service";
import { ConsumerService } from "./consumer.service";
import { Consumer } from "./consumer";
import { ConfigModule } from "@nestjs/config";


@Module({
    imports: [
        ConfigModule.forRoot({
            envFilePath: ".env",
            isGlobal: true,
          }),
    ],
    providers: [KafkaService, ConsumerService, Consumer],
    exports: [KafkaService, ConsumerService, Consumer]
})
export class KafkaModule {}