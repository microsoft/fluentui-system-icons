import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M2 7a5 5 0 004.03 4.9 6.48 6.48 0 011.66-3.78 2 2 0 00-2.21.58.5.5 0 11-.76-.65 3 3 0 013.76-.66 6.47 6.47 0 013.43-1.36A5 5 0 002 7zm4.25-1.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm8.75 7a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zm-6.75-1a.75.75 0 10-1.5 0 .75.75 0 001.5 0zm3.86 2.57a.5.5 0 00-.71.05 2.5 2.5 0 01-3.8 0 .5.5 0 10-.76.66 3.5 3.5 0 005.32 0 .5.5 0 00-.05-.71zm-.61-1.82a.75.75 0 100-1.5.75.75 0 000 1.5z" fill={primaryFill} /></svg>;
}

const EmojiMultipleFilled = wrapIcon(rawSvg({}), 'EmojiMultipleFilled');
export default EmojiMultipleFilled;
      