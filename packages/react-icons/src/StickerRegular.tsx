import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M15.11 2c1.54 0 2.8 1.2 2.89 2.72v6.21c0 .53-.19 1.04-.53 1.44l-.12.13-4.85 4.85c-.37.37-.87.6-1.4.64l-.17.01H4.89c-1.54 0-2.8-1.2-2.89-2.72V4.88C2 3.35 3.2 2.09 4.72 2h10.39zm-.08 1H4.97C3.93 3 3.07 3.81 3 4.83V15.03c0 1.04.81 1.9 1.83 1.97H11v-3.1a5.42 5.42 0 01-4.86-1.5.5.5 0 01.72-.71 4.43 4.43 0 004.18 1.19c0-.06 0-.11.02-.16a2.73 2.73 0 012.5-1.72H17V4.97c0-1.04-.8-1.9-1.83-1.97h-.14zm1.55 9h-2.76c-.96 0-1.75.75-1.82 1.7v2.88l.09-.07 4.42-4.42.07-.09zM7 7a1 1 0 110 2 1 1 0 010-2zm6 0a1 1 0 110 2 1 1 0 010-2z" fill={primaryFill} /></svg>;
}

const StickerRegular = wrapIcon(rawSvg({}), 'StickerRegular');
export default StickerRegular;
      