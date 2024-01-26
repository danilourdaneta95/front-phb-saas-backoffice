import Convenios from "@/app/convenios/page";
import { renderWithRedux } from "@/app/_utils/test-utils";
import { screen } from "@testing-library/react";
import convenioSlice from "@/app/_redux/_slices/convenio";

describe("Prueba unitaria convenios", () => {
  test("Validar Text", () => {
    renderWithRedux(<Convenios />, convenioSlice);
    const text = screen.getByText("Convenios page");
    expect(text).toBeInTheDocument();
  });
});
