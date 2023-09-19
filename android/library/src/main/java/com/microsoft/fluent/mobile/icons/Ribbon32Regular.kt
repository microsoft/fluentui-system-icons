package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Ribbon32: ImageVector
  get() {
    if (_ribbon32 != null) {
      return _ribbon32!!
    }
    _ribbon32 = fluentIcon(name = "Regular.Ribbon32", 32f) {
      materialPath {
          moveTo(16.0F, 2.0F)
          curveTo(10.477F, 2.0F, 6.0F, 6.477F, 6.0F, 12.0F)
          curveToRelative(0.0F, 3.272F, 1.571F, 6.176F, 4.0F, 8.0F)
          verticalLineToRelative(9.0F)
          curveToRelative(0.0F, 0.36F, 0.194F, 0.693F, 0.507F, 0.87F)
          curveToRelative(0.314F, 0.178F, 0.699F, 0.173F, 1.008F, -0.012F)
          lineTo(16.0F, 27.166F)
          lineToRelative(4.485F, 2.692F)
          curveToRelative(0.31F, 0.185F, 0.694F, 0.19F, 1.008F, 0.012F)
          curveTo(21.806F, 29.693F, 22.0F, 29.36F, 22.0F, 29.0F)
          verticalLineToRelative(-9.0F)
          curveToRelative(2.429F, -1.824F, 4.0F, -4.728F, 4.0F, -8.0F)
          curveToRelative(0.0F, -5.523F, -4.477F, -10.0F, -10.0F, -10.0F)
          close()
          moveTo(8.0F, 12.0F)
          curveToRelative(0.0F, -4.418F, 3.582F, -8.0F, 8.0F, -8.0F)
          reflectiveCurveToRelative(8.0F, 3.582F, 8.0F, 8.0F)
          reflectiveCurveToRelative(-3.582F, 8.0F, -8.0F, 8.0F)
          reflectiveCurveToRelative(-8.0F, -3.582F, -8.0F, -8.0F)
          close()
          moveToRelative(12.0F, 9.168F)
          verticalLineToRelative(6.066F)
          lineToRelative(-3.485F, -2.092F)
          curveToRelative(-0.317F, -0.19F, -0.713F, -0.19F, -1.03F, 0.0F)
          lineTo(12.0F, 27.234F)
          verticalLineToRelative(-6.066F)
          curveTo(13.225F, 21.703F, 14.578F, 22.0F, 16.0F, 22.0F)
          curveToRelative(1.422F, 0.0F, 2.775F, -0.297F, 4.0F, -0.832F)
          close()        
      }
    }
    return _ribbon32!!
  }

private var _ribbon32: ImageVector? = null
