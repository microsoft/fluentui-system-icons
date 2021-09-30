import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.25 5A3.25 3.25 0 002 8.25v7.5C2 17.55 3.46 19 5.25 19h13.5c1.8 0 3.25-1.46 3.25-3.25v-7.5C22 6.45 20.55 5 18.75 5H5.25zm1.03 5.22l.72.72.72-.72a.75.75 0 111.06 1.06l-.72.72.72.72a.75.75 0 11-1.06 1.06L7 13.06l-.72.72a.75.75 0 01-1.06-1.06l.72-.72-.72-.72a.75.75 0 011.06-1.06zm5.5 0l.72.72.72-.72a.75.75 0 111.06 1.06l-.72.72.72.72a.75.75 0 11-1.06 1.06l-.72-.72-.72.72a.75.75 0 11-1.06-1.06l.72-.72-.72-.72a.75.75 0 011.06-1.06zm3.97 4.03c0-.41.34-.75.75-.75h1.75a.75.75 0 010 1.5H16.5a.75.75 0 01-.75-.75z" fill={primaryFill} /></svg>;
}

const Password24Filled = wrapIcon(rawSvg({}), 'Password24Filled');
export default Password24Filled;
      