import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.22 13.96C3.55 13.66 2 11.8 2 10v-.5C2 8.67 2.67 8 3.5 8h2.1c-.16.32-.3.65-.4 1H3.5a.5.5 0 00-.5.5v.5c0 1.13.88 2.33 2.5 2.8.2.42.44.8.72 1.16zm3.4-8.9a2.75 2.75 0 10-3.3 1.86c.32-.37.68-.7 1.08-.97a1.76 1.76 0 01-2.15-1.7 1.75 1.75 0 113 1.23c.43-.2.89-.33 1.38-.41zM6.64 9.93a2 2 0 001.44-2.48L7.9 6.9c.25-.2.53-.37.82-.5l.34.36a2 2 0 002.9 0l.33-.35c.3.14.58.32.84.52l-.13.42a2 2 0 001.46 2.52l.35.09a4.7 4.7 0 010 1.01l-.45.12a2 2 0 00-1.43 2.48l.15.55c-.25.2-.53.37-.82.5l-.34-.36a2 2 0 00-2.9 0l-.33.35c-.3-.14-.58-.32-.84-.52l.13-.42a2 2 0 00-1.46-2.52l-.35-.09a4.7 4.7 0 010-1.01l.45-.12zm4.87.58a1 1 0 10-2 0 1 1 0 002 0z" fill={primaryFill} /></svg>;
}

const PersonSettings16Regular = wrapIcon(rawSvg({}), 'PersonSettings16Regular');
export default PersonSettings16Regular;
      