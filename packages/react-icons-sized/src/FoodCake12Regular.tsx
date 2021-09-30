import * as React from 'react';
import  wrapIcon from './utils/wrapIcon';
import { IFluentIconsProps } from './utils/IFluentIconsProps.types';

const rawSvg = (iconProps: IFluentIconsProps) => {
  const { className, primaryFill } = iconProps;
  return <svg width={12} height={12} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg" className={className}><path d="M6 1c-.53 0-.88.36-1.06.65-.19.3-.3.64-.3.88-.03.43.03.85.3 1.16.27.33.67.44 1.06.44.4 0 .8-.12 1.07-.45.26-.32.33-.73.3-1.15a2.06 2.06 0 00-.3-.87C6.89 1.36 6.54 1 6 1zm-.37 1.6c0-.07.05-.26.15-.42.1-.16.19-.18.22-.18.04 0 .12.02.22.19s.15.35.16.4c.02.3-.04.41-.08.45-.02.03-.1.09-.3.09-.22 0-.28-.06-.3-.08-.02-.03-.08-.15-.07-.46zM10 10V6.5C10 5.67 9.33 5 8.5 5h-5C2.67 5 2 5.67 2 6.5V10h-.5a.5.5 0 000 1h9a.5.5 0 000-1H10zM3.5 6h5c.28 0 .5.22.5.5v.79l-.87.67a.25.25 0 01-.3 0l-1.1-.78c-.44-.31-1.02-.31-1.46 0l-1.1.79a.25.25 0 01-.3 0L3 7.28V6.5c0-.28.22-.5.5-.5zM3 8.55l.25.2c.44.34 1.04.35 1.5.03L5.85 8c.1-.06.2-.06.3 0l1.1.8c.45.31 1.06.3 1.5-.04l.25-.2V10H3V8.55z" fill={primaryFill} /></svg>;
}

const FoodCake12Regular = wrapIcon(rawSvg({}), 'FoodCake12Regular');
export default FoodCake12Regular;
      