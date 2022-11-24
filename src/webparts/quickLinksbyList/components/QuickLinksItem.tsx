import * as React from 'react';
// import styles from './QuickLinksbyList.module.scss';
// import { IQuickLinksbyListProps } from './IQuickLinksbyListProps';
// import { escape } from '@microsoft/sp-lodash-subset';



function QuickLinksItem(props:any){
return(
  <>
  <div><a href={props.link.Url}>{props.link.Title}</a></div>
  <div>{props.link.Description}</div>
  </>
)
}

export default QuickLinksItem;