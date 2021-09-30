import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.75 3a.75.75 0 00-.75.75v14.69l-.72-.72a.75.75 0 00-1.06 1.06l2 2c.3.3.77.3 1.06 0l2-2a.75.75 0 10-1.06-1.06l-.72.72V3.75A.75.75 0 006.75 3zm4.28.05l9.5 3.76c.6.23.63 1.04.1 1.34l-.1.05-9.5 3.75a.75.75 0 01-.65-1.35l.1-.05 2.52-1v-4.1l-2.52-1a.75.75 0 01-.45-.88l.03-.1a.75.75 0 01.87-.45l.1.03zm7.18 4.45L14.5 6.04v2.92l3.7-1.46zm-2.71 5.25a.75.75 0 011.5 0v5.69l.72-.72a.75.75 0 111.06 1.06l-2 2c-.3.3-.77.3-1.06 0l-2-2a.75.75 0 111.06-1.06l.72.72v-5.69z" fill={primaryFill} /></svg>;
}

const TextDirectionRotate90Ltr24Regular = wrapIcon(rawSvg({}), 'TextDirectionRotate90Ltr24Regular');
export default TextDirectionRotate90Ltr24Regular;
      