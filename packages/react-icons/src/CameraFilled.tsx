import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 10a3 3 0 116 0 3 3 0 01-6 0z" fill={primaryFill} /><path d="M6.78 2.83c.26-.51.78-.83 1.34-.83h3.77c.57 0 1.09.32 1.34.83L13.81 4h1.7A2.5 2.5 0 0118 6.5v8a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 012 14.5v-8A2.5 2.5 0 014.5 4h1.68l.6-1.17zM10 6a4 4 0 100 8 4 4 0 000-8z" fill={primaryFill} /></svg>;
}

const CameraFilled = wrapIcon(rawSvg({}), 'CameraFilled');
export default CameraFilled;
      