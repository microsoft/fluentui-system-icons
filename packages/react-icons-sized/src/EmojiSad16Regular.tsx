import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={16} height={16} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M14 8A6 6 0 102 8a6 6 0 0012 0zM3 8a5 5 0 1110 0A5 5 0 013 8zm4-1.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3.5 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm-4.37 4.07a2.53 2.53 0 013.74 0 .5.5 0 10.76-.64 3.53 3.53 0 00-5.26 0 .5.5 0 10.76.64z" fill={primaryFill} /></svg>;
}

const EmojiSad16Regular = wrapIcon(rawSvg({}), 'EmojiSad16Regular');
export default EmojiSad16Regular;
      