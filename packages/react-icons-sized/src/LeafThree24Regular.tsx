import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M19 7.5a5.5 5.5 0 01-.2 1.5h1.61c.88 0 1.59.71 1.59 1.59v4.91a6.5 6.5 0 01-10.54 5.1l-1.18 1.18a.75.75 0 11-1.06-1.06l1.18-1.18a6.5 6.5 0 01-.95-1.66A6 6 0 012.25 12V7.51c0-.83.68-1.51 1.51-1.51h4.45a5.5 5.5 0 015.29-4h4.06c.8 0 1.44.65 1.44 1.44V7.5zM9.72 6.18c1.7.43 3.1 1.58 3.88 3.1A6.5 6.5 0 0115.5 9h1.7c.2-.46.3-.97.3-1.5v-4h-4a4 4 0 00-3.78 2.68zm2.81 13.35a5 5 0 007.97-4.03v-4.91a.09.09 0 00-.09-.09H15.5a5 5 0 00-4.03 7.97l4.25-4.25a.75.75 0 111.06 1.06l-4.25 4.25zM9 15.5c0-.6.08-1.17.23-1.71l-2.76-2.76a.75.75 0 111.06-1.06l2.32 2.32c.56-1 1.39-1.83 2.37-2.4A4.5 4.5 0 008.25 7.5H3.76l-.01.01V12a4.5 4.5 0 005.32 4.43c-.05-.3-.07-.62-.07-.93z" fill={primaryFill} /></svg>;
}

const LeafThree24Regular = wrapIcon(rawSvg({}), 'LeafThree24Regular');
export default LeafThree24Regular;
      