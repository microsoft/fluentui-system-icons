import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.7 2.74a.75.75 0 00-1.4 0l-3.5 9.5a.75.75 0 001.4.52l.93-2.51h3.74l.93 2.5a.75.75 0 101.4-.5l-3.5-9.5zm.62 6.01H3.68L5 5.17l1.32 3.58zm4.18-6.5c.41 0 .75.34.75.75v4.3c.34-.2.7-.3 1.1-.3 1.44 0 2.6 1.4 2.6 3.13 0 1.72-1.16 3.12-2.6 3.12-.43 0-.85-.13-1.21-.36a.75.75 0 01-1.39-.39V3c0-.41.34-.75.75-.75zm.75 7.88c0 1.16.74 1.62 1.1 1.62.37 0 1.1-.46 1.1-1.63 0-1.16-.73-1.62-1.1-1.62-.36 0-1.1.46-1.1 1.63z" fill={primaryFill} /></svg>;
}

const TextCaseTitle16Filled = wrapIcon(rawSvg({}), 'TextCaseTitle16Filled');
export default TextCaseTitle16Filled;
      