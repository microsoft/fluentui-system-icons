import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M12 2a10 10 0 110 20 10 10 0 010-20zm0 1.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17zm-.35 4.05l.07-.08a.75.75 0 01.98-.07l.08.07 4 4c.27.27.3.68.07.98l-.07.08-4 4a.75.75 0 01-1.13-.98l.07-.08 2.72-2.72H7.75a.75.75 0 01-.74-.65L7 12c0-.38.28-.7.65-.74l.1-.01h6.69l-2.72-2.72a.75.75 0 01-.07-.98l.07-.08-.07.08z" fill={primaryFill} /></svg>;
}

const ArrowCircleRight24Regular = wrapIcon(rawSvg({}), 'ArrowCircleRight24Regular');
export default ArrowCircleRight24Regular;
      