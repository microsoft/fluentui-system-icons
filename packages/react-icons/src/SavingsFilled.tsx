import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9.65 4.06l.18.02a4.5 4.5 0 00-.7 3.2c.15.98.91 1.6 1.6 1.87l3.03 1.26c.68.29 1.65.39 2.46-.2a4.5 4.5 0 001.49-1.86c.19.58.29 1.23.29 1.96 0 1.75-.54 2.98-1.09 3.78a4.95 4.95 0 01-.91 1v1.41c0 .83-.67 1.5-1.5 1.5h-1.38c-.62 0-1.12-.5-1.12-1.12a.12.12 0 00-.12-.11h-1.76a.12.12 0 00-.12.11C10 17.5 9.5 18 8.88 18H7.5A1.5 1.5 0 016 16.5v-.54l-.16-.1c-.28-.18-.69-.5-1.2-1-.62-.64-1-1.34-1.2-1.8-.07-.17-.2-.27-.33-.3-.64-.1-1.11-.65-1.11-1.3V9.95c0-.63.45-1.17 1.08-1.27.11-.02.24-.13.3-.3a4.4 4.4 0 011-1.71A6.63 6.63 0 016 5.47v-2.3c0-.36.23-.61.48-.71.25-.1.58-.08.83.15.29.28.68.63 1.11.92.44.3.87.5 1.23.53zM6.75 9.5a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /><path d="M17.04 7.04a3.5 3.5 0 01-1.4 2.36c-.43.31-1 .3-1.5.09l-3.03-1.26c-.48-.2-.88-.56-.98-1.05l-.02-.07a3.5 3.5 0 116.93-.07z" fill={primaryFill} /></svg>;
}

const SavingsFilled = wrapIcon(rawSvg({}), 'SavingsFilled');
export default SavingsFilled;
      