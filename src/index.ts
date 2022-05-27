import { css, customElement, FASTElement, html } from "@microsoft/fast-element";
import { FASTRouter } from "@microsoft/fast-router";
import { AppRouterConfiguration } from "./routes.js";

FASTRouter;

const template = html<MainApplication>`
  <fast-router
    :config=${(x): AppRouterConfiguration => x.routerConfiguration}
  ></fast-router>
`;

const styles = css`
  :host {
    contain: content;
  }

  :host,
  fast-router {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

@customElement({
  name: "main-application",
  template,
  styles,
})
export class MainApplication extends FASTElement {
  routerConfiguration: AppRouterConfiguration = new AppRouterConfiguration();
}
