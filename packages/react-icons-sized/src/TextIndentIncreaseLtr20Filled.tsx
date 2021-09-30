import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 4.75c0-.41.34-.75.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 016 4.75zM6.75 9a.75.75 0 000 1.5h10.5a.75.75 0 000-1.5H6.75zm0 5a.75.75 0 000 1.5h5.5a.75.75 0 000-1.5h-5.5zM3.03 7.72a.75.75 0 00-1.06 1.06l.97.97-.97.97a.75.75 0 101.06 1.06l1.5-1.5c.3-.3.3-.77 0-1.06l-1.5-1.5z" fill={primaryFill} /></svg>;
}

const TextIndentIncreaseLtr20Filled = wrapIcon(rawSvg({}), 'TextIndentIncreaseLtr20Filled');
export default TextIndentIncreaseLtr20Filled;
      