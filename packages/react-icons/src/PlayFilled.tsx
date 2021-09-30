import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.22 8.68a1.5 1.5 0 010 2.63l-10 5.5A1.5 1.5 0 015 15.5v-11A1.5 1.5 0 017.22 3.2l10 5.5z" fill={primaryFill} /></svg>;
}

const PlayFilled = wrapIcon(rawSvg({}), 'PlayFilled');
export default PlayFilled;
      