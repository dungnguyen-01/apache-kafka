import { MongooseModule } from "@nestjs/mongoose";
import { UserLog, UserLogSchema } from "./user-log-schema/user-log-schema";
import { Global, Module } from "@nestjs/common";
import { UserLogService } from "./user-log.service";
import { UserLogCOntroller } from "./user-long.controller";

@Global()
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: UserLog.name, schema: UserLogSchema },
    ]),
  ],
  controllers: [UserLogCOntroller],
  providers: [UserLogService],
  exports: [UserLogService]
})
export class UserLogModule {}