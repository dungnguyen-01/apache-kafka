import { UtilsDate } from "src/utils.common/UtilsDate";
import { UserLog } from "../user-log-schema/user-log-schema";

export class UserLogResponse {

    user_id: number = 0;

    fullname: string = '';

    email: string = '';

    is_login: string = '';

    is_login_name: string = '';

    type: number = 0;

    type_name: string  = '';

    created_at: string  = '';

    updated_at: string  = '';



    constructor(baseEntity? : UserLog) {
        this.user_id = baseEntity? +baseEntity.user_id : 0;
        this.fullname = baseEntity? baseEntity.fullname : '';
        this.email = baseEntity? baseEntity.email : '';
        this.is_login = baseEntity? baseEntity.is_login : '';
        this.is_login_name = baseEntity? baseEntity.is_login == 'true' ?  'Logged' : 'Logout' : '';
        this.type = baseEntity? +baseEntity.type : 0;

        if (baseEntity && baseEntity.type !== undefined) {
            if (+baseEntity.type === 0) {
                this.type_name = 'CREATE';
            } else if (+baseEntity.type === 1) {
                this.type_name = 'LOGIN';
            } else {
                this.type_name = 'LOGOUT';
            } 
        }
        
        this.created_at = baseEntity ? UtilsDate.formatDateTimeVNToString(baseEntity?.createdAt) : '';
        this.updated_at = baseEntity ? UtilsDate.formatDateTimeVNToString(baseEntity?.updatedAt) : '';
    }

    public mapToList(baseEntities: UserLog[]): UserLogResponse[] {
        let data: UserLogResponse[] = [];
        baseEntities.forEach(e => {
            data.push(new UserLogResponse(e));
        })

        return data;
    }

}