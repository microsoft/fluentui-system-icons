import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={20} height={20} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19 5.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-5.12-3a.5.5 0 00-.47.33l-.88 2.5A.5.5 0 0013 6h.78l-.51 1.87a.5.5 0 00.9.4l2.25-3.5A.5.5 0 0016 4h-.75l.28-.84a.5.5 0 00-.47-.66h-1.18zm.62 8.5c1.33 0 2.55-.47 3.5-1.26v2.54a2.58 2.58 0 01-2.6 2.56h-4.59L6.8 17.8a1 1 0 01-1.4-.2.98.98 0 01-.2-.59v-2.17h-.6A2.58 2.58 0 012 12.28V5.57A2.58 2.58 0 014.6 3h5a5.5 5.5 0 004.9 8z" fill={primaryFill} /></svg>;
}

const CommentLightning20Filled = wrapIcon(rawSvg({}), 'CommentLightning20Filled');
export default CommentLightning20Filled;
      