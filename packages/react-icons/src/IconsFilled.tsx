import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2a4 4 0 00-3.46 6H3.42C2.64 8 2 8.64 2 9.42 2 12.5 4.5 15 7.58 15h1.27a4.55 4.55 0 01-.35-1.75c0-1.2.67-2.21 1.46-2.9a5.91 5.91 0 013.99-1.4 3.01 3.01 0 00-.74-.57 4 4 0 00.25-.38h1.7C16.19 8 17 7.18 17 6.17 17 5.52 16.48 5 15.83 5h-1.96A4 4 0 0010 2z" fill={primaryFill} /><path d="M17.5 10.5a.5.5 0 01.45.72l-.22.38-.02.02-.32.54a7.5 7.5 0 00-.77 1.86c-.16.56-.37 1.31-.74 1.94a2.94 2.94 0 01-2.63 1.54c-1.06 0-1.8-.53-2.27-1.03a4.1 4.1 0 01-.59-.81c-.6.6-1.06 1.3-1.44 2.06a.5.5 0 11-.9-.44 8.47 8.47 0 013.44-3.71c.66-.42 1.4-.79 2.2-1.1a.5.5 0 10-.38-.93 13.17 13.17 0 00-3.77 2.23 2.85 2.85 0 01.9-2.62c.63-.59 1.55-1 2.75-1.15a8.52 8.52 0 013.8.37l.09.03a6.17 6.17 0 00.41.1h.01z" fill={primaryFill} /></svg>;
}

const IconsFilled = wrapIcon(rawSvg({}), 'IconsFilled');
export default IconsFilled;
      