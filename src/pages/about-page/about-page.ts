import {
  customElement,
  FASTElement,
  observable,
} from "@microsoft/fast-element";
import { aboutPageStyles as styles } from "./about-page.styles.js";
import { aboutPageTemplate as template } from "./about-page.template.js";

@customElement({ name: "app-about-page", template, styles })
export class AboutPage extends FASTElement {
  @observable firstName: string = "John";
  @observable lastName: string = "Doe";

  age: number = 27;
  roles: string[] = ["admin", "editor"];
  user: { firstName: string; lastName: string; roles: string[] } = {
    firstName: "John",
    lastName: "Doe",
    roles: ["admin", "editor"],
  };

  updateFirstNameAndLastNameTimeout: NodeJS.Timeout | null = null;

  connectedCallback(): void {
    super.connectedCallback();

    this.updateFirstNameAndLastNameAfter3Seconds();
  }

  private updateFirstNameAndLastNameAfter3Seconds(): void {
    this.updateFirstNameAndLastNameTimeout = setTimeout(() => {
      this.firstName = "Marie";
      this.lastName = "Jeanne";

      this.updateFirstNameAndLastNameTimeout = null;
    }, 3000);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();

    if (this.updateFirstNameAndLastNameTimeout) {
      clearTimeout(this.updateFirstNameAndLastNameTimeout);
    }
  }
}
