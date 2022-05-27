import { html } from "@microsoft/fast-element";
import { FASTElementLayout } from "@microsoft/fast-router";
import type { Layout } from "@microsoft/fast-router";

export const defaultLayout = new FASTElementLayout(
  html`
    <nav>
      <ul>
        <li>
          <a href="/csgo-helpers">Home</a>
        </li>
        <li>
          <a href="/csgo-helpers/about">About</a>
        </li>
      </ul>
    </nav>
    <main>
      <slot></slot>
    </main>
  `
) as Readonly<Layout>;
