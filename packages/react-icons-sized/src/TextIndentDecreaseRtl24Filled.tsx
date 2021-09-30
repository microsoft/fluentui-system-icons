import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15 16H6.5a1 1 0 00-.12 2H15a1 1 0 00.12-2H6.5 15zm6.7-4.7l-2-2a1 1 0 00-1.49 1.31l.08.1L19.6 12l-1.3 1.3a1 1 0 001.32 1.49l.1-.08 2-2a1 1 0 00.08-1.32l-.08-.1-2-2 2 2zM15 11H3.5a1 1 0 00-.12 2H15a1 1 0 00.12-2H3.5 15zm0-5H6.5a1 1 0 00-.12 2H15a1 1 0 00.12-2H6.5 15z" fill={primaryFill} /></svg>;
}

const TextIndentDecreaseRtl24Filled = wrapIcon(rawSvg({}), 'TextIndentDecreaseRtl24Filled');
export default TextIndentDecreaseRtl24Filled;
      