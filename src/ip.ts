import { networkInterfaces } from "os";
import { get } from "./util/ask";

export async function getIp(sendPublicIp: boolean) {
  const interfaces = networkInterfaces();
  let resStr = "";

  for (const devName in interfaces) {
    const iface = interfaces[devName];
    for (var i = 0; i < iface.length; i++) {
      const alias = iface[i];
      if (alias.family === "IPv4" && alias.address !== "127.0.0.1" && !alias.internal) {
        resStr += `内网IP:${alias.address}<br/>`;
      }
    }
  }

  if (sendPublicIp) {
    const res = await get("http://www.net.cn/static/customercare/yourip.asp", null);
    const mt = /<h2>([0-9\.]*)<\/h2>/.exec(res);

    let ip = "";
    if (mt) {
      ip = mt[1];
    }

    resStr += `公网IP:${ip}`;
  }

  return resStr;
}
