import { Temporal } from "@js-temporal/polyfill";

const birthday = Temporal.PlainDate.from("2004-08-10");
console.log(birthday.toString());

const today = Temporal.Now.plainDateISO();
console.log(today.toString());

const time = Temporal.Now.plainTimeISO();
console.log(time.toString());

const dateTime = Temporal.Now.plainDateTimeISO();
console.log(dateTime.toString());