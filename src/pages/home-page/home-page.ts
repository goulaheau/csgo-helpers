import { customElement, FASTElement } from "@microsoft/fast-element";
import { homePageStyles as styles } from "./home-page.styles.js";
import { homePageTemplate as template } from "./home-page.template.js";

@customElement({ name: "app-home-page", template, styles })
export class HomePage extends FASTElement {}
