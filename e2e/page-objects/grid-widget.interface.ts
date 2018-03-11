import { promise, ElementFinder } from 'protractor';
import Promise = promise.Promise;

export interface GridWidget {

	searchElementByName(name: string): ElementFinder;
	getRowsCount(): Promise<number>;
	getColumnsCount(): Promise<number>;
	getResultsCount(): Promise<number>;

}
