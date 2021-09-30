import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.25 6A6.25 6.25 0 006 12.25v23.5C6 39.2 8.8 42 12.25 42H26v-9.75C26 28.8 28.8 26 32.25 26H42V12.25C42 8.8 39.2 6 35.75 6h-23.5zm29.2 22.5h-9.2a3.75 3.75 0 00-3.75 3.75v9.2c.68-.31 1.3-.74 1.85-1.28l9.82-9.82c.54-.54.97-1.17 1.28-1.85z" fill={primaryFill} /></svg>;
}

const Note48Filled = wrapIcon(rawSvg({}), 'Note48Filled');
export default Note48Filled;
      