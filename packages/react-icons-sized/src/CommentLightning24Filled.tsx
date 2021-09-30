import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M23 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0zM18.53 3H17.1a.5.5 0 00-.47.32l-1.13 3a.5.5 0 00.47.68h.78l-.77 2.32a.52.52 0 00.92.44l2.63-4.03a.47.47 0 00-.4-.73h-.63l.5-1.32a.5.5 0 00-.47-.68zM17.5 13c1.75 0 3.33-.69 4.5-1.81v3.56c0 1.8-1.46 3.25-3.25 3.25h-5.79l-5.38 3.82A1 1 0 016 21v-3h-.75A3.25 3.25 0 012 14.75v-8.5C2 4.45 3.46 3 5.25 3h6.77a6.5 6.5 0 005.48 10z" fill={primaryFill} /></svg>;
}

const CommentLightning24Filled = wrapIcon(rawSvg({}), 'CommentLightning24Filled');
export default CommentLightning24Filled;
      