import { Controller, Get, HttpStatus, Res } from "@nestjs/common";
import { BaseResponse } from "src/utils.common/BaseResponse";
import { UserLog } from "./user-log-schema/user-log-schema";
import { UserLogService } from "./user-log.service";
import { Response } from "express";
import { UserLogResponse } from "./user-log.response.ts/user-log.reponse";

@Controller('/api/v1/user-logs')
export class UserLogCOntroller {
    constructor(
        private userLogService : UserLogService
    ){}

    @Get()
    async getAll(
        @Res() res: Response
        ): Promise<any> {


        let response: BaseResponse = new BaseResponse();
         
        response.setStatus(HttpStatus.OK);
        response.setMessage((HttpStatus.OK), 'OK');
        response.setData(new UserLogResponse().mapToList(await this.userLogService.findAll()));
        return res.status(HttpStatus.OK).send(response);
    }



}