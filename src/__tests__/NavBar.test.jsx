import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, it, expect, vi } from "vitest";
import { BrowserRouter as Router } from "react-router-dom"; // Wrap with Router
import NavBar from "../component/NavBar";
import { StoreContextApp } from "../Store/StoreContext";

// Mock StoreContextApp and localStorage
const mockCart = [{ id: 1, name: "item1" }];
const mockIsLoggedIn = "true"; // Simulate logged-in user

describe("NavBar", () => {
  beforeEach(() => {
    // Mock localStorage getItem
    vi.spyOn(global.localStorage, "getItem").mockImplementation((key) => {
      if (key === "isLoggedIn") {
        return mockIsLoggedIn; // Return mock value for "isLoggedIn"
      }
      return null;
    });

    // Mock localStorage setItem
    vi.spyOn(global.localStorage, "setItem").mockImplementation(() => {});
  });

  afterEach(() => {
    // Clear mocks after each test
    vi.restoreAllMocks();
  });

  it("renders NavBar correctly when logged in", () => {
    // Mock context with a cart
    const mockContext = {
      cart: mockCart,
    };

    render(
      <StoreContextApp.Provider value={mockContext}>
        <Router>
          <NavBar />
        </Router>
      </StoreContextApp.Provider>
    );

    // Test if "Home" and "Product" links are rendered
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Product")).toBeInTheDocument();

    // Test if "singIn" and "Register" are visible
    expect(screen.getByText("singIn")).toBeInTheDocument();
    expect(screen.getByText("Register")).toBeInTheDocument();

    // const cartLink = screen.getByText("Item"); // Adjust for the correct cart text
    // expect(cartLink).toBeInTheDocument();
    // expect(cartLink.closest("a")).toHaveAttribute("href", "/Cart");
  });

  it("does not show cart link when not logged in", () => {
    // Change mock localStorage to simulate not logged in user
    vi.spyOn(global.localStorage, "getItem").mockImplementation((key) => {
      if (key === "isLoggedIn") {
        return "false"; // Simulate a not-logged-in state
      }
      return null;
    });

    const mockContext = {
      cart: mockCart,
    };

    render(
      <StoreContextApp.Provider value={mockContext}>
        <Router>
          <NavBar />
        </Router>
      </StoreContextApp.Provider>
    );

    // Test that the cart link is not displayed when the user is not logged in
    const cartLink = screen.queryByText("1Item");
    expect(cartLink).toBeNull(); // Cart link should not be visible if not logged in
  });
});

// const sum = (a, b) => a + b;

// test("adds 1 + 2 to equal 3", () => {
//   expect(sum(1, 2)).toBe(3);
// });

// test("adds 2 + 2 to equal 4", () => {
//   expect(sum(2, 2)).toBe(4);
// });
