import { html } from "@microsoft/fast-element";
import type { ViewTemplate } from "@microsoft/fast-element";
import type { ProfileIcon } from "./profile-icon.js";

/**
 * @public
 */
export const profileIconTemplate: ViewTemplate<ProfileIcon> = html`
  <template>
    <div>${(x): string => x.initials}</div>
  </template>
`;
