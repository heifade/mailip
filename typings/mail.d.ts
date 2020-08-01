export declare class MailInfo {
    subject: string;
    host: string;
    port: number;
    from: string;
    password: string;
    to: string;
    ip: string;
}
export declare function sendMail(mailInfo: MailInfo): Promise<string>;
