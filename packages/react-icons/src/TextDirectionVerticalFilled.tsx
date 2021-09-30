import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width="1em" height="1em" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M5 3.75a.75.75 0 011.5 0v10.69l.72-.72a.75.75 0 011.06 1.06l-2 2c-.3.3-.77.3-1.06 0l-2-2a.75.75 0 111.06-1.06l.72.72V3.75zm8 9a.75.75 0 011.5 0v1.69l.72-.72a.75.75 0 111.06 1.06l-2 2a.75.75 0 01-1.06 0l-2-2a.76.76 0 010-1.07c.3-.3.77-.28 1.06.01l.72.72v-1.69zM13.5 3c.3 0 .58.19.7.47l3 7.5a.75.75 0 01-1.4.56L15 9.5h-3l-.8 2.03a.75.75 0 01-1.4-.56l3-7.5a.75.75 0 01.7-.47zm0 2.77L12.6 8h1.8l-.9-2.23z" fill={primaryFill} /></svg>;
}

const TextDirectionVerticalFilled = wrapIcon(rawSvg({}), 'TextDirectionVerticalFilled');
export default TextDirectionVerticalFilled;
      