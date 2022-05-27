import {
  attr,
  customElement,
  FASTElement,
  volatile,
} from "@microsoft/fast-element";
import { profileIconStyles as styles } from "./profile-icon.styles.js";
import { profileIconTemplate as template } from "./profile-icon.template.js";

/**
 * A Custom HTML Element.
 *
 * @public
 */
@customElement({ name: "app-profile-icon", template, styles })
export class ProfileIcon extends FASTElement {
  @attr firstName: string = "";
  @attr lastName: string = "";
  @attr age: number | null = null;
  @attr roles: string[] = [];
  @attr user: { firstName: string; lastName: string; roles: string[] } | null =
    null;

  @volatile
  get initials(): string {
    if (!this.firstName || !this.lastName) {
      return "";
    }

    const firstNameInitial = this.firstName.charAt(0).toLocaleUpperCase();
    const lastNameInitial = this.lastName.charAt(0).toLocaleUpperCase();

    return `${firstNameInitial}${lastNameInitial}`;
  }

  rolesChanged(oldValue: string[], newValue: string[]): void {
    console.log(oldValue, newValue);
  }

  userChanged(
    oldValue: { firstName: string; lastName: string; roles: string[] },
    newValue: { firstName: string; lastName: string; roles: string[] }
  ): void {
    console.log(oldValue, newValue);
  }

  ageChanged(oldValue: number, newValue: number): void {
    console.log(oldValue, newValue);
  }
}
