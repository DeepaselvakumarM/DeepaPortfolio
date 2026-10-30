import { render, screen } from "@testing-library/react";
import App from "./App";

beforeAll(() => {
  // jsdom has no IntersectionObserver; the scroll animations only need a no-op.
  window.IntersectionObserver = class {
    observe() {}
    disconnect() {}
  };
});

test("renders the hero with name and role", () => {
  render(<App />);
  expect(screen.getByRole("heading", { level: 1, name: /deepa selvakumar/i })).toBeInTheDocument();
  expect(screen.getAllByRole("link", { name: /view resume/i })[0]).toHaveAttribute(
    "href",
    "/Deepa_Selvakumar_Resume.pdf"
  );
});
