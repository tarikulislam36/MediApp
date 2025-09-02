// App.tsx
import React from "react";
import { Provider } from "react-redux";
import store from "./app/store"; // adjust path if needed

// 👇 This loads the expo-router system (which will look inside /app/_layout.tsx etc.)
import { ExpoRoot } from "expo-router";

export default function App() {
    const ctx = require.context("./app");

    return (
        <Provider store={store}>
            <ExpoRoot context={ctx} />
        </Provider>
    );
}
