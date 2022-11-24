import * as React from 'react';
import styles from './QuickLinksbyList.module.scss';
import { IQuickLinksbyListProps } from './IQuickLinksbyListProps';
// import { escape } from '@microsoft/sp-lodash-subset';
import QuickLinksItem from './QuickLinksItem';
import DocsItems from './DocsItems'
import {SPHttpClient, SPHttpClientResponse} from '@microsoft/sp-http'

export default class QuickLinksbyListApp extends React.Component<IQuickLinksbyListProps, any> {
 
  private _client:SPHttpClient =this.props.ctx.spHttpClient;
  private _webUrl:string = this.props.ctx.pageContext.web.absoluteUrl;
  state = {
    items: [] as string[],
    documnets: [] as string[]
  }
  componentDidMount(){
    this._getQuickLinks();
    this._getDocuments();
  }

  private _getDocuments(){
 
    let url = this._webUrl+ "/_api/web/Lists/getbytitle('Documents')/items?$select=File/Name,File/LinkingUri,Created,Modified&$expand=File"
 
    this._getSPData(this._client, url).then(d => {
     let data = d.value;
     this.setState({
      documnets:data,
     })
    });
 
  }

  private _getQuickLinks(){
    let url = this._webUrl+ "/_api/web/Lists/getbytitle('Qucklinks')/items"
    this._getSPData(this._client, url).then(d => {
     let data = d.value;
     console.log('Documents is Heeeeeeereeeeee', JSON.stringify(data));
     this.setState({
      items:data,
     })

    });
  }
  private async _getSPData(client:SPHttpClient, url:string) :Promise<any>{
    let resp:SPHttpClientResponse = await client.get(url, SPHttpClient.configurations.v1);
    let json = resp.json()
    return json;
  }

  public render(): React.ReactElement<IQuickLinksbyListProps> {
    return (
      <div className={styles.quickLinksbyList}>
        <h3>Quick Linkss</h3>
        <ul>
        {this.state.items.map(item => <QuickLinksItem link={item} />)}
        </ul>
        <hr />
        <h3>Documents items</h3>
        <ul>
        {this.state.documnets.map(doc => <DocsItems link={doc} />)}
        </ul>
      </div>
    );
  }
}
