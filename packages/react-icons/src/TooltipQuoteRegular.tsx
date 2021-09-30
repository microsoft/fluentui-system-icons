import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.5 5a.5.5 0 00-.5.5v1a.5.5 0 00.8.4c-.2.67-.5 1.1-.65 1.25a.5.5 0 10.7.7A4.97 4.97 0 007 5.5a.5.5 0 00-.5-.5h-1zm3 0a.5.5 0 00-.5.5v1a.5.5 0 00.8.4c-.2.67-.5 1.1-.65 1.25a.5.5 0 10.7.7A4.97 4.97 0 0010 5.5a.5.5 0 00-.5-.5h-1zM2 4c0-1.1.9-2 2-2h7a2 2 0 012 2v6a2 2 0 01-2 2H9.42l-1.48 2.74a.5.5 0 01-.88 0L5.56 12H4a2 2 0 01-2-2V4zm2-1a1 1 0 00-1 1v6a1 1 0 001 1h1.86c.18 0 .35.1.44.26l1.2 2.2 1.18-2.2a.5.5 0 01.44-.26H11a1 1 0 001-1V4a1 1 0 00-1-1H4zM2.5 14h3.02l.54 1H2.5a.5.5 0 010-1zm15 1H8.93l.55-1h8.02a.5.5 0 010 1zm-15 2a.5.5 0 000 1h10a.5.5 0 000-1h-10z" fill={primaryFill} /></svg>;
}

const TooltipQuoteRegular = wrapIcon(rawSvg({}), 'TooltipQuoteRegular');
export default TooltipQuoteRegular;
      