import { expect } from "chai";
import "mocha";
import { mailIp, startMailIp } from "../src/mailIp";
import { yyyy_mm_dd } from "yymmdd";

const props = {
  publicIp: true,
  fromEmailAddress: "***@qq.com",
  toEmailAddress: "***@qq.com",
  password: "<PASSWORD>",
  server: "smtp.qq.com",
  port: 465,
  subject: `${yyyy_mm_dd()} IP`,
  frequency: 60
};

describe("mailIp", function() {
  it("mailIp", async () => {
    await mailIp(props);
  });

  it("autoMailIp", async () => {
    await startMailIp(props);
  });
});
