import Convenio from "@/app/_components/_convenio/_generales/generales-tailwind";
import Header from "@/app/_components/_header/header";
import { render, screen } from "@testing-library/react";

describe("Prueba unitaria Header", () => {
  test("Validar título", () => {
    render(<Header text="Convenios" />);
    const title = screen.getByText("Convenios");
    expect(title).toBeInTheDocument();
  });
});
