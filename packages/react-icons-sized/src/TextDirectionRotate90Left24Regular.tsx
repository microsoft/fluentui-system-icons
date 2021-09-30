import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6.75 21a.75.75 0 01-.75-.75V5.56l-.72.72a.75.75 0 01-1.06-1.06l2-2c.3-.3.77-.3 1.06 0l2 2a.75.75 0 01-1.06 1.06l-.72-.72v14.69c0 .41-.34.75-.75.75zm4.28-.05l9.5-3.76a.75.75 0 00.1-1.34l-.1-.05-9.5-3.75a.75.75 0 00-.65 1.35l.1.05 2.52 1v4.1l-2.52 1a.75.75 0 00-.45.88l.03.1c.14.35.51.54.87.45l.1-.03zm7.18-4.45l-3.71 1.46v-2.92l3.7 1.46zm-2.71-5.25a.75.75 0 001.5 0V5.56l.72.72a.75.75 0 101.06-1.06l-2-2a.75.75 0 00-1.06 0l-2 2a.75.75 0 001.06 1.06l.72-.72v5.69z" fill={primaryFill} /></svg>;
}

const TextDirectionRotate90Left24Regular = wrapIcon(rawSvg({}), 'TextDirectionRotate90Left24Regular');
export default TextDirectionRotate90Left24Regular;
      