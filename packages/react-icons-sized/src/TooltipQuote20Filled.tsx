import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 4c0-1.1.9-2 2-2h7a2 2 0 012 2v6a2 2 0 01-2 2H9.42l-1.48 2.74a.5.5 0 01-.88 0L5.56 12H4a2 2 0 01-2-2V4zm3.5 1a.5.5 0 00-.5.5v1a.5.5 0 00.8.4c-.2.67-.5 1.1-.65 1.25a.5.5 0 10.7.7A4.97 4.97 0 007 5.5a.5.5 0 00-.5-.5h-1zm3 0a.5.5 0 00-.5.5v1a.5.5 0 00.8.4c-.2.67-.5 1.1-.65 1.25a.5.5 0 10.7.7A4.97 4.97 0 0010 5.5a.5.5 0 00-.5-.5h-1zm-2.98 9H2.5a.5.5 0 000 1h3.56l-.54-1zm3.41 1h8.57a.5.5 0 000-1H9.48l-.55 1zM2 17.5c0-.28.22-.5.5-.5h10a.5.5 0 010 1h-10a.5.5 0 01-.5-.5z" fill={primaryFill} /></svg>;
}

const TooltipQuote20Filled = wrapIcon(rawSvg({}), 'TooltipQuote20Filled');
export default TooltipQuote20Filled;
      