import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M7.61 12c.3 0 .54-.23.54-.52a.53.53 0 00-.54-.52h-.35c-1.77 0-3.2-1.08-3.2-2.42 0-1.3 1.35-2.36 3.04-2.42h5.08L10.96 7.3c-.2.2-.2.53 0 .73.2.18.49.2.7.05l.06-.05 2.12-2.08c.21-.2.21-.53 0-.73l-2.12-2.08-.06-.05a.54.54 0 00-.7.05c-.2.2-.2.53 0 .74l1.22 1.19H7.26C4.9 5.08 3 6.63 3 8.54S4.9 12 7.26 12h.35z" fill={primaryFill} /><path d="M16.6 9c.22 0 .4.17.4.38v6.87c0 .41-.36.75-.8.75H3.4a.4.4 0 01-.35-.19.37.37 0 01.15-.51l13.2-7.25a.41.41 0 01.2-.05z" fill={primaryFill} /></svg>;
}

const RotateRightFilled = wrapIcon(rawSvg({}), 'RotateRightFilled');
export default RotateRightFilled;
      