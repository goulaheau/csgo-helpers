import { RouterConfiguration } from "@microsoft/fast-router";
import { HomePage } from "./pages/home-page/home-page.js";
import { AboutPage } from "./pages/about-page/about-page.js";
import { defaultLayout } from "./layouts/default-layout/default-layout.js";

type RouteSettings = {
  public?: boolean;
};

export class AppRouterConfiguration extends RouterConfiguration<RouteSettings> {
  configure(): void {
    this.title = "My App";

    this.defaultLayout = defaultLayout;

    this.routes.map(
      { path: "", redirect: "/csgo-helpers/" },
      {
        path: "/csgo-helpers",
        children: [
          { path: "", title: "Home", element: HomePage },
          { path: "about", title: "about", element: AboutPage },
        ],
      }
    );

    this.routes.fallback({ redirect: "" });
  }
}
