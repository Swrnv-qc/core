import { CoreComponentRegistry } from "../components/CoreComponentsRegistry";
import authComponentRegistry from "../modules/auth/components.registry";
import { componentMap } from "../utils/componentMap";

let ComponentRegistry = {
  /**
   * componentMap is form specific map for elements
   */
  ...componentMap,
  ...authComponentRegistry,
  ...CoreComponentRegistry
};

export default ComponentRegistry;
