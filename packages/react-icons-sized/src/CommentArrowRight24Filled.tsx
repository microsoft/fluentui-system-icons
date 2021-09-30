import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.02 3A6.5 6.5 0 0022 11.2v3.55c0 1.8-1.46 3.25-3.25 3.25h-5.79l-5.38 3.82A1 1 0 016 21v-3h-.75A3.25 3.25 0 012 14.75v-8.5C2 4.45 3.46 3 5.25 3h6.77zm5.48-2a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm.22 2.59l-.07.06-.06.07a.5.5 0 000 .56l.06.07L19.29 6h-5.38a.5.5 0 00-.4.41l-.01.09v.09c.05.2.2.36.41.4L14 7h5.3l-1.65 1.65-.06.07a.5.5 0 00.7.7l.06-.07 2.54-2.54.04-.05.03-.07.02-.06.02-.08v-.1l-.02-.08-.03-.08-.04-.07-.04-.06-2.52-2.51-.07-.06a.5.5 0 00-.56 0z" fill={primaryFill} /></svg>;
}

const CommentArrowRight24Filled = wrapIcon(rawSvg({}), 'CommentArrowRight24Filled');
export default CommentArrowRight24Filled;
      