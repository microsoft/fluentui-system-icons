import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12.82 5.58L12 6.4l-.82-.82a5.37 5.37 0 10-7.6 7.6l7.89 7.9c.3.29.77.29 1.06 0l7.9-7.9a5.38 5.38 0 10-7.61-7.6zm6.55 6.54L12 19.48l-7.36-7.36a3.87 3.87 0 115.48-5.48L11.47 8c.3.3.79.29 1.08-.02l1.33-1.34a3.88 3.88 0 015.49 5.48z" fill={primaryFill} /></svg>;
}

const Heart24Regular = wrapIcon(rawSvg({}), 'Heart24Regular');
export default Heart24Regular;
      