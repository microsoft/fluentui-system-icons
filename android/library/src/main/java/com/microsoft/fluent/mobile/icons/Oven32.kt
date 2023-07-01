package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Oven32: ImageVector
  get() {
    if (_oven32 != null) {
      return _oven32!!
    }
    _oven32 = fluentIcon(name = "Filled.Oven32", 32f) {
      materialPath {
          moveTo(3.0F, 7.5F)
          curveTo(3.0F, 5.015F, 5.015F, 3.0F, 7.5F, 3.0F)
          horizontalLineToRelative(17.0F)
          curveTo(26.985F, 3.0F, 29.0F, 5.015F, 29.0F, 7.5F)
          verticalLineTo(12.0F)
          horizontalLineTo(3.0F)
          verticalLineTo(7.5F)
          close()
          moveTo(8.5F, 8.0F)
          curveToRelative(0.0F, 0.828F, 0.672F, 1.5F, 1.5F, 1.5F)
          reflectiveCurveToRelative(1.5F, -0.672F, 1.5F, -1.5F)
          reflectiveCurveToRelative(-0.672F, -1.5F, -1.5F, -1.5F)
          reflectiveCurveTo(8.5F, 7.172F, 8.5F, 8.0F)
          close()
          moveToRelative(6.0F, 0.0F)
          curveToRelative(0.0F, 0.828F, 0.672F, 1.5F, 1.5F, 1.5F)
          reflectiveCurveToRelative(1.5F, -0.672F, 1.5F, -1.5F)
          reflectiveCurveToRelative(-0.672F, -1.5F, -1.5F, -1.5F)
          reflectiveCurveToRelative(-1.5F, 0.672F, -1.5F, 1.5F)
          close()
          moveTo(22.0F, 9.5F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          reflectiveCurveTo(22.828F, 6.5F, 22.0F, 6.5F)
          reflectiveCurveTo(20.5F, 7.172F, 20.5F, 8.0F)
          reflectiveCurveToRelative(0.672F, 1.5F, 1.5F, 1.5F)
          close()
          moveTo(3.0F, 14.0F)
          verticalLineToRelative(10.5F)
          curveTo(3.0F, 26.985F, 5.015F, 29.0F, 7.5F, 29.0F)
          horizontalLineToRelative(17.0F)
          curveToRelative(2.485F, 0.0F, 4.5F, -2.015F, 4.5F, -4.5F)
          verticalLineTo(14.0F)
          horizontalLineTo(3.0F)
          close()
          moveToRelative(5.5F, 3.0F)
          horizontalLineToRelative(15.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, 0.672F, 1.5F, 1.5F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-15.0F)
          curveTo(7.672F, 25.0F, 7.0F, 24.328F, 7.0F, 23.5F)
          verticalLineToRelative(-5.0F)
          curveTo(7.0F, 17.672F, 7.672F, 17.0F, 8.5F, 17.0F)
          close()        
      }
    }
    return _oven32!!
  }

private var _oven32: ImageVector? = null
