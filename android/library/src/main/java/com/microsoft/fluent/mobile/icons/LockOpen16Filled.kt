package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.LockOpen16: ImageVector
  get() {
    if (_lockOpen16 != null) {
      return _lockOpen16!!
    }
    _lockOpen16 = fluentIcon(name = "Filled.LockOpen16", 16f) {
      materialPath {
          moveTo(7.0F, 4.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          reflectiveCurveToRelative(1.0F, 0.448F, 1.0F, 1.0F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveTo(10.5F, 4.414F, 10.5F, 4.0F)
          curveToRelative(0.0F, -1.38F, -1.12F, -2.5F, -2.5F, -2.5F)
          reflectiveCurveTo(5.5F, 2.62F, 5.5F, 4.0F)
          verticalLineToRelative(2.0F)
          horizontalLineToRelative(-1.0F)
          curveTo(3.672F, 6.0F, 3.0F, 6.672F, 3.0F, 7.5F)
          verticalLineToRelative(6.0F)
          curveTo(3.0F, 14.328F, 3.672F, 15.0F, 4.5F, 15.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-6.0F)
          curveTo(13.0F, 6.672F, 12.328F, 6.0F, 11.5F, 6.0F)
          horizontalLineTo(7.0F)
          verticalLineTo(4.0F)
          close()
          moveToRelative(2.0F, 6.5F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          reflectiveCurveToRelative(-1.0F, -0.448F, -1.0F, -1.0F)
          reflectiveCurveToRelative(0.448F, -1.0F, 1.0F, -1.0F)
          reflectiveCurveToRelative(1.0F, 0.448F, 1.0F, 1.0F)
          close()        
      }
    }
    return _lockOpen16!!
  }

private var _lockOpen16: ImageVector? = null
