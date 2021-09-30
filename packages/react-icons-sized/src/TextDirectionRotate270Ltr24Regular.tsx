import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5.22 5.22a.75.75 0 001.06 1.06L7 5.56v3.69a.75.75 0 001.5 0V5.56l.72.72a.75.75 0 101.06-1.06l-2-2a.75.75 0 00-1.06 0l-2 2zm7.75 15.73l-9.5-3.76a.75.75 0 01-.1-1.34l.1-.05 9.5-3.75a.75.75 0 01.65 1.35l-.1.05-2.52 1v4.1l2.52 1c.35.14.54.52.45.88l-.03.1a.75.75 0 01-.87.45l-.1-.03zM5.79 16.5l3.71 1.46v-2.92L5.8 16.5zm8.93-10.22a.75.75 0 010-1.06l2-2c.3-.3.77-.3 1.06 0l2 2a.75.75 0 01-1.06 1.06L18 5.56v14.69a.75.75 0 01-1.5 0V5.56l-.72.72c-.3.3-.77.3-1.06 0z" fill={primaryFill} /></svg>;
}

const TextDirectionRotate270Ltr24Regular = wrapIcon(rawSvg({}), 'TextDirectionRotate270Ltr24Regular');
export default TextDirectionRotate270Ltr24Regular;
      