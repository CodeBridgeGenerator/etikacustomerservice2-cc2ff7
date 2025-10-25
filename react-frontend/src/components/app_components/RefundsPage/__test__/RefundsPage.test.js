import React from "react";
import { render, screen } from "@testing-library/react";

import RefundsPage from "../RefundsPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders refunds page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <RefundsPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("refunds-datatable")).toBeInTheDocument();
    expect(screen.getByRole("refunds-add-button")).toBeInTheDocument();
});
