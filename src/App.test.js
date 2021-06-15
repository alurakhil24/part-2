import App from "./App";
import { MemoryRouter } from "react-router-dom";
import { fireEvent, render } from "@testing-library/react";

describe("Application functionalit tests", () => {
  it("has navigation links and hello world is displayed", () => {
    const utils = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(utils.getByText(/home/i)).toBeInTheDocument();
    expect(utils.getByText(/sign in/i)).toBeInTheDocument();
    expect(utils.getByText(/about/i)).toBeInTheDocument();
    expect(utils.getByText(/hello world/i)).toBeInTheDocument();
  });
  it("should navigate to respective route when clicked", () => {
    const utils = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    fireEvent.click(utils.getByText(/sign in/i));
    expect(utils.getByText(/authenticated/i)).toBeInTheDocument();
    fireEvent.click(utils.getByText(/about/i));
    expect(utils.getByText(/about us/i)).toBeInTheDocument();
    fireEvent.click(utils.getByText(/company/i));
    expect(utils.getByText(/current company/i)).toBeInTheDocument();
    fireEvent.click(utils.getByText("Jobs"));
    expect(utils.getByText(/Current jobs/i)).toBeInTheDocument();

    //Redirected to sign in when edit jobs is clicked
    fireEvent.click(utils.getByText(/edit/i));
    expect(utils.getByText(/authenticated/i)).toBeInTheDocument();
  });
  it("should authenticate and verify if edit jobs is visible", () => {
    const utils = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    fireEvent.click(utils.getByText(/sign in/i));
    fireEvent.click(utils.getByText(/authenticate/i));
    fireEvent.click(utils.getByText(/about/i));
    fireEvent.click(utils.getByText(/edit/i));
    expect(utils.getByText("Edit current Jobs")).toBeInTheDocument();
  });
});
