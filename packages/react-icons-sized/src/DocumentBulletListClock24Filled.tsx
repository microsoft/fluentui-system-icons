import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 8V2H6a2 2 0 00-2 2v16c0 1.1.9 2 2 2h6.81a6.49 6.49 0 01-1.64-3h-.42a.75.75 0 010-1.5H11c0-.52.06-1.02.17-1.5h-.42a.75.75 0 010-1.5h.98c.29-.55.65-1.06 1.08-1.5h-2.06a.75.75 0 010-1.5H15a6.48 6.48 0 015 0V10h-6a2 2 0 01-2-2zm-5 4.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zm0 3a.75.75 0 111.5 0 .75.75 0 01-1.5 0zm0 3a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM13.5 8V2.5l6 6H14a.5.5 0 01-.5-.5zm9.5 9.5a5.5 5.5 0 10-11 0 5.5 5.5 0 0011 0zm-5.78.42a.5.5 0 01-.22-.5V13.5a.5.5 0 111 0V17h2.5a.5.5 0 010 1h-2.94a.5.5 0 01-.34-.08z" fill={primaryFill} /></svg>;
}

const DocumentBulletListClock24Filled = wrapIcon(rawSvg({}), 'DocumentBulletListClock24Filled');
export default DocumentBulletListClock24Filled;
      