import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 8H6.5a1 1 0 01-.12-2H15a1 1 0 01.12 2H6.5 15zm6.7 6.7a1 1 0 01-1.31.09l-.1-.08-2-2a1 1 0 01-.08-1.32l.08-.1 2-2a1 1 0 011.5 1.32l-.08.1L20.4 12l1.3 1.3a1 1 0 010 1.4zM15 13H3.5a1 1 0 01-.12-2H15a1 1 0 01.12 2H3.5 15zm0 5H6.5a1 1 0 01-.12-2H15a1 1 0 01.12 2H6.5 15z" fill={primaryFill} /></svg>;
}

const TextIndentIncreaseRtl24Filled = wrapIcon(rawSvg({}), 'TextIndentIncreaseRtl24Filled');
export default TextIndentIncreaseRtl24Filled;
      