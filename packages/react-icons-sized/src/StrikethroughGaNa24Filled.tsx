import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M9 20.25V13.5H6.84a5.77 5.77 0 01-4.19 2.74 1 1 0 11-.3-1.98 4 4 0 001.85-.76H1.75a1 1 0 110-2h20.5a1 1 0 110 2H22v7a1 1 0 11-2 0v-7h-4.74l-.14 1.35 2.76-.34a1 1 0 01.24 1.98l-4 .5a1 1 0 01-1.11-1.09l.23-2.4H11v6.75a1 1 0 11-2 0zm13-9.75V5a1 1 0 10-2 0v5.5h2zm-6.45 0L16 6.1a1 1 0 10-1.98-.2l-.46 4.6h2zm-4.55 0V4.75a1 1 0 10-2 0v5.75h2zm-3.11 0C7.97 9.97 8 9.46 8 9a1 1 0 00-1-1H2.5a1 1 0 100 2h3.44l-.08.5h2.03z" fill={primaryFill} /></svg>;
}

const StrikethroughGaNa24Filled = wrapIcon(rawSvg({}), 'StrikethroughGaNa24Filled');
export default StrikethroughGaNa24Filled;
      