import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 10a7 7 0 0114 0v1h-3.5a.5.5 0 00-.5.5v6c0 .28.22.5.5.5H16a2 2 0 002-2v-6a8 8 0 10-16 0v6c0 1.1.9 2 2 2h2.5a.5.5 0 00.5-.5v-6a.5.5 0 00-.5-.5H3v-1z" fill={primaryFill} /></svg>;
}

const HeadphonesFilled = wrapIcon(rawSvg({}), 'HeadphonesFilled');
export default HeadphonesFilled;
      