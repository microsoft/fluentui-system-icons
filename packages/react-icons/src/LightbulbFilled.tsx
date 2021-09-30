import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M13.07 15l-.38 1.6a1.84 1.84 0 01-1.67 1.4H9.13c-.82 0-1.54-.52-1.78-1.26l-.04-.14-.38-1.6h6.14zM10 2c3.31 0 6 2.6 6 5.8 0 1.68-.75 3.22-2.2 4.6a.6.6 0 00-.15.2l-.02.09L13.3 14H6.7l-.31-1.31a.6.6 0 00-.17-.3A6.32 6.32 0 014 8.04L4 7.8v-.2A5.91 5.91 0 0110 2z" fill={primaryFill} /></svg>;
}

const LightbulbFilled = wrapIcon(rawSvg({}), 'LightbulbFilled');
export default LightbulbFilled;
      