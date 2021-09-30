import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17 6.5a.5.5 0 00-.32-.47l-8-3a.5.5 0 10-.36.94l2.68 1v3.06l-2.68 1a.5.5 0 00.36.94l8-3A.5.5 0 0017 6.5zm-1.92 0L12 7.65v-2.3l3.08 1.15zM5 3.5a.5.5 0 011 0v11.8l1.15-1.15a.5.5 0 11.7.7l-2 2a.5.5 0 01-.35.15.5.5 0 01-.35-.15l-2-2a.5.5 0 11.7-.7L5 15.29V3.5zm8 7a.5.5 0 111 0v4.8l1.15-1.15a.5.5 0 01.7.7l-2 2a.5.5 0 01-.7 0l-2-2a.5.5 0 01.7-.7L13 15.29V10.5z" fill={primaryFill} /></svg>;
}

const TextDirectionRotate90Ltr20Regular = wrapIcon(rawSvg({}), 'TextDirectionRotate90Ltr20Regular');
export default TextDirectionRotate90Ltr20Regular;
      