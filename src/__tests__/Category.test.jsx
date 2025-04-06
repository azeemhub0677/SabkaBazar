import { render, screen } from "@testing-library/react";
import Category from "../component/Category";

describe("Category Component", () => {
  test("should render category information correctly", () => {
    render(<Category />);

    // Ensure that the correct category names (like 'Beverages' and 'Bakery Cakes and Dairy') are rendered
    const beverageCategory = screen.getByRole("heading", {
      name: /beverages/i,
    });
    expect(beverageCategory).toBeInTheDocument();

    const bakeryCategory = screen.getByRole("heading", {
      name: /bakery cakes and dairy/i,
    });
    expect(bakeryCategory).toBeInTheDocument();

    // Ensure the correct button text is rendered and associated with each category
    const beverageButton = screen.getByRole("button", { name: /beverages/i });
    expect(beverageButton).toBeInTheDocument();

    const bakeryButton = screen.getByRole("button", {
      name: /bakery-cakes-dairy/i,
    });
    expect(bakeryButton).toBeInTheDocument();

    // Ensure that the links (anchor tags) are rendered correctly and point to the correct href
    const beverageLink = screen.getByRole("link", { name: /beverages/i });
    expect(beverageLink).toHaveAttribute(
      "href",
      "/products/category/5b675e5e5936635728f9fc30"
    );

    const bakeryLink = screen.getByRole("link", {
      name: /bakery cakes and dairy/i,
    });
    expect(bakeryLink).toHaveAttribute(
      "href",
      "/products/category/5b6899123d1a866534f516de"
    );
  });

  test("should display categories with correct image positioning", () => {
    render(<Category />);

    // Verify that images are positioned correctly based on the class (left, right)
    const beverageImageContainer = screen
      .getByAltText(/beverages/i)
      .closest("div");
    expect(beverageImageContainer).toHaveClass("left");

    const bakeryImageContainer = screen
      .getByAltText(/bakery cakes and dairy/i)
      .closest("div");
    expect(bakeryImageContainer).toHaveClass("right");
  });
});
