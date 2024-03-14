import m from "mithril";
import "~/styles.css";

import Header from "~/components/header";
import Container from "~/components/container";

const Artist: m.Component = {
  view: (v) => {
    return [m(Header),
      m(
        Container,
        m("div.plate", {style: {marginBottom: ".5rem"}},
          m("h1", "Dinosaur Jr."),
          m("p", "This is the artist page."),
        ),
      ),
    ];
  },
};

export default Artist;
