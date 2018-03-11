import { GridWidget } from './grid-widget.interface';
import { element, ElementFinder, by, promise } from 'protractor';
import Promise = promise.Promise;

export class GridWidgetImpl implements GridWidget {
	private grid: ElementFinder;

	constructor(rootElement: ElementFinder) {
		this.grid = rootElement.element(by.css('.grid'));
	}

	searchElementByName(name: string): ElementFinder {
		return this.grid.element(by.cssContainingText('td.cell', name));
	}

	getRowsCount(): Promise<number> {
		return this.grid.all(by.css('tbody > tr')).count();
	}

	getColumnsCount(): Promise<number> {
		return this.grid.all(by.css('tbody > tr:first-child > td')).count();
	}

	getResultsCount(): Promise<number> {
		return this.grid.all(by.css('td')).count();
	}
}

