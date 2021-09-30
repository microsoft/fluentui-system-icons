import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.2 7.23a1.25 1.25 0 011.77 0L24 22.26 39.03 7.23A1.25 1.25 0 1140.8 9L25.77 24.03 40.74 39a1.25 1.25 0 11-1.76 1.77L24 25.8 9.02 40.77A1.25 1.25 0 117.26 39l14.97-14.97L7.2 9a1.25 1.25 0 010-1.77z" fill={primaryFill} /></svg>;
}

const Dismiss48Regular = wrapIcon(rawSvg({}), 'Dismiss48Regular');
export default Dismiss48Regular;
      