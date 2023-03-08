import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

describe('Testa renderização do App', () => {
  	it("renderização", () => {
		render(<App />);

		const name = screen.getByText("Name");
		const rotationPeriod = screen.getByText("Rotation Period");
		const orbitalPeriod = screen.getByText("Orbital Period");
		const diameter = screen.getByRole("columnheader", { name: "Diameter" });
		const climate = screen.getByText("Climate");
		const gravity = screen.getByText("Gravity");
		const terrain = screen.getByText("Terrain");
		const surfaceWater = screen.getByText("Surface Water");
		const population = screen.getByRole("columnheader", { name: "Population" });

		expect(name).toBeInTheDocument();
		expect(rotationPeriod).toBeInTheDocument();
		expect(orbitalPeriod).toBeInTheDocument();
		expect(diameter).toBeInTheDocument();
		expect(climate).toBeInTheDocument();
		expect(climate).toBeInTheDocument();
		expect(gravity).toBeInTheDocument();
		expect(terrain).toBeInTheDocument();
		expect(surfaceWater).toBeInTheDocument();
		expect(population).toBeInTheDocument();
	});

	it("Renderização", async () => {
		render(<App />);

		await waitFor(() => {
			const tatooine = screen.getByText("Tatooine");
			expect(tatooine).toBeInTheDocument();
		}, { timeout: 5000 });

		const filter = screen.getByTestId("button-filter");
		const column = screen.getByTestId("column-filter");
		const comparison = screen.getByTestId("comparison-filter");
		const value = screen.getByTestId("value-filter");

		userEvent.selectOptions(column, "surface_water");
		userEvent.selectOptions(comparison, "igual a");
		userEvent.type(value, "40");
		userEvent.click(filter);
		userEvent.selectOptions(column, "diameter");
		userEvent.selectOptions(comparison, "igual a");
		userEvent.type(value, "5231123123123123123123");
		userEvent.click(filter);
	});

	it("Renderização teste", async () => {
		render(<App />);

		await waitFor(() => {
			const tatooine = screen.getByText("Tatooine");
			expect(tatooine).toBeInTheDocument;
		}, { timeout: 5000 });

		const filter = screen.getByTestId("button-filter");
		const column = screen.getByTestId("column-filter");
		const comparison = screen.getByTestId("comparison-filter");
		const value = screen.getByTestId("value-filter");
		const buttons = screen.getAllByRole("button");

		userEvent.click(filter);
		userEvent.selectOptions(column, "surface_water");
		userEvent.selectOptions(comparison, "menor que");
		userEvent.type(value, "40");
		userEvent.click(screen.getByTestId("button-filter"));
		userEvent.selectOptions(column, "diameter");
		userEvent.selectOptions(comparison, "maior que");
		userEvent.type(value, "10000");
		userEvent.click(filter);
		userEvent.click(buttons[1]);
		userEvent.type(screen.getByTestId("name-filter"), "a");
		userEvent.click(buttons[1]);
	});

  it("Teste deletar filtros", async () => {
		render(<App />);

    const compare = screen.getByTestId("comparison-filter");
    const value = screen.getByTestId("value-filter");
    const inputColuna = await screen.findByTestId("column-filter");

    userEvent.selectOptions(inputColuna, screen.getByRole('option', { name: 'surface_water'}))
    userEvent.selectOptions(compare, screen.getByRole('option', { name: 'igual a'}))
    userEvent.type(value, '10');

    const row = screen.queryAllByRole('row')
    userEvent.click(screen.getByTestId('button-filter'));
    expect(row).toHaveLength(1);

    const filtrobusca = screen.getByTestId('filter');
    expect(filtrobusca).toBeInTheDocument();

    const deletar = screen.getByRole('button', {name: /delete/i});
    userEvent.click(deletar);
    userEvent.click(screen.getByTestId('button-remove-filters'));
})
});
