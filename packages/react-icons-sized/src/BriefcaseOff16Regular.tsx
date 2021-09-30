import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.2 13.9l.95.95a.5.5 0 00.7-.7l-13-13a.5.5 0 10-.7.7L4.29 5H3.5A2.5 2.5 0 001 7.5v4A2.5 2.5 0 003.5 14h9c.24 0 .47-.03.7-.1zm-.9-.9H3.5A1.5 1.5 0 012 11.5v-4C2 6.67 2.67 6 3.5 6h1.8l7 7zm1.7-1.5c0 .12-.01.23-.04.34l.78.78c.17-.34.26-.72.26-1.12v-4A2.5 2.5 0 0012.5 5H11V2.5a.5.5 0 00-.5-.5h-5a.5.5 0 00-.5.5v.38l1 1V3h4v2H7.12l1 1h4.38c.83 0 1.5.67 1.5 1.5v4z" fill={primaryFill} /></svg>;
}

const BriefcaseOff16Regular = wrapIcon(rawSvg({}), 'BriefcaseOff16Regular');
export default BriefcaseOff16Regular;
      