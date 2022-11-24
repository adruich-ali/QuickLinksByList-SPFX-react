import * as React from 'react';
// import styles from './QuickLinksbyList.module.scss';
// import { IQuickLinksbyListProps } from './IQuickLinksbyListProps';
// import { escape } from '@microsoft/sp-lodash-subset';



function DocsItems(props:any){
return(
  <>
  <div><a target="_blank" href={props.link.File.LinkingUri}>{props.link.File.Name}</a></div>
  <div>Created:d {props.link.Created}</div>
  <div>Modified: {props.link.Modified}</div>
  </>
)
}

export default DocsItems;