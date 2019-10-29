import { configure } from "@storybook/react";

import "../../src/scaffold.css";

configure(require.context("../../src/", true, /\.story\.tsx?$/), module);
