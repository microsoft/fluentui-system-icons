import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M16.58 4.13c.34.4.62.83.84 1.28a2 2 0 01-2.44.31l1.6-1.6zm-.7-.71l-1.6 1.6a2 2 0 01.3-2.43c.46.21.9.49 1.3.83zm1.04 8.02a6 6 0 00.87-5.03 3 3 0 01-3.53.04L13.1 7.6l3.82 3.83zm-3.37-5.7a3 3 0 01.04-3.53 6 6 0 00-5.03.87L12.4 6.9l1.16-1.16zM7.8 3.72l-.03.04a5.97 5.97 0 00-1.52 2.57c.46.14.93.3 1.4.5 1.04.4 2.15.98 3.06 1.77l.98-.99L7.8 3.72zm5.9 10.04a5.97 5.97 0 002.55-1.52l.04-.03-3.9-3.9-.97.99c.8.92 1.39 2.05 1.8 3.1.19.46.34.91.48 1.36zm-.44 2.57a1.7 1.7 0 01-2.1 1.65c-1.76-.4-4.54-1.23-6.2-2.89-1.65-1.65-2.5-4.44-2.9-6.2A1.7 1.7 0 014.08 6.8c.9.19 2.06.49 3.19.94a9.3 9.3 0 013.1 1.91 9.19 9.19 0 011.9 3.1c.45 1.14.75 2.29.93 3.2.03.12.04.25.04.37zm-6.4-5.18a.5.5 0 10-.7.7l2 2a.5.5 0 10.7-.7l-2-2z" fill={primaryFill} /></svg>;
}

const SportFilled = wrapIcon(rawSvg({}), 'SportFilled');
export default SportFilled;
      