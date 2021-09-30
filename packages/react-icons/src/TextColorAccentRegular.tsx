import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4 13.5c0-.28.22-.5.5-.5h11c.28 0 .5.22.5.5v3a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-3z" fill={primaryFill} /></svg>;
}

const TextColorAccentRegular = wrapIcon(rawSvg({}), 'TextColorAccentRegular');
export default TextColorAccentRegular;
      