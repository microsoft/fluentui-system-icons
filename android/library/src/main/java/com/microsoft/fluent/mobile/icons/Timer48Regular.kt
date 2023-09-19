package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Timer48: ImageVector
  get() {
    if (_timer48 != null) {
      return _timer48!!
    }
    _timer48 = fluentIcon(name = "Regular.Timer48", 48f) {
      materialPath {
          moveTo(18.0F, 6.25F)
          curveTo(18.0F, 5.56F, 18.56F, 5.0F, 19.25F, 5.0F)
          horizontalLineToRelative(9.5F)
          curveTo(29.44F, 5.0F, 30.0F, 5.56F, 30.0F, 6.25F)
          reflectiveCurveTo(29.44F, 7.5F, 28.75F, 7.5F)
          horizontalLineToRelative(-9.5F)
          curveTo(18.56F, 7.5F, 18.0F, 6.94F, 18.0F, 6.25F)
          close()
          moveToRelative(4.75F, 20.5F)
          curveToRelative(0.0F, 0.69F, 0.56F, 1.25F, 1.25F, 1.25F)
          reflectiveCurveToRelative(1.25F, -0.56F, 1.25F, -1.25F)
          verticalLineToRelative(-9.5F)
          curveToRelative(0.0F, -0.69F, -0.56F, -1.25F, -1.25F, -1.25F)
          reflectiveCurveToRelative(-1.25F, 0.56F, -1.25F, 1.25F)
          verticalLineToRelative(9.5F)
          close()
          moveTo(24.0F, 10.0F)
          curveToRelative(-9.389F, 0.0F, -17.0F, 7.611F, -17.0F, 17.0F)
          reflectiveCurveToRelative(7.611F, 17.0F, 17.0F, 17.0F)
          reflectiveCurveToRelative(17.0F, -7.611F, 17.0F, -17.0F)
          reflectiveCurveToRelative(-7.611F, -17.0F, -17.0F, -17.0F)
          close()
          moveTo(9.5F, 27.0F)
          curveToRelative(0.0F, -8.008F, 6.492F, -14.5F, 14.5F, -14.5F)
          reflectiveCurveTo(38.5F, 18.992F, 38.5F, 27.0F)
          reflectiveCurveTo(32.008F, 41.5F, 24.0F, 41.5F)
          reflectiveCurveTo(9.5F, 35.008F, 9.5F, 27.0F)
          close()
          moveToRelative(28.635F, -16.635F)
          curveToRelative(-0.488F, -0.488F, -1.28F, -0.488F, -1.768F, 0.0F)
          curveToRelative(-0.488F, 0.489F, -0.488F, 1.28F, 0.0F, 1.768F)
          lineToRelative(2.5F, 2.5F)
          curveToRelative(0.488F, 0.488F, 1.28F, 0.488F, 1.768F, 0.0F)
          reflectiveCurveToRelative(0.488F, -1.28F, 0.0F, -1.768F)
          lineToRelative(-2.5F, -2.5F)
          close()        
      }
    }
    return _timer48!!
  }

private var _timer48: ImageVector? = null
