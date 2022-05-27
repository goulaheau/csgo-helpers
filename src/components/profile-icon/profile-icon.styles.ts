import { css, ElementStyles } from "@microsoft/fast-element";

/**
 * Styles for ProfileIcon
 * @public
 */
export const profileIconStyles: ElementStyles = css`
  :host > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 48px;
    text-align: center;
    font-family: aktiv-grotesk, "Segoe UI", Arial, Helvetica, sans-serif;
    font-size: 14px;
    line-height: 20px;
    min-height: 100vh;
    color: #e5e5e5;
    background: #181818;
  }
`;
