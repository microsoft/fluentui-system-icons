import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.22 13.96C3.55 13.66 2 11.8 2 10v-.5C2 8.67 2.67 8 3.5 8h2.1c-.16.32-.3.65-.4 1H3.5a.5.5 0 00-.5.5v.5c0 1.13.88 2.33 2.5 2.8.2.42.44.8.72 1.16zm3.4-8.9a2.75 2.75 0 10-3.3 1.86c.32-.37.68-.7 1.08-.97a1.76 1.76 0 01-2.15-1.7 1.75 1.75 0 113 1.23c.43-.2.89-.33 1.38-.41zM10.5 15a4.5 4.5 0 100-9 4.5 4.5 0 000 9zm0-7c.28 0 .5.22.5.5V10h1.5a.5.5 0 010 1H11v1.5a.5.5 0 01-1 0V11H8.5a.5.5 0 010-1H10V8.5c0-.28.22-.5.5-.5z" fill={primaryFill} /></svg>;
}

const PersonAdd16Regular = wrapIcon(rawSvg({}), 'PersonAdd16Regular');
export default PersonAdd16Regular;
      