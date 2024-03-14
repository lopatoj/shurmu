import m from "mithril";
import "~/styles.css";

const Plate: m.Component = {
  view: (v) => {
    return m(
      "div.plate",
      {
        style: {
          padding: "1rem",
          backgroundColor: "rgb(0, 0, 0, 0.5)",
          marginBottom: ".5rem",
        },
      },
      v.children
    );
  },
};

export default Plate;