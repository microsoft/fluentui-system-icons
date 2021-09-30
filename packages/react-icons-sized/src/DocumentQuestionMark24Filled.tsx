import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2v6c0 1.1.9 2 2 2h6v10a2 2 0 01-2 2h-6.81A6.5 6.5 0 004 11.5V4c0-1.1.9-2 2-2h6zm1.5.5V8c0 .28.22.5.5.5h5.5l-6-6zM1 17.5a5.5 5.5 0 1011 0 5.5 5.5 0 00-11 0zm4.75 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM4.5 16a2 2 0 114 0c0 .73-.21 1.14-.75 1.7l-.27.28-.11.12c-.29.32-.37.53-.37.9a.5.5 0 01-1 0c0-.73.21-1.14.75-1.7l.27-.28.11-.12c.29-.32.37-.53.37-.9a1 1 0 10-2 0 .5.5 0 01-1 0z" fill={primaryFill} /></svg>;
}

const DocumentQuestionMark24Filled = wrapIcon(rawSvg({}), 'DocumentQuestionMark24Filled');
export default DocumentQuestionMark24Filled;
      