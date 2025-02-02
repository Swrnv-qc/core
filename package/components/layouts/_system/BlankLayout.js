// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import CoreLayoutPlaceholder from "../../../layout/core/CoreLayoutPlaceholder";
import CoreClasses from "../../../styles/CoreClasses";

export default function BlankLayout(props) {
  return (
    <>
      <CoreLayoutPlaceholder id={BlankLayout.PLACEHOLDER.CONTENT} styleClasses={[CoreClasses.WIDTH.VW_100]}>{props?.children}</CoreLayoutPlaceholder>
    </>
  );
}

BlankLayout.PLACEHOLDER = { CONTENT: "content" };
