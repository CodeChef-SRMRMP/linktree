import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";
import links from "./links";
import socials from "./socials";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([socials, links]),
});
