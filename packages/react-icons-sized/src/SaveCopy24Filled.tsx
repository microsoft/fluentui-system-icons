import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.5 5.63c.87.3 1.5 1.14 1.5 2.12v10C22 20.1 20.1 22 17.75 22h-10c-.98 0-1.82-.63-2.12-1.5h12.12a2.75 2.75 0 002.75-2.75V5.63zM17.25 2c1.24 0 2.25 1 2.25 2.25v13c0 1.24-1.01 2.25-2.25 2.25h-13C3.01 19.5 2 18.49 2 17.25v-13C2 3.01 3 2 4.25 2h13zm-6.5 4.75c-.38 0-.7.28-.74.65l-.01.1V10H7.5a.75.75 0 00-.1 1.5H10V14a.75.75 0 001.5.1v-2.6H14a.75.75 0 00.1-1.5h-2.6V7.5a.75.75 0 00-.75-.75z" fill={primaryFill} /></svg>;
}

const SaveCopy24Filled = wrapIcon(rawSvg({}), 'SaveCopy24Filled');
export default SaveCopy24Filled;
      