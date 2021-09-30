import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 4.5C5 3.67 5.67 3 6.5 3h3.88a4.12 4.12 0 013.44 6.39 4.24 4.24 0 011.43 3.24A4.36 4.36 0 0110.88 17H6.5A1.5 1.5 0 015 15.5v-11zM8 6v2.25h2.38a1.13 1.13 0 000-2.25H8zm0 5.25V14h2.88c.7 0 1.37-.54 1.37-1.37 0-.84-.69-1.38-1.37-1.38H8z" fill={primaryFill} /></svg>;
}

const TextBold20Filled = wrapIcon(rawSvg({}), 'TextBold20Filled');
export default TextBold20Filled;
      