package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Timer48: ImageVector
  get() {
    if (_timer48 != null) {
      return _timer48!!
    }
    _timer48 = fluentIcon(name = "Filled.Timer48", 48f) {
      materialPath {
          moveTo(19.25F, 5.0F)
          curveTo(18.56F, 5.0F, 18.0F, 5.56F, 18.0F, 6.25F)
          reflectiveCurveToRelative(0.56F, 1.25F, 1.25F, 1.25F)
          horizontalLineToRelative(9.5F)
          curveTo(29.44F, 7.5F, 30.0F, 6.94F, 30.0F, 6.25F)
          reflectiveCurveTo(29.44F, 5.0F, 28.75F, 5.0F)
          horizontalLineToRelative(-9.5F)
          close()
          moveTo(7.0F, 27.0F)
          curveToRelative(0.0F, -9.389F, 7.611F, -17.0F, 17.0F, -17.0F)
          reflectiveCurveToRelative(17.0F, 7.611F, 17.0F, 17.0F)
          reflectiveCurveToRelative(-7.611F, 17.0F, -17.0F, 17.0F)
          reflectiveCurveTo(7.0F, 36.389F, 7.0F, 27.0F)
          close()
          moveToRelative(15.75F, -0.25F)
          curveToRelative(0.0F, 0.69F, 0.56F, 1.25F, 1.25F, 1.25F)
          reflectiveCurveToRelative(1.25F, -0.56F, 1.25F, -1.25F)
          verticalLineToRelative(-9.5F)
          curveToRelative(0.0F, -0.69F, -0.56F, -1.25F, -1.25F, -1.25F)
          reflectiveCurveToRelative(-1.25F, 0.56F, -1.25F, 1.25F)
          verticalLineToRelative(9.5F)
          close()
          moveToRelative(13.616F, -16.384F)
          curveToRelative(0.488F, -0.488F, 1.28F, -0.488F, 1.768F, 0.0F)
          lineToRelative(2.5F, 2.5F)
          curveToRelative(0.488F, 0.488F, 0.488F, 1.28F, 0.0F, 1.768F)
          reflectiveCurveToRelative(-1.28F, 0.488F, -1.768F, 0.0F)
          lineToRelative(-2.5F, -2.5F)
          curveToRelative(-0.488F, -0.488F, -0.488F, -1.28F, 0.0F, -1.768F)
          close()        
      }
    }
    return _timer48!!
  }

private var _timer48: ImageVector? = null
