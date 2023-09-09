export class KafkaUser {
    id: number  = 0;
    fullname: string = '';
    email: string = '';
    type: number = 0;
    is_login: string = '';

    constructor(data?: any) {
        this.id = data.id;
        this.fullname = data.fullname;
        this.email = data.email;
        this.type = data.type;
        this.is_login = data.login;
    }


}