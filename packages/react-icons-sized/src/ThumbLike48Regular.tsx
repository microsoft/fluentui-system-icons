import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={48} height={48} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M24.84 3.87c.43-1.17 1.74-2.37 3.39-1.88a5.32 5.32 0 013.36 3.1c.62 1.4.86 3.07.87 4.76.02 2.72-.52 5.71-1.24 8.15h5.04c3.46 0 5.98 3.3 5.07 6.63l-3.34 12.22a9.25 9.25 0 01-11.08 6.56l-14.07-3.37a7.25 7.25 0 01-5.3-5.1L6.33 30.5a5.61 5.61 0 013.2-6.52c6.32-2.9 9.7-7.13 12.36-12.53.84-1.71 1.45-3.41 2.29-5.72l.67-1.86zm2.59.54a.65.65 0 00-.24.32l-.65 1.8c-.84 2.32-1.51 4.18-2.42 6.02-2.83 5.77-6.58 10.5-13.56 13.7-1.46.67-2.22 2.2-1.84 3.58l1.24 4.43a4.75 4.75 0 003.47 3.35l14.07 3.37a6.75 6.75 0 008.08-4.79l3.33-12.22a2.75 2.75 0 00-2.65-3.47H29.5a1.25 1.25 0 01-1.18-1.68 27.78 27.78 0 001.64-8.95 9.66 9.66 0 00-.65-3.76c-.42-.93-1-1.49-1.8-1.72h-.01c-.01 0-.04 0-.07.02z" fill={primaryFill} /></svg>;
}

const ThumbLike48Regular = wrapIcon(rawSvg({}), 'ThumbLike48Regular');
export default ThumbLike48Regular;
      