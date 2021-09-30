import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.5 3.25c.41 0 .75.34.75.75v4.66c.5-.42 1.1-.66 1.75-.66 1.66 0 3 1.57 3 3.5S16.66 15 15 15c-.65 0-1.26-.24-1.75-.66v.16a.75.75 0 01-1.5 0V4c0-.41.34-.75.75-.75zM15 13.5c.62 0 1.5-.67 1.5-2s-.88-2-1.5-2-1.5.67-1.5 2 .88 2 1.5 2zM6.5 3.25c.31 0 .59.2.7.5l3.64 10.5a.75.75 0 11-1.41.5l-.78-2.25H4.06l-.86 2.27a.75.75 0 01-1.4-.54l3.98-10.5c.12-.3.4-.48.71-.48zM4.62 11h3.5L6.45 6.2 4.63 11z" fill={primaryFill} /></svg>;
}

const TextCaseTitle20Filled = wrapIcon(rawSvg({}), 'TextCaseTitle20Filled');
export default TextCaseTitle20Filled;
      