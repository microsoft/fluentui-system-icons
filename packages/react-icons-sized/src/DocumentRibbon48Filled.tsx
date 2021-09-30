import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24 4v11.25A3.75 3.75 0 0027.75 19H40v21a3 3 0 01-3 3H19v-6.67A9.5 9.5 0 008 21.66V7a3 3 0 013-3h13zm-9 35.33a9.48 9.48 0 002-1.08v6.7c0 .86-.96 1.35-1.65.85L11.5 43l-3.85 2.8c-.69.5-1.65 0-1.65-.84v-6.71a9.48 9.48 0 009 1.08zM11.5 38A7.47 7.47 0 014 30.5a7.5 7.5 0 117.5 7.5zm15-33.54v10.79c0 .69.56 1.25 1.25 1.25h11.71L26.5 4.46z" fill={primaryFill} /></svg>;
}

const DocumentRibbon48Filled = wrapIcon(rawSvg({}), 'DocumentRibbon48Filled');
export default DocumentRibbon48Filled;
      