import { html } from "@microsoft/fast-element";
import type { ViewTemplate } from "@microsoft/fast-element";
import type { HomePage } from "./home-page.js";
import "../../components/welcome/welcome.js";

/**
 * @public
 */
export const homePageTemplate: ViewTemplate<HomePage> = html`
  <template>
    <div>Home page</div>

    <fast-welcome></fast-welcome>
  </template>
`;
