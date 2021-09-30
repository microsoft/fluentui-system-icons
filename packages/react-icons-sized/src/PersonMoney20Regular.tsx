import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2a4 4 0 100 8 4 4 0 000-8zM7 6a3 3 0 116 0 3 3 0 01-6 0zm-2 5a2 2 0 00-2 2c0 1.7.83 2.97 2.13 3.8A8.46 8.46 0 009 17.96v-1a7.42 7.42 0 01-3.33-1A3.36 3.36 0 014 13a1 1 0 011-1h11.73A2 2 0 0015 11H5zm14 3.5v3c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 01-1.5-1.5v-3c0-.83.67-1.5 1.5-1.5h6c.83 0 1.5.67 1.5 1.5zm-1 3v-1c-.83 0-1.5.67-1.5 1.5h1c0-.28.22-.5.5-.5zm0-3a.5.5 0 01-.5-.5h-1c0 .83.67 1.5 1.5 1.5v-1zm-6.5-.5a.5.5 0 01-.5.5v1c.83 0 1.5-.67 1.5-1.5h-1zm-.5 3.5c.28 0 .5.22.5.5h1c0-.83-.67-1.5-1.5-1.5v1zm3.5-3a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" fill={primaryFill} /></svg>;
}

const PersonMoney20Regular = wrapIcon(rawSvg({}), 'PersonMoney20Regular');
export default PersonMoney20Regular;
      