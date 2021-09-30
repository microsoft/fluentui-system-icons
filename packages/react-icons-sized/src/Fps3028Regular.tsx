import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={28} height={28} viewBox="0 0 28 28" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M17.5 3A3.5 3.5 0 0014 6.5v5a3.5 3.5 0 107 0v-5A3.5 3.5 0 0017.5 3zm0 10.5a2 2 0 01-2-2v-5a2 2 0 114 0v5a2 2 0 01-2 2z" fill={primaryFill} /><path d="M18 19.85c0-1.3 1.05-2.35 2.35-2.35h1.15a2 2 0 012 2 .75.75 0 01-1.5 0 .5.5 0 00-.5-.5h-1.15a.85.85 0 00-.85.85V20a1 1 0 001 1h.5a2.5 2.5 0 012.5 2.5v.15c0 1.3-1.05 2.35-2.35 2.35h-.65a2.5 2.5 0 01-2.5-2.5.75.75 0 011.5 0 1 1 0 001 1h.65c.47 0 .85-.38.85-.85v-.15a1 1 0 00-1-1h-.5A2.5 2.5 0 0118 20v-.15z" fill={primaryFill} /><path d="M5.75 17.5a.75.75 0 00-.75.75v7a.75.75 0 001.5 0V22.5h1.75a.75.75 0 000-1.5H6.5v-2h2.75a.75.75 0 000-1.5h-3.5z" fill={primaryFill} /><path d="M11.5 18.25c0-.41.34-.75.75-.75h2.25a2.5 2.5 0 010 5H13v2.75a.75.75 0 01-1.5 0v-7zM13 21h1.5a1 1 0 100-2H13v2z" fill={primaryFill} /><path d="M9.62 4.5h-.25c-.73 0-1.36.42-1.67 1.03-.13.26-.37.47-.66.47-.54 0-.98-.48-.76-.98A3.38 3.38 0 019.38 3h.24a3.37 3.37 0 012.13 6 3.37 3.37 0 01-2.13 6h-.25a3.38 3.38 0 01-3.09-2.02c-.22-.5.22-.98.76-.98.29 0 .53.21.66.47.3.61.94 1.03 1.67 1.03h.25a1.87 1.87 0 000-3.75H9.5a.75.75 0 010-1.5h.12a1.87 1.87 0 100-3.75z" fill={primaryFill} /></svg>;
}

const Fps3028Regular = wrapIcon(rawSvg({}), 'Fps3028Regular');
export default Fps3028Regular;
      