import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { CreateDateColumn, ObjectIdColumn, UpdateDateColumn } from "typeorm";

export type UserLogDocument = HydratedDocument<UserLog>;


@Schema({ collection: "user_logs", timestamps: true })
export class UserLog {
    @ObjectIdColumn()
    _id: string;

    @Prop({ required: true, index: true })
    user_id: number = 0;

    @Prop({ required: true, index: true })
    fullname: string = '';

    @Prop({ required: true, index: true })
    email: string = '';

    @Prop({ required: true, index: true })
    is_login: string = '';

    @Prop({ required: true, index: true })
    is_login_name: string = '';

    @Prop({ required: true, index: true })
    type: number = 0;

    @Prop({ required: true, index: true })
    type_name: string  = '';

    @Prop()
    @CreateDateColumn()
    createdAt: Date;

    @Prop()
    @UpdateDateColumn()
    updatedAt: Date;

    constructor(
        userId?: number,
        fullname?: string,
        email?: string,
        isLogin?: string,
        isLoginName?: string,
        type?: number,
        typeName?: string,
        createdAt?: Date,
        updatedAt?: Date
      ) {
        this.user_id = userId ? userId : -1;
        this.fullname = fullname ? fullname : '';
        this.email = email ? email : '';
        this.is_login = isLogin ? isLogin : '';
        this.is_login_name = isLoginName ? isLoginName : '';
        this.type = type ? type : 0;
        this.type_name = typeName ? typeName : '';
        this.createdAt = createdAt ? createdAt : new Date;
        this.updatedAt = updatedAt ? updatedAt : new Date;
      }

  }

  export const UserLogSchema =
  SchemaFactory.createForClass(UserLog);