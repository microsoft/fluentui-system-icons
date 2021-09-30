import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M10 2a8 8 0 100 16 8 8 0 000-16zM7.1 3.63l2.4 1.4v1.7L6.73 8.7l-1.56-.57-.62-2.51a7.02 7.02 0 012.54-1.98zM3.02 10.7l1.83-1.62 1.55.56 1.04 3.3L6.73 14H4.25a6.96 6.96 0 01-1.22-3.3zm5.34 6.12l-.81-2.25.7-1.06h3.47l.72 1.06-.82 2.25a7.02 7.02 0 01-3.26 0zM15.75 14h-2.48l-.72-1.08 1.02-3.29 1.57-.56 1.83 1.62a6.96 6.96 0 01-1.22 3.3zm-.3-8.38l-.62 2.5-1.58.57-2.75-1.95v-1.7l2.4-1.4c1 .45 1.88 1.13 2.56 1.98z" fill={primaryFill} /></svg>;
}

const SportSoccer20Filled = wrapIcon(rawSvg({}), 'SportSoccer20Filled');
export default SportSoccer20Filled;
      