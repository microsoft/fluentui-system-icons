import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.5 5.63c.87.3 1.5 1.14 1.5 2.12v10C22 20.1 20.1 22 17.75 22h-10c-.98 0-1.82-.63-2.12-1.5h12.12a2.75 2.75 0 002.75-2.75V5.63zM17.25 2c1.24 0 2.25 1 2.25 2.25v13c0 1.24-1.01 2.25-2.25 2.25h-13C3.01 19.5 2 18.49 2 17.25v-13C2 3.01 3 2 4.25 2h13zm-3.78 5.47l-3.89 3.89-.98-1.31a.75.75 0 10-1.2.9l1.5 2c.27.37.8.4 1.13.08l4.5-4.5a.75.75 0 00-1.06-1.06z" fill={primaryFill} /></svg>;
}

const SelectAllOn24Filled = wrapIcon(rawSvg({}), 'SelectAllOn24Filled');
export default SelectAllOn24Filled;
      