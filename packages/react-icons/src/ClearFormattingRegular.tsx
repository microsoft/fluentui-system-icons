import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.25 3a.5.5 0 00-.5.42l-.24 1.5a.5.5 0 00.98.16L4.67 4h3.57l-1.73 9.91a.5.5 0 00-.01.09h-1a.5.5 0 000 1h3a.5.5 0 000-1h-1l1.74-9.91A.5.5 0 009.25 4h3.41l-.15.92a.5.5 0 10.98.16l.25-1.5a.5.5 0 00-.49-.58h-9zM9.6 17c-.16-.32-.3-.65-.4-1H2.5a.5.5 0 000 1h7.1zm9.4-2.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.65-1.15a.5.5 0 00-.7-.7l-1.15 1.14-1.15-1.14a.5.5 0 00-.7.7l1.14 1.15-1.14 1.15a.5.5 0 00.7.7l1.15-1.14 1.15 1.14a.5.5 0 00.7-.7l-1.14-1.15 1.14-1.15z" fill={primaryFill} /></svg>;
}

const ClearFormattingRegular = wrapIcon(rawSvg({}), 'ClearFormattingRegular');
export default ClearFormattingRegular;
      