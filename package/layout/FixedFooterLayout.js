// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import CoreTypographyBody1 from "../components/dataDisplay/CoreTypographyBody1";
// eslint-disable-next-line import/order
import CoreLayoutPlaceholder from "./core/CoreLayoutPlaceholder";

export default function FixedFooterLayout() {
  return (
    <>
      <CoreTypographyBody1>Fixed FOOTER Layout</CoreTypographyBody1>

      <CoreLayoutPlaceholder id={FixedFooterLayout.PLACEHOLDER.CONTENT} />

      <CoreLayoutPlaceholder id={FixedFooterLayout.PLACEHOLDER.FOOTER} />
    </>
  );
}

FixedFooterLayout.PLACEHOLDER = { CONTENT: "content", FOOTER: "fixedFooter" };
