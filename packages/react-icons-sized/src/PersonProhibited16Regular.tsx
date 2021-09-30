import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10.5 15a4.5 4.5 0 110-9 4.5 4.5 0 010 9zm-2.8-2.4l4.9-4.9a3.5 3.5 0 00-4.9 4.9zm.7.7a3.5 3.5 0 004.9-4.9l-4.9 4.9zm-2.18.66C3.55 13.66 2 11.8 2 10v-.5C2 8.67 2.67 8 3.5 8h2.1c-.16.32-.3.65-.4 1H3.5a.5.5 0 00-.5.5v.5c0 1.13.88 2.33 2.5 2.8.2.42.44.8.72 1.16zm3.4-8.9a2.75 2.75 0 10-3.3 1.86c.32-.37.68-.7 1.08-.97a1.76 1.76 0 01-2.15-1.7 1.75 1.75 0 113 1.23c.43-.2.89-.33 1.38-.41z" fill={primaryFill} /></svg>;
}

const PersonProhibited16Regular = wrapIcon(rawSvg({}), 'PersonProhibited16Regular');
export default PersonProhibited16Regular;
      