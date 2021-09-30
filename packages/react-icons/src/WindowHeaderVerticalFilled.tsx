import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 5.5A2.5 2.5 0 015.5 3h9A2.5 2.5 0 0117 5.5v9a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 14.5v-9zm4 10h7.5a1 1 0 001-1v-9a1 1 0 00-1-1H7v11z" fill={primaryFill} /></svg>;
}

const WindowHeaderVerticalFilled = wrapIcon(rawSvg({}), 'WindowHeaderVerticalFilled');
export default WindowHeaderVerticalFilled;
      