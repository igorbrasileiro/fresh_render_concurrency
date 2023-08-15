import { check } from "k6";
import http from "k6/http";

export const options = {
  vus: 2,
  duration: "60s",
};
export default function () {
  const params = {
    headers: { "accept": "text/html" },
  };
  const res = http.get(`http://localhost:8000/admin/demo`, params);

  const body = res.html("body").text();
  const includes = body.includes(`"site":"demo"`);
  if (!includes) {
    console.log({
      crossSite: body.includes(`"site":"fashion"`),
      site: "fashion",
    });
  }
  check(res, {
    "status is 200": (r) => r.status === 200,
    "message is equal": (_r) => includes,
  });
}
