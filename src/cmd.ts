import { option } from "yargs";
import { startMailIp } from "./mailIp";

let pars = option("f", {
  alias: "fromEmailAddress",
  demand: true,
  default: "",
  describe: "Please input mail from address",
  type: "string"
})
  .option("p", {
    alias: "password",
    demand: true,
    default: "",
    describe: "Please input password",
    type: "string"
  })
  .option("s", {
    alias: "server",
    demand: false,
    default: "smtp.qq.com",
    describe: "Please input mail server",
    type: "string"
  })
  .option("t", {
    alias: "toEmailAddress",
    demand: true,
    default: "",
    describe: "Please input mail to address",
    type: "string"
  })
  .option("o", {
    alias: "port",
    demand: false,
    default: 465,
    describe: "Please input server port",
    type: "number"
  })
  .option("n", {
    alias: "frequency",
    demand: false,
    default: 60,
    describe: "Please input frequency of getip",
    type: "number"
  })
  .option("g", {
    alias: "publicIp",
    demand: false,
    default: false,
    describe: "Please input whether or not to send public ip",
    type: "boolean"
  })
  .option("u", {
    alias: "subject",
    demand: false,
    default: "IP Address",
    describe: "Please input subject of the mail",
    type: "string"
  }).argv;

startMailIp({
  publicIp: pars.g,
  fromEmailAddress: pars.f,
  toEmailAddress: pars.t,
  password: pars.p,
  server: pars.s,
  port: pars.o,
  subject: pars.u,
  frequency: pars.n
});
