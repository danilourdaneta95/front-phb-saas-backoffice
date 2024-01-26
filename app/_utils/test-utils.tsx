// test-utils.tsx
import React, { ReactElement } from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore, EnhancedStore } from "@reduxjs/toolkit";

interface Props {
  children: React.ReactNode;
}

export const renderWithRedux = (
  ui: ReactElement,
  slice: any,
  {
    preloadedState,
    store = configureStore({ reducer: { convenios: slice }, preloadedState }),
    ...renderOptions
  }: {
    preloadedState?: any;
    store?: EnhancedStore;
  } = {},
) => {
  const Wrapper = ({ children }: Props) => {
    return <Provider store={store}>{children}</Provider>;
  };

  return render(ui, { wrapper: Wrapper, ...renderOptions });
};
