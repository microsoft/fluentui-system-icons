import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.74 16.45A2.99 2.99 0 016 17a3 3 0 01-2.45-4.74l4.19 4.19zm5.9-5.36l-2.23 1.15a.75.75 0 00-.41.66v2.2c0 .28.16.53.41.66l2.23 1.15c.23.12.5.12.72 0l2.23-1.15a.75.75 0 00.41-.66v-2.2a.75.75 0 00-.41-.66l-2.23-1.15a.79.79 0 00-.72 0zm-5.2 4.65A2.99 2.99 0 009 14a3 3 0 00-4.74-2.45l4.19 4.19zM13 3a2 2 0 00-2 2v2c0 1.1.9 2 2 2h2a2 2 0 002-2V5a2 2 0 00-2-2h-2zm-8.09.67c.45-.9 1.73-.9 2.18 0l1.78 3.54c.4.82-.18 1.79-1.1 1.79H4.23c-.9 0-1.5-.97-1.09-1.79l1.78-3.54z" fill={primaryFill} /></svg>;
}

const DiversityFilled = wrapIcon(rawSvg({}), 'DiversityFilled');
export default DiversityFilled;
      