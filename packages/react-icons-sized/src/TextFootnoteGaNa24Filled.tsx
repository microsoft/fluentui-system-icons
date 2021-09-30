import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M20.02 7.54l-.22.16a1 1 0 11-1.1-1.67 3.31 3.31 0 001.35-1.74 1 1 0 011.97.21V11a1 1 0 11-2 0V7.54zM1 9a1 1 0 011-1h3.5a1 1 0 011 1c0 1-.17 2.3-.79 3.48a4.7 4.7 0 01-3.56 2.5 1 1 0 11-.3-1.97 2.7 2.7 0 002.1-1.47c.25-.47.4-1.01.48-1.54H2a1 1 0 01-1-1zm6.5-3v12a1 1 0 002 0V6a1 1 0 00-2 0zm8 12V6a1 1 0 112 0v12a1 1 0 01-2 0zM13.48 7.21a1 1 0 10-1.96-.42l-1.5 7a1 1 0 001.14 1.2l3-.5a1 1 0 10-.32-1.98l-1.55.26 1.19-5.56z" fill={primaryFill} /></svg>;
}

const TextFootnoteGaNa24Filled = wrapIcon(rawSvg({}), 'TextFootnoteGaNa24Filled');
export default TextFootnoteGaNa24Filled;
      