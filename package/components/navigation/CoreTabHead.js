// eslint-disable-next-line unused-imports/no-unused-imports, no-unused-vars
import React from "react";

// eslint-disable-next-line import/no-unresolved
import { NativeTabHead } from "@wrappid/native";

import { sanitizeComponentProps } from "../../utils/componentUtil";

export default function CoreTabHead(props) {
  props = sanitizeComponentProps(CoreTabHead, props);
  return <NativeTabHead {...props} />;
}

CoreTabHead.validProps = [
  {
    description:
      "The component used for the root node. Either a string to use a HTML element or a component.",
    name : "component",
    types: [{ type: "elementType" }],
  },
];
CoreTabHead.invalidProps = ["sx", "classes"];
