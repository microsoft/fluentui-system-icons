import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.48 3.2c-.3.43-.48.97-.48 1.55v1.5a.75.75 0 001.5 0v-1.5c0-.16.03-.32.09-.46l2.16 2.17v.29a.75.75 0 001 .7l2.5 2.5v3.55H9A.75.75 0 009 15h2a.75.75 0 000-1.5h-.25v-2.04l4.96 4.95c-.14.06-.3.09-.46.09h-1.5a.75.75 0 000 1.5h1.5c.58 0 1.12-.18 1.56-.48l.34.33a.5.5 0 00.7-.7l-.33-.34-1.1-1.1L5.94 5.24 4.29 3.6l-1.1-1.1-.34-.34a.5.5 0 10-.7.7l.33.34zM18 15.24c0 .2-.02.39-.06.57l-1.44-1.44v-.63a.75.75 0 011.5 0v1.5zM10.75 6.5v2.13l-1.5-1.5V6.5h-.63L7.12 5h6.38c.41 0 .75.34.75.75v1a.75.75 0 01-1.5 0V6.5h-2zm-4.5-3h-.63L4.18 2.06c.18-.04.37-.06.57-.06h1.5a.75.75 0 010 1.5zm-1.5 13c-.69 0-1.25-.56-1.25-1.25v-1.5a.75.75 0 00-1.5 0v1.5A2.75 2.75 0 004.75 18h1.5a.75.75 0 000-1.5h-1.5zM16.5 4.75c0-.69-.56-1.25-1.25-1.25h-1.5a.75.75 0 010-1.5h1.5A2.75 2.75 0 0118 4.75v1.5a.75.75 0 01-1.5 0v-1.5z" fill={primaryFill} /></svg>;
}

const ScanTypeOffFilled = wrapIcon(rawSvg({}), 'ScanTypeOffFilled');
export default ScanTypeOffFilled;
      