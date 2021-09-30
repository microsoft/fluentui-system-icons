import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M18 3c.24 0 .46.12.6.3l.06.1 3.26 6.02.04.1.01.03.02.1v.1c0 .07 0 .14-.02.2l-.05.13-.03.06a.8.8 0 01-.04.06.75.75 0 01-.04.05l.02-.03-.76.87a3.75 3.75 0 00-5.62-.59H9l3 7.69.03-.09c-.02.13-.03.27-.03.4v.5c0 .65.15 1.29.42 1.87a.73.73 0 01-.12.07l-.1.03-.08.02L12 21h-.1l-.12-.03a.72.72 0 01-.17-.08h-.01a.67.67 0 01-.13-.1l-9.3-10.55-.02-.04-.04-.06a.74.74 0 01-.1-.3L2 9.75v-.07l.02-.08.02-.1.02-.05.03-.06 3.25-6a.75.75 0 01.56-.38L6 3h12zM7.39 10.5H4.4l5.35 6.07-2.37-6.07zm1.58-6H6.44L4.01 9h3.52l1.44-4.5zm4.48 0h-2.9L9.1 9h5.79l-1.44-4.5zm4.1 0h-2.52L16.47 9h3.52l-2.44-4.5zM20 11.36a2.76 2.76 0 01.75 1.89 2.75 2.75 0 11-.75-1.89zm-5.59.64h.05a3.74 3.74 0 00.32 3.18l-.32.82a2.5 2.5 0 00-2.04 1.12l2-5.12zM13 18.5a1.5 1.5 0 011.5-1.5h7c.83 0 1.5.67 1.5 1.5v.5c0 1.97-1.86 4-5 4-2.58 0-4.3-1.37-4.83-2.95A3.3 3.3 0 0113 19v-.5z" fill={primaryFill} /></svg>;
}

const PremiumPerson24Regular = wrapIcon(rawSvg({}), 'PremiumPerson24Regular');
export default PremiumPerson24Regular;
      