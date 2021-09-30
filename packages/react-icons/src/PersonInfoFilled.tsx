import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 2a4 4 0 100 8 4 4 0 000-8zm-5 9a2 2 0 00-2 2c0 1.7.83 2.97 2.13 3.8A9.14 9.14 0 009 18c.41 0 .82-.02 1.21-.06a5.48 5.48 0 01.05-6.94H4zm9.88 1.5a.62.62 0 111.24 0 .62.62 0 01-1.24 0zm1.12 4a.5.5 0 01-1 0v-2a.5.5 0 011 0v2zm-5-2a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zm1 0a3.5 3.5 0 107 0 3.5 3.5 0 00-7 0z" fill={primaryFill} /></svg>;
}

const PersonInfoFilled = wrapIcon(rawSvg({}), 'PersonInfoFilled');
export default PersonInfoFilled;
      