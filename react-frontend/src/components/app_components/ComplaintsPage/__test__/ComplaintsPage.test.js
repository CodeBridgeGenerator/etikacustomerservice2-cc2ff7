import React from "react";
import { render, screen } from "@testing-library/react";

import ComplaintsPage from "../ComplaintsPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders complaints page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <ComplaintsPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("complaints-datatable")).toBeInTheDocument();
    expect(screen.getByRole("complaints-add-button")).toBeInTheDocument();
});
