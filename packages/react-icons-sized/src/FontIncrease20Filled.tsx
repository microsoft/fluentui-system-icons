import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14.24 4.82a.75.75 0 01-.98-1.14l1.75-1.5c.28-.24.7-.24.98 0l1.75 1.5a.75.75 0 11-.98 1.14L15.5 3.74l-1.26 1.08zM10 3.75c-.3 0-.58.18-.7.47l-4.5 11a.75.75 0 001.4.56l1.44-3.53h4.72l1.45 3.53a.75.75 0 101.38-.56l-4.5-11a.75.75 0 00-.69-.47zm0 2.73l1.75 4.27h-3.5L10 6.48z" fill={primaryFill} /></svg>;
}

const FontIncrease20Filled = wrapIcon(rawSvg({}), 'FontIncrease20Filled');
export default FontIncrease20Filled;
      