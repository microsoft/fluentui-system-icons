import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.5 3a.5.5 0 000 1h15a.5.5 0 000-1h-15z" fill={primaryFill} /><path d="M2.5 9a.5.5 0 000 1h7.76c.31-.38.67-.72 1.08-1H2.5z" fill={primaryFill} /><path d="M2.5 12h6.7c-.08.32-.15.66-.18 1H2.5a.5.5 0 010-1z" fill={primaryFill} /><path d="M2.5 15h6.7c.1.35.24.68.4 1H2.5a.5.5 0 010-1z" fill={primaryFill} /><path d="M2.5 6a.5.5 0 000 1h15a.5.5 0 000-1h-15z" fill={primaryFill} /><path d="M19 13.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM14.5 11a.5.5 0 00-.5.5v2a.5.5 0 001 0v-2a.5.5 0 00-.5-.5zm0 5.13a.62.62 0 100-1.25.62.62 0 000 1.24z" fill={primaryFill} /></svg>;
}

const LineHorizontal5ErrorRegular = wrapIcon(rawSvg({}), 'LineHorizontal5ErrorRegular');
export default LineHorizontal5ErrorRegular;
      