import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M3 3.5a.5.5 0 111 0v2.2a8 8 0 0113.16 1.75.5.5 0 11-.9.44 7 7 0 00-12-.89H7.5a.5.5 0 010 1h-4a.5.5 0 01-.5-.5v-4zm5 7a.5.5 0 00-.78-.42l-1.5 1a.5.5 0 00.56.84l.72-.49v5.07a.5.5 0 001 0v-6zm4.5-.5c-.93 0-1.6.44-2 1.13-.37.65-.5 1.5-.5 2.37 0 .86.13 1.72.5 2.37.4.7 1.07 1.13 2 1.13.94 0 1.6-.44 2-1.13.38-.65.5-1.5.5-2.37 0-.86-.12-1.72-.5-2.37a2.18 2.18 0 00-2-1.13zM11 13.5c0-.8.13-1.44.37-1.87.23-.4.57-.63 1.13-.63.57 0 .9.23 1.13.63.25.43.37 1.08.37 1.87 0 .8-.12 1.44-.37 1.87-.22.4-.56.63-1.13.63-.56 0-.9-.23-1.13-.63A3.87 3.87 0 0111 13.5z" fill={primaryFill} /></svg>;
}

const SkipBack10Regular = wrapIcon(rawSvg({}), 'SkipBack10Regular');
export default SkipBack10Regular;
      