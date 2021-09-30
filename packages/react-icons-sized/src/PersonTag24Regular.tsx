import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M11 14v1.5H4.25a.75.75 0 00-.75.74v.58c0 .54.2 1.06.54 1.46C5.29 19.75 7.26 20.5 10 20.5c1.1 0 2.08-.12 2.94-.37l1.17 1.2c-1.18.44-2.55.67-4.11.67-3.15 0-5.53-.9-7.1-2.74a3.75 3.75 0 01-.9-2.44v-.58C2 15 3 14 4.25 14H11zm4-7A5 5 0 105 7a5 5 0 0010 0zM6.5 7a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0zm10.07 15.4l-4-4.07a2 2 0 01-.57-1.4v-2.94c0-1.1.9-2 2-2h2.92a2 2 0 011.4.58l4.08 4.02a2 2 0 01.02 2.83l-3 3a2 2 0 01-2.85-.02zM15 16a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /></svg>;
}

const PersonTag24Regular = wrapIcon(rawSvg({}), 'PersonTag24Regular');
export default PersonTag24Regular;
      