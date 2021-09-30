import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3.28 2.22a.75.75 0 00-1.06 1.06L4 5.06v6.44c0 .28.22.5.5.5h6.44l7.56 7.56V20a.5.5 0 01-.5.5h-1.25a.75.75 0 100 1.5H18a2 2 0 001.8-1.14l.92.92a.75.75 0 101.06-1.06L3.28 2.22zm15.22 13.1l1.36 1.36a.75.75 0 00.14-.44v-2.49a.75.75 0 00-1.5 0v1.57zm-5.79-5.79L15.18 12h4.32a.5.5 0 00.5-.5V10h-6a2 2 0 01-1.29-.47zM12 8c0 .5.18.94.47 1.29L5.31 2.12A2 2 0 016 2h6v6zm1.5 0V2.5l6 6H14a.5.5 0 01-.5-.5zm-8 5.75a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5zm4.75 6.75a.75.75 0 100 1.5h3.5a.75.75 0 000-1.5h-3.5zm-5.5-2c.41 0 .75.34.75.75V20c0 .28.22.5.5.5h1.25a.75.75 0 010 1.5H6a2 2 0 01-2-2v-.75c0-.41.34-.75.75-.75z" fill={primaryFill} /></svg>;
}

const DocumentSplitHintOff24Filled = wrapIcon(rawSvg({}), 'DocumentSplitHintOff24Filled');
export default DocumentSplitHintOff24Filled;
      