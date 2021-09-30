import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.75 24a3.25 3.25 0 11-6.5 0 3.25 3.25 0 016.5 0z" fill={primaryFill} /><path d="M27.25 24a3.25 3.25 0 11-6.5 0 3.25 3.25 0 016.5 0z" fill={primaryFill} /><path d="M35.5 27.25a3.25 3.25 0 100-6.5 3.25 3.25 0 000 6.5z" fill={primaryFill} /></svg>;
}

const MoreHorizontal48Regular = wrapIcon(rawSvg({}), 'MoreHorizontal48Regular');
export default MoreHorizontal48Regular;
      