import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 8.5c0 1.25-.42 2.4-1.12 3.32l4.15 4.15a.75.75 0 01-.98 1.13l-.08-.07-4.15-4.15A5.5 5.5 0 1114 8.5zM8.5 5.25a.75.75 0 00-.75.75v1.75H6a.75.75 0 000 1.5h1.75V11a.75.75 0 001.5 0V9.25H11a.75.75 0 000-1.5H9.25V6a.75.75 0 00-.75-.75z" fill={primaryFill} /></svg>;
}

const ZoomInFilled = wrapIcon(rawSvg({}), 'ZoomInFilled');
export default ZoomInFilled;
      