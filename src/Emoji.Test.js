import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "./App"

describe("Emoji Testing", () => {
  beforeEach(() => {
    render(<App />);
  });

  test("Başlık render edilsin", () => {
    const header = screen.getByText("Emoji Search");
    expect(header).toBeInTheDocument();
  });

  test("Emoji listesi render edilsin", () => {
    const emojiList = screen.getAllByText("Click to copy emoji");
    expect(emojiList.length).toEqual(20);
  });

  test("Filtreleme sonrası test", () => {
    const emoji = "Bomb";
    const input = screen.getByRole("textbox");
    userEvent.change(input, { target: { value: emoji } });
    expect(screen.getByText(emoji)).toBeInTheDocument();
  });

  test("Emoji kopyalanmasının testi", () => {
    const copy = screen.getAllByText("Click to copy emoji").at[0];
    const parent = click.parentElement;
    expect(parent.getAttricbute("data-clipboard-text").length).toBeGreaterThan(0)
  });
})