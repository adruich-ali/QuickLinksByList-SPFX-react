import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import * as strings from 'QuickLinksbyListWebPartStrings';
import QuickLinksbyListApp from './components/QuickLinksbyListApp';
import { IQuickLinksbyListProps } from './components/IQuickLinksbyListProps';

export interface IQuickLinksbyListWebPartProps {
  listName: string;
}

export default class QuickLinksbyListWebPart extends BaseClientSideWebPart<IQuickLinksbyListWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IQuickLinksbyListProps> = React.createElement(
      QuickLinksbyListApp,
      {
        listTitle: this.properties.listName,
        ctx: this.context
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('listName', {
                  label: "Name of the list"
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
