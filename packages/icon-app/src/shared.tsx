import * as React from 'react';
import { type FluentIcon } from '@fluentui/react-icons/svg';
import { type FluentFontIcon } from '@fluentui/react-icons/fonts';

export function IconCell({
  FontIcon,
  SvgIcon,
  name,
}: {
  FontIcon?: FluentFontIcon;
  SvgIcon?: FluentIcon;
  name: string;
}) {
  return (
    <div className="app-icon-cell">
      <div className="app-icon-cell__zone">
        <div className="app-icon-cell__icon">
          {FontIcon ? <FontIcon /> : <span>N/A</span>}
          <span className="app-icon-cell__sublabel">font</span>
        </div>
        <div className="app-icon-cell__icon">
          {SvgIcon ? <SvgIcon /> : <span>N/A</span>}
          <span className="app-icon-cell__sublabel">svg</span>
        </div>
      </div>
      <span className="app-icon-cell__label" title={name}>
        {name}
      </span>
    </div>
  );
}
