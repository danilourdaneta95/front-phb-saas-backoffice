import Convenio from "@/app/_components/_convenio/_generales/generales-tailwind";
import { render, screen } from "@testing-library/react";

describe("Prueba unitaria convenio", () => {
  test("Validar título", () => {
    render(<Convenio />);
    const title = screen.getByText("Componente Convenio");
    expect(title).toBeInTheDocument();
  });
});
