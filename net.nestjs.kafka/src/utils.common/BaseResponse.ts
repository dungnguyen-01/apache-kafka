import { HttpStatus } from "@nestjs/common";

export class BaseResponse {
    
    private status: HttpStatus;
    private message: string;
    private data: Object

    constructor(status: number = 0, message: string = 'NULL', data?: Object) {
        this.status = status ? + status : + HttpStatus.OK;
        this.message = message ? message : "SUCCESS";
        this.data = data ? data : {};
    }

    
    public getStatus(): HttpStatus {
        return this.status;
    }

    public setStatus(status: HttpStatus): void {
        this.status = status;
    }

    public getMessage(): string {
        return this.message;
    }

    public setMessage(status: HttpStatus, message: string): void {

        if (message) {
            this.message = message;
        } else {
            switch (status) {
                case HttpStatus.OK:
                    this.message = "SUCCESS";
                    break;
                case HttpStatus.BAD_REQUEST:
                    this.message = "Dữ liệu không hợp lệ";
                    break;
                default:
                    this.message = "SUCCESS";
                    break;
            }
        }
    }

    public getData(): Object {
        return this.data;
    }

    public setData(data: Object): void {
        this.data = data;
    }
}