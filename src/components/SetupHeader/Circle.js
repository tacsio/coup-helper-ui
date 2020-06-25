import React from "react";
import { Svg, Ellipse, Image } from "react-native-svg";

import avatar1 from "../../assets/avatar1.png";
import avatar2 from "../../assets/avatar2.png";
import avatar3 from "../../assets/avatar3.png";
import avatar4 from "../../assets/avatar4.png";

export default function HeaderCircle() {
  return (
    <Svg height="50%" width="50%" style={{ overflow: "visible" }}>
      <Ellipse
        strokeDasharray="2,2"
        ry="200"
        rx="260"
        id="svg_1"
        cy="-120"
        cx="40"
        rotation={15}
        strokeWidth="3"
        stroke="#36C2AA"
        fill="none"
      />

      <Image y="75" x="15" width={35} href={avatar1} />
      <Image y="65" x="110" width={65} href={avatar2} />
      <Image y="30" x="220" width={65} href={avatar3} />
      <Image y="-50" x="300" width={40} href={avatar4} />
    </Svg>
  );
}
