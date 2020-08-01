import chalk = require("chalk");
import { dateToString } from "./util/util";
import { sendMail, MailInfo } from "./mail";
import { getIp } from "./ip";

function send(ip: string, props: IMailIpProps) {
  let mailInfo: MailInfo = {
    host: props.server,
    port: props.port,
    from: props.fromEmailAddress,
    to: props.toEmailAddress,
    password: props.password,
    ip: ip,
    subject: props.subject
  };

  sendMail(mailInfo)
    .then(v => {
      console.log(chalk.blue(v));
    })
    .catch(err => {
      console.log(chalk.red(err));
    });
}

let oldIp: string = "";

interface IMailIpProps {
  publicIp: boolean;
  fromEmailAddress: string;
  toEmailAddress: string;
  password: string;
  server: string;
  port: number;
  subject: string;
}

export async function mailIp(props: IMailIpProps) {
  let ip = await getIp(props.publicIp);
  if (ip && oldIp !== ip) {
    send(ip, props);
    oldIp = ip;
  }
}

interface IStartMailIpProps extends IMailIpProps {
  frequency: number;
}

export function startMailIp(props: IStartMailIpProps) {
  mailIp(props)
    .then()
    .catch(e => {
      console.log(chalk.red(`${dateToString(new Date())}，获取IP失败！${e}`));
    });

  if (props.frequency > 0) {
    setTimeout(() => {
      startMailIp(props);
    }, 1000 * props.frequency);
  }
}
