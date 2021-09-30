import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.03 3.24a.75.75 0 00-1.06 0l-7.73 7.73c-.3.3-.3.77 0 1.06l.77.77.03.01c.03 0 .08 0 .13-.04a2.25 2.25 0 013.05 3.05.27.27 0 00-.03.14v.03l.78.77c.3.3.77.3 1.06 0l7.73-7.73c.3-.3.3-.77 0-1.06L16 7.19h-.03c-.03 0-.08 0-.13.03a2.24 2.24 0 01-3.33-1.97c0-.39.1-.76.28-1.08l.03-.13a.08.08 0 000-.03l-.78-.77zm-1.77-.71c.69-.68 1.8-.68 2.48 0l.77.78c.4.4.34.98.14 1.34a1.25 1.25 0 001.7 1.7c.36-.2.94-.27 1.34.14l.78.77c.68.69.68 1.8 0 2.48l-7.73 7.73c-.69.68-1.8.68-2.48 0l-.77-.78c-.4-.4-.34-.98-.14-1.34a1.25 1.25 0 00-1.7-1.7c-.36.2-.94.27-1.34-.14l-.78-.77a1.75 1.75 0 010-2.48l7.73-7.73z" fill={primaryFill} /></svg>;
}

const TicketDiagonalRegular = wrapIcon(rawSvg({}), 'TicketDiagonalRegular');
export default TicketDiagonalRegular;
      