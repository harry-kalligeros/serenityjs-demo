import { element, by, promise } from 'protractor';
import { GridWidget } from './grid-widget.interface';
import { GridWidgetImpl } from './grid-widget.impl';
import Promise = promise.Promise;

export class SpeakersPageImpl {
	private rootElement = element(by.css('app-speakers'));
	private title = this.rootElement.element(by.css('.speakers-title'));
	private searchBox = this.rootElement.element(by.css('.speakers-searchbox'));
	private speakersGrid: GridWidget = new GridWidgetImpl(this.rootElement);

	public getTitle(): Promise<string> {
		return this.title.getText();
	}

	public getResultsCount(): Promise<number> {
		return this.speakersGrid.getResultsCount();
	}

	public searchSpeaker(name: string): Promise<void> {
		this.searchBox.clear();
		return this.searchBox.sendKeys(name.trim());
	}
}
