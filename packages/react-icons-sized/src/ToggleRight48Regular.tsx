import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M38.5 24a5 5 0 10-10 0 5 5 0 0010 0z" fill={primaryFill} /><path d="M44 24a10 10 0 00-10-10H14a10 10 0 000 20h20a10 10 0 0010-10zm-10-7.5a7.5 7.5 0 010 15H14a7.5 7.5 0 010-15h20z" fill={primaryFill} /></svg>;
}

const ToggleRight48Regular = wrapIcon(rawSvg({}), 'ToggleRight48Regular');
export default ToggleRight48Regular;
      