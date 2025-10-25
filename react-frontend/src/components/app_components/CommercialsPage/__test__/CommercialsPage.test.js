import React from "react";
import { render, screen } from "@testing-library/react";

import CommercialsPage from "../CommercialsPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders commercials page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <CommercialsPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("commercials-datatable")).toBeInTheDocument();
    expect(screen.getByRole("commercials-add-button")).toBeInTheDocument();
});
