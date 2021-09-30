import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.78 6.28c.3-.3.3-.77 0-1.06L4.56 5h12.69a.75.75 0 000-1.5H4.56l.22-.22a.75.75 0 00-1.06-1.06l-1.5 1.5c-.3.3-.3.77 0 1.06l1.5 1.5c.3.3.77.3 1.06 0zM18 9.25c0 .41-.34.75-.75.75H2.75a.75.75 0 010-1.5h14.5c.41 0 .75.34.75.75zM2.75 13.5h12.69l-.22-.22a.75.75 0 111.06-1.06l1.5 1.5c.3.3.3.77 0 1.06l-1.5 1.5a.75.75 0 11-1.06-1.06l.22-.22H2.75a.75.75 0 010-1.5z" fill={primaryFill} /></svg>;
}

const TextAlignDistributed20Filled = wrapIcon(rawSvg({}), 'TextAlignDistributed20Filled');
export default TextAlignDistributed20Filled;
      