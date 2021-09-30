import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M28.23 1.99c-1.65-.49-2.96.71-3.39 1.88l-.67 1.86c-.84 2.31-1.45 4-2.3 5.72-2.64 5.4-6.03 9.62-12.35 12.53a5.61 5.61 0 00-3.2 6.52l1.23 4.43a7.25 7.25 0 005.3 5.1l14.06 3.38A9.25 9.25 0 0038 36.85l3.34-12.22A5.25 5.25 0 0036.26 18h-5.04a29.55 29.55 0 001.24-8.15 12.1 12.1 0 00-.87-4.76 5.32 5.32 0 00-3.36-3.1z" fill={primaryFill} /></svg>;
}

const ThumbLike48Filled = wrapIcon(rawSvg({}), 'ThumbLike48Filled');
export default ThumbLike48Filled;
      