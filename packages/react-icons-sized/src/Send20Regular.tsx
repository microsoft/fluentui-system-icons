import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2.72 2.05l15.36 7.57a.5.5 0 010 .9L2.72 18.07a.5.5 0 01-.7-.58l1.97-7.43-1.97-7.44a.5.5 0 01.7-.58zm.54 1.38l1.61 6.09.07-.02H12a.5.5 0 01.09 1H5a.5.5 0 01-.1 0l-1.63 6.2 13.45-6.63L3.26 3.43z" fill={primaryFill} /></svg>;
}

const Send20Regular = wrapIcon(rawSvg({}), 'Send20Regular');
export default Send20Regular;
      