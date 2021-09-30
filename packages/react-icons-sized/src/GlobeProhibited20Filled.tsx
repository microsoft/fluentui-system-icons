import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.32 6.5c.17-.87.4-1.66.67-2.32.3-.73.65-1.3 1-1.66C9.36 2.15 9.7 2 10 2c.3 0 .65.15 1 .52.36.37.71.93 1.01 1.66.28.66.5 1.45.67 2.32H7.32zm-.26-2.7c.24-.58.52-1.1.83-1.52A8.02 8.02 0 002.8 6.5h3.5c.18-1 .44-1.92.76-2.7zm5.88 0a7.19 7.19 0 00-.83-1.52A8.02 8.02 0 0117.2 6.5h-3.5c-.18-1-.44-1.92-.76-2.7zm.91 3.7h3.75a8 8 0 01.4 2.75 5.48 5.48 0 00-4.02-1.23c-.03-.52-.07-1.03-.13-1.52zm-.87 1.71a19 19 0 00-.14-1.71H7.16a19.44 19.44 0 000 5h2.21a5.51 5.51 0 013.61-3.29zM9.1 13.5H7.32c.17.87.4 1.66.67 2.32.3.73.65 1.3 1 1.66.36.37.7.52 1.01.52.08 0 .15 0 .23-.03A5.48 5.48 0 019.1 13.5zm-6.29 0c1 2.05 2.85 3.6 5.1 4.22a7.19 7.19 0 01-.84-1.52c-.32-.78-.58-1.7-.76-2.7H2.8zm3.35-1H2.4a8 8 0 010-5h3.75a20.52 20.52 0 000 5zm3.85 2a4.5 4.5 0 109 0 4.5 4.5 0 00-9 0zm2.4 2.8l4.9-4.9a3.5 3.5 0 01-4.9 4.9zm-.7-.7a3.5 3.5 0 014.9-4.9l-4.9 4.9z" fill={primaryFill} /></svg>;
}

const GlobeProhibited20Filled = wrapIcon(rawSvg({}), 'GlobeProhibited20Filled');
export default GlobeProhibited20Filled;
      