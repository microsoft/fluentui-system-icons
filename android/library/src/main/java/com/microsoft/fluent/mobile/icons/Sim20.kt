package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Sim20: ImageVector
  get() {
    if (_sim20 != null) {
      return _sim20!!
    }
    _sim20 = fluentIcon(name = "Regular.Sim20", 20f) {
      materialPath {
          moveTo(8.5F, 9.0F)
          horizontalLineToRelative(3.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, 0.672F, 1.5F, 1.5F)
          verticalLineToRelative(3.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-3.0F)
          curveTo(7.672F, 15.0F, 7.0F, 14.328F, 7.0F, 13.5F)
          verticalLineToRelative(-3.0F)
          curveTo(7.0F, 9.672F, 7.672F, 9.0F, 8.5F, 9.0F)
          close()
          moveTo(8.0F, 10.5F)
          verticalLineTo(11.0F)
          horizontalLineToRelative(2.0F)
          verticalLineToRelative(-1.0F)
          horizontalLineTo(8.5F)
          curveTo(8.224F, 10.0F, 8.0F, 10.224F, 8.0F, 10.5F)
          close()
          moveTo(8.0F, 12.0F)
          verticalLineToRelative(1.5F)
          curveTo(8.0F, 13.776F, 8.224F, 14.0F, 8.5F, 14.0F)
          horizontalLineTo(10.0F)
          verticalLineToRelative(-2.0F)
          horizontalLineTo(8.0F)
          close()
          moveToRelative(3.5F, 2.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-3.0F)
          curveToRelative(0.0F, -0.276F, -0.224F, -0.5F, -0.5F, -0.5F)
          horizontalLineTo(11.0F)
          verticalLineToRelative(4.0F)
          horizontalLineToRelative(0.5F)
          close()
          moveTo(7.0F, 2.0F)
          curveTo(5.343F, 2.0F, 4.0F, 3.343F, 4.0F, 5.0F)
          verticalLineToRelative(10.0F)
          curveToRelative(0.0F, 1.657F, 1.343F, 3.0F, 3.0F, 3.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, -1.343F, 3.0F, -3.0F)
          verticalLineTo(7.535F)
          curveToRelative(0.0F, -0.795F, -0.316F, -1.558F, -0.879F, -2.12F)
          lineToRelative(-2.535F, -2.536F)
          curveTo(12.023F, 2.316F, 11.26F, 2.0F, 10.464F, 2.0F)
          horizontalLineTo(7.0F)
          close()
          moveTo(5.0F, 5.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(3.464F)
          curveToRelative(0.53F, 0.0F, 1.04F, 0.21F, 1.415F, 0.586F)
          lineToRelative(2.535F, 2.535F)
          curveTo(14.79F, 6.496F, 15.0F, 7.005F, 15.0F, 7.535F)
          verticalLineTo(15.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(7.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(5.0F)
          close()        
      }
    }
    return _sim20!!
  }

private var _sim20: ImageVector? = null
