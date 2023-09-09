import * as moment from "moment";

export class UtilsDate {
    static formatDateTimeVNToString(date: Date): string {
      return moment(date).format("DD/MM/YYYY h:mm");
    }


  static formatDateTimeVNToStringNoTime(date: Date): string {
    return moment(date).format("DD/MM/YYYY");
  }


  static formatDateVNToString(date: Date): string {
    return moment(date).format("DD/MM/YYYY");
  }

  static formatDateInsertDatabase(date: string): string {
    if (date == null || date == "") {
      return "";
    } else {
      return moment(date, "DD/MM/YYYY").format("YYYY-MM-DD");
    }
  }

  static formatStringDateToDate(date: string): Date {
    return new Date(this.formatDateInsertDatabase(date));
  }
}  