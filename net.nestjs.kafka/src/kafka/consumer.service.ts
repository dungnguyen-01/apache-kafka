import { Injectable, OnApplicationShutdown } from "@nestjs/common";
import { Kafka, Consumer, ConsumerSubscribeTopic, ConsumerRunConfig } from "kafkajs";

@Injectable()
export class ConsumerService implements OnApplicationShutdown {
    private readonly kafka = new Kafka({
        brokers: [`${process.env.KAFKA_HOST}:${process.env.KAFKA_PORT}`],
    });

    private readonly consumers: Consumer[] = [];


    /**
   *
   * @param topic
   * @param config
   */
   async consumerNotifyTest(topic: ConsumerSubscribeTopic, config: ConsumerRunConfig) {
    const consumer = this.kafka.consumer({groupId: 'consumer-group-employee-15'});
    await consumer.connect();
    await consumer.subscribe(topic);
    await consumer.run(config);
    await this.consumers.push(consumer); 
   }

   async onApplicationShutdown() {
    for (const consumer of this.consumers)  {
        await consumer.disconnect();
    }
   }
}