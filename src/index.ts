import m from "mithril";
import "~/styles.css";

import Main from "~/views/main";
import Upload from "~/views/upload";
import Artist from "~/views/artist";

m.route(document.body, "/", {
  "/": Main,
  "/upload": Upload,
  "/artist": Artist,
});
