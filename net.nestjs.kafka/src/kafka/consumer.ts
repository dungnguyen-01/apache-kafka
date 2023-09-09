import { Injectable, OnModuleInit } from '@nestjs/common';
import { ConsumerService } from './consumer.service';
import { KafkaUser } from './kafka.entity/kafka-user.entity';
import { UserLogService } from 'src/user-log/user-log.service';
import { UserLog } from 'src/user-log/user-log-schema/user-log-schema';


@Injectable()
export class Consumer implements OnModuleInit {
  constructor(private readonly consumerService: ConsumerService,
              private userLogService : UserLogService) {}

  async onModuleInit() {
    await this.consumerService.consumerNotifyTest(
      { topic: 'kafka.topic.send-message-notify-create-employee' },
      {
        eachMessage: async ({ topic, partition, message }) => {
          console.log(JSON.parse(JSON.parse(`${message.value.toString()}`)));
          // const kafkaUser: KafkaUser = new KafkaUser(
          //   JSON.parse(JSON.parse(`${message.value.toString()}`)),
          // );

          // console.log(kafkaUser);

            
          //   const user = new UserLog();
          //   user.user_id = kafkaUser.id;
          //   user.fullname = kafkaUser.fullname;
          //   user.email = kafkaUser.email;
          //   user.type = kafkaUser.type;
          //   user.is_login = kafkaUser.is_login;
          //   kafkaUser.is_login == 'true' ?  user.is_login_name = 'Logged' : user.is_login_name = 'Logout'

          //   if (kafkaUser.type == 0) user.type_name = 'CREATE'
          //   else if (kafkaUser.type == 1) user.type_name = 'LOGIN'
          //   else if (kafkaUser.type == 2) user.type_name = 'LOGOUT'


          //   this.userLogService.create(user);

          //   console.log("SAVE SUCCESS.");
            
          
        },
      },
    );
  }
}
