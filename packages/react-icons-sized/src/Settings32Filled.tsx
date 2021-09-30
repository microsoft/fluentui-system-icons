import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={32} height={32} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M28.83 18.47a1.48 1.48 0 01.54 1.63 14.27 14.27 0 01-3.16 5.45 1.48 1.48 0 01-1.67.35l-1.95-.86a1.47 1.47 0 00-2.07 1.2l-.24 2.12a1.48 1.48 0 01-1.12 1.28c-2.08.5-4.24.5-6.32 0a1.47 1.47 0 01-1.13-1.27l-.23-2.13a1.48 1.48 0 00-2.07-1.2l-1.95.87a1.48 1.48 0 01-1.67-.35 14.27 14.27 0 01-3.16-5.45 1.48 1.48 0 01.54-1.63l1.72-1.27a1.49 1.49 0 000-2.4l-1.72-1.28a1.48 1.48 0 01-.54-1.62A14.25 14.25 0 015.8 6.47 1.44 1.44 0 016.88 6c.2 0 .4.04.58.12l1.95.85a1.5 1.5 0 002.07-1.2l.24-2.12a1.46 1.46 0 011.14-1.29c1.04-.22 2.1-.34 3.15-.36 1.05.02 2.1.14 3.13.36a1.48 1.48 0 011.14 1.29l.24 2.12a1.48 1.48 0 002.07 1.2l1.94-.86a1.48 1.48 0 011.68.35 14.23 14.23 0 013.15 5.44 1.48 1.48 0 01-.53 1.63L27.1 14.8a1.48 1.48 0 000 2.4l1.72 1.27zM16 20a4 4 0 100-8 4 4 0 000 8z" fill={primaryFill} /></svg>;
}

const Settings32Filled = wrapIcon(rawSvg({}), 'Settings32Filled');
export default Settings32Filled;
      