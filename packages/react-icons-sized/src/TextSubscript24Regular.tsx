import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.49 4.43c.31.27.35.74.08 1.06L10.99 12l5.03 5.87c-.3.41-.55.9-.68 1.51L10 13.15 4.57 19.5a.75.75 0 01-1.14-.98L9.01 12 3.43 5.49a.75.75 0 011.14-.98L10 10.85l5.43-6.34a.75.75 0 011.06-.08z" fill={primaryFill} /><path d="M17.75 15.52c0-.53.44-1.02.99-1.02.4 0 .73.2.89.43.14.21.22.57-.1 1.1a2.7 2.7 0 01-.68.72l-.49.37-.07.05-.48.34c-.74.56-1.56 1.34-1.56 2.74 0 .41.34.75.75.75h3.45a.75.75 0 000-1.5h-2.51c.16-.28.42-.52.78-.8l.43-.3.08-.06c.18-.13.37-.26.55-.41.38-.3.76-.66 1.05-1.14.56-.95.55-1.92.06-2.67a2.53 2.53 0 00-4.64 1.4.75.75 0 001.5 0z" fill={primaryFill} /></svg>;
}

const TextSubscript24Regular = wrapIcon(rawSvg({}), 'TextSubscript24Regular');
export default TextSubscript24Regular;
      