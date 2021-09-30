import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 6.5a2.5 2.5 0 10-1.17 2.12 8.8 8.8 0 01-.96 2.76 12.06 12.06 0 01-2.22 2.77.5.5 0 00.7.7h.02c.74-.75 1.66-1.67 2.38-2.98A10.83 10.83 0 009 6.5z" fill={primaryFill} /><path d="M14.83 8.62A2.5 2.5 0 1116 6.5c0 2.33-.52 4.04-1.25 5.37-.72 1.3-1.64 2.23-2.38 2.97l-.02.01a.5.5 0 01-.7-.7c.75-.76 1.57-1.59 2.22-2.77a8.8 8.8 0 00.96-2.76z" fill={primaryFill} /></svg>;
}

const TextQuoteFilled = wrapIcon(rawSvg({}), 'TextQuoteFilled');
export default TextQuoteFilled;
      