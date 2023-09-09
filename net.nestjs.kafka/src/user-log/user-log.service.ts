import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { UserLog, UserLogDocument } from "./user-log-schema/user-log-schema";
import { Model } from "mongoose";

@Injectable()
export class UserLogService {
  constructor(
    @InjectModel(UserLog.name)
    private userLogModel: Model<UserLogDocument>

  ) { }

  async create(
    userLog: UserLog
  ): Promise<UserLog> {

    return await new this.userLogModel(
        userLog
    ).save();
  }

  async findAll(): Promise<UserLog[]> {
    
  return await this.userLogModel.find().sort({ updatedAt: -1 });
  }

}