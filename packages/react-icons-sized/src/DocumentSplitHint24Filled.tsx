import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 8V2H6a2 2 0 00-2 2v7.5c0 .28.22.5.5.5h15a.5.5 0 00.5-.5V10h-6a2 2 0 01-2-2zm1.5 0V2.5l6 6H14a.5.5 0 01-.5-.5zm-8 5.75a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5zM19.25 13c.41 0 .75.34.75.75v2.5a.75.75 0 01-1.5 0v-2.5c0-.41.34-.75.75-.75zm-9 7.5a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5zm-5.5-2c.41 0 .75.34.75.75V20c0 .28.22.5.5.5h1.25a.75.75 0 010 1.5H6a2 2 0 01-2-2v-.75c0-.41.34-.75.75-.75zm13.75.75a.75.75 0 011.5 0V20a2 2 0 01-2 2h-1.25a.75.75 0 010-1.5H18a.5.5 0 00.5-.5v-.75z" fill={primaryFill} /></svg>;
}

const DocumentSplitHint24Filled = wrapIcon(rawSvg({}), 'DocumentSplitHint24Filled');
export default DocumentSplitHint24Filled;
      