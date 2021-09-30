import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M4.66 6.03c.2.06.34.26.34.47v7a.5.5 0 01-1 0V7.96a6 6 0 01-1.24.97.5.5 0 01-.52-.86c.94-.56 1.31-1.1 1.64-1.57l.22-.3a.5.5 0 01.56-.17zm3.84.43A.5.5 0 019 6h3.5a.5.5 0 010 1H9.46L9.3 8.93l1.28-.15a2.62 2.62 0 11.3 5.22h-.35c-.8 0-1.55-.31-2.1-.87l-.28-.28a.5.5 0 11.7-.7l.28.27c.37.37.87.58 1.4.58h.35a1.62 1.62 0 10-.19-3.23L8.81 10a.5.5 0 01-.56-.54l.25-3zm6.35 3.69a.5.5 0 00-.7.7L15.29 12l-1.14 1.15a.5.5 0 00.7.7L16 12.71l1.15 1.14a.5.5 0 00.7-.7L16.71 12l1.14-1.15a.5.5 0 00-.7-.7L16 11.29l-1.15-1.14zM6.5 14a.5.5 0 100-1 .5.5 0 000 1z" fill={primaryFill} /></svg>;
}

const Multiplier15XRegular = wrapIcon(rawSvg({}), 'Multiplier15XRegular');
export default Multiplier15XRegular;
      