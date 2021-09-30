import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 3.75a.75.75 0 011.5 0v14.69l.72-.72a.75.75 0 011.06 1.06l-2 2c-.3.3-.77.3-1.06 0l-2-2a.75.75 0 111.06-1.06l.72.72V3.75zm5.55 9.22l3.76-9.5a.75.75 0 011.34-.1l.05.1 3.75 9.5a.75.75 0 01-1.35.65l-.05-.1-1-2.52h-4.1l-1 2.52a.75.75 0 01-.88.45l-.1-.03a.75.75 0 01-.45-.87l.03-.1zM16 5.79L14.54 9.5h2.92L16 5.8zm.25 8.21a.75.75 0 00-.75.75v3.69l-.72-.72a.75.75 0 10-1.06 1.06l2 2c.3.3.77.3 1.06 0l2-2a.75.75 0 10-1.06-1.06l-.72.72v-3.69a.75.75 0 00-.75-.75z" fill={primaryFill} /></svg>;
}

const TextDirectionVertical24Regular = wrapIcon(rawSvg({}), 'TextDirectionVertical24Regular');
export default TextDirectionVertical24Regular;
      