import { get } from "https";

const options = {
  hostname: "api.mangadex.org",
  path: "/manga/3fc308c9-4b00-4dc3-943e-1f39242bc708",
  headers: {
    Accept: "application/json",
    "User-Agent": "node.js",
  },
};

get(options, (res) => {
    let data = "";
    res.on("data", (chunk) => (data += chunk));
    res.on("end", () => {
      const parsedData = JSON.parse(data);
      console.log(JSON.stringify(parsedData, null, 2));
    });
  })
  .on("error", (err) => console.error("Error:", err.message));
