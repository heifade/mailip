interface IMailIpProps {
    publicIp: boolean;
    fromEmailAddress: string;
    toEmailAddress: string;
    password: string;
    server: string;
    port: number;
    subject: string;
}
export declare function mailIp(props: IMailIpProps): Promise<void>;
interface IStartMailIpProps extends IMailIpProps {
    frequency: number;
}
export declare function startMailIp(props: IStartMailIpProps): void;
export {};
