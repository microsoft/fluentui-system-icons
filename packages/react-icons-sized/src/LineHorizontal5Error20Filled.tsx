import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.75 3a.75.75 0 000 1.5h14.5a.75.75 0 000-1.5H2.75z" fill={primaryFill} /><path d="M2.75 9a.75.75 0 000 1.5h7.14c.38-.59.87-1.1 1.45-1.5H2.75z" fill={primaryFill} /><path d="M2.75 12h6.46c-.14.48-.21.98-.21 1.5H2.75a.75.75 0 010-1.5z" fill={primaryFill} /><path d="M2.75 15h6.46c.15.54.38 1.04.68 1.5H2.75a.75.75 0 010-1.5z" fill={primaryFill} /><path d="M2.75 6a.75.75 0 000 1.5h14.5a.75.75 0 000-1.5H2.75z" fill={primaryFill} /><path d="M19 13.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM14.5 11a.5.5 0 00-.5.5v2a.5.5 0 001 0v-2a.5.5 0 00-.5-.5zm0 5.13a.62.62 0 100-1.25.62.62 0 000 1.24z" fill={primaryFill} /></svg>;
}

const LineHorizontal5Error20Filled = wrapIcon(rawSvg({}), 'LineHorizontal5Error20Filled');
export default LineHorizontal5Error20Filled;
      