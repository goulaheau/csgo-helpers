import { html } from "@microsoft/fast-element";
import type { ViewTemplate } from "@microsoft/fast-element";
import type { AboutPage } from "./about-page.js";
import "../../components/profile-icon/profile-icon.js";

/**
 * @public
 */
export const aboutPageTemplate: ViewTemplate<AboutPage> = html`
  <template>
    <div>About page</div>

    <app-profile-icon
      :firstName="${(x): string => x.firstName}"
      :lastName="${(x): string => x.lastName}"
      :age="${(x): number => x.age}"
      :roles="${(x): string[] => x.roles}"
      :user="${(
        x
      ): {
        firstName: string;
        lastName: string;
        roles: string[];
      } => x.user}"
    ></app-profile-icon>
  </template>
`;
