import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm5.5-.5a1 1 0 100-2 1 1 0 000 2zm4.25 3a1.75 1.75 0 10-3.5 0 1.75 1.75 0 003.5 0zm.75-3a1 1 0 100-2 1 1 0 000 2z" fill={primaryFill} /></svg>;
}

const EmojiSurpriseFilled = wrapIcon(rawSvg({}), 'EmojiSurpriseFilled');
export default EmojiSurpriseFilled;
      