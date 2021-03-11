import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import CreateDoc from "./index";

test("Should require fields if submitting without filling", async () => {
  const { container } = render(<CreateDoc />);

  const input = screen.getByText("Submit");

  await waitFor(() => {
    fireEvent.click(input);
  });

  expect(container.querySelector("#bui-2")).toHaveTextContent("Required");
});

test("Should send the payload correctly", async () => {
  const handleSubmit = jest.fn();

  const { container } = render(<CreateDoc handleSubmit={handleSubmit} />);

  const input = screen.getByText("Submit");

  const inputs = container.querySelectorAll("input");

  await waitFor(() => {
    fireEvent.change(inputs[0], { target: { value: "999999" } });
  });
  await waitFor(() => {
    fireEvent.change(inputs[1], { target: { value: "110001" } });
    fireEvent.change(inputs[3], { target: { value: 33 } });
    fireEvent.change(inputs[5], { target: { value: 55 } });
  });
  await waitFor(() => {
    fireEvent.click(input);
  });

  expect(handleSubmit.mock.calls[0][0]).toEqual({
    anomes: "99/9999",
    ibge: "110001",
    qtd_ben_bas: 33,
    qtd_ben_bsp: 0,
    qtd_ben_bvg: 0,
    qtd_ben_bvj: 55,
    qtd_ben_bvn: 0,
    qtd_ben_var: 0,
    siglauf: [
      {
        id: "AC",
        label: "Acre",
      },
    ],
  });
});
