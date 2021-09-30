import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2v6c0 1.1.9 2 2 2h6v10a2 2 0 01-2 2h-6.81A6.5 6.5 0 004 11.5V4c0-1.1.9-2 2-2h6zm1.5.5V8c0 .28.22.5.5.5h5.5l-6-6zM6.5 23a5.5 5.5 0 110-11 5.5 5.5 0 010 11zm-1.15-7.65a.5.5 0 00-.7-.7l-2.5 2.5a.5.5 0 000 .7l2.5 2.5a.5.5 0 00.7-.7L3.21 17.5l2.14-2.15zm2.3-.7a.5.5 0 000 .7l2.14 2.15-2.14 2.15a.5.5 0 00.7.7l2.5-2.5a.5.5 0 000-.7l-2.5-2.5a.5.5 0 00-.7 0z" fill={primaryFill} /></svg>;
}

const DocumentChevronDouble24Filled = wrapIcon(rawSvg({}), 'DocumentChevronDouble24Filled');
export default DocumentChevronDouble24Filled;
      