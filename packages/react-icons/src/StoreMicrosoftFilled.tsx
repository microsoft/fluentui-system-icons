import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7 2.5V4H2.5a.5.5 0 00-.5.5v10A2.5 2.5 0 004.5 17h11a2.5 2.5 0 002.5-2.5v-10a.5.5 0 00-.5-.5H13V2.5c0-.83-.67-1.5-1.5-1.5h-3C7.67 1 7 1.67 7 2.5zM8.5 2h3c.28 0 .5.22.5.5V4H8V2.5c0-.28.22-.5.5-.5zm-2 8V7h3v3h-3zm0 4v-3h3v3h-3zm7-4h-3V7h3v3zm-3 4v-3h3v3h-3z" fill={primaryFill} /></svg>;
}

const StoreMicrosoftFilled = wrapIcon(rawSvg({}), 'StoreMicrosoftFilled');
export default StoreMicrosoftFilled;
      