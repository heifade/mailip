import { createTransport } from "nodemailer";
import * as smtpTransport from "nodemailer-smtp-transport";

export class MailInfo {
  public subject: string;
  public host: string;
  public port: number;
  public from: string;
  public password: string;
  public to: string;
  public ip: string;
}

export async function sendMail(mailInfo: MailInfo) {
  return new Promise<string>((resolve, reject) => {
    let transporter = createTransport(
      smtpTransport({
        host: mailInfo.host,
        secure: true, // 使用 SSL
        port: mailInfo.port, // SMTP 端口
        auth: {
          user: mailInfo.from,
          //这里密码不是qq密码，是你设置的smtp密码
          pass: mailInfo.password
        }
      })
    );

    // 设置邮件内容
    let mailOptions = {
      from: mailInfo.from, // 发件地址
      to: mailInfo.to, // 收件列表
      subject: mailInfo.subject, // 标题
      text: mailInfo.ip,
      html: mailInfo.ip // html 内容
    };

    // 发送邮件
    transporter.sendMail(mailOptions, (error, response) => {
      if (error) {
        reject(error);
      } else {
        resolve(response.response);
      }
      transporter.close(); // 如果没用，关闭连接池
    });
  });
}
