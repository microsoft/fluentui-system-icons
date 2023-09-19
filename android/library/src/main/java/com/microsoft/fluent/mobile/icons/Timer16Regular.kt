package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Timer16: ImageVector
  get() {
    if (_timer16 != null) {
      return _timer16!!
    }
    _timer16 = fluentIcon(name = "Regular.Timer16", 16f) {
      materialPath {
          moveTo(5.0F, 1.5F)
          curveTo(5.0F, 1.224F, 5.224F, 1.0F, 5.5F, 1.0F)
          horizontalLineToRelative(4.0F)
          curveTo(9.776F, 1.0F, 10.0F, 1.224F, 10.0F, 1.5F)
          reflectiveCurveTo(9.776F, 2.0F, 9.5F, 2.0F)
          horizontalLineToRelative(-4.0F)
          curveTo(5.224F, 2.0F, 5.0F, 1.776F, 5.0F, 1.5F)
          close()
          moveTo(7.5F, 5.0F)
          curveTo(7.224F, 5.0F, 7.0F, 5.224F, 7.0F, 5.5F)
          verticalLineToRelative(4.0F)
          curveTo(7.0F, 9.776F, 7.224F, 10.0F, 7.5F, 10.0F)
          reflectiveCurveTo(8.0F, 9.776F, 8.0F, 9.5F)
          verticalLineToRelative(-4.0F)
          curveTo(8.0F, 5.224F, 7.776F, 5.0F, 7.5F, 5.0F)
          close()
          moveToRelative(6.0F, 4.0F)
          curveToRelative(0.0F, 3.314F, -2.686F, 6.0F, -6.0F, 6.0F)
          reflectiveCurveToRelative(-6.0F, -2.686F, -6.0F, -6.0F)
          reflectiveCurveToRelative(2.686F, -6.0F, 6.0F, -6.0F)
          reflectiveCurveToRelative(6.0F, 2.686F, 6.0F, 6.0F)
          close()
          moveToRelative(-1.0F, 0.0F)
          curveToRelative(0.0F, -2.761F, -2.239F, -5.0F, -5.0F, -5.0F)
          reflectiveCurveToRelative(-5.0F, 2.239F, -5.0F, 5.0F)
          reflectiveCurveToRelative(2.239F, 5.0F, 5.0F, 5.0F)
          reflectiveCurveToRelative(5.0F, -2.239F, 5.0F, -5.0F)
          close()
          moveToRelative(-0.047F, -6.358F)
          curveToRelative(-0.195F, -0.195F, -0.512F, -0.195F, -0.707F, 0.0F)
          curveToRelative(-0.195F, 0.195F, -0.195F, 0.512F, 0.0F, 0.707F)
          lineToRelative(1.403F, 1.403F)
          curveToRelative(0.195F, 0.195F, 0.512F, 0.195F, 0.707F, 0.0F)
          curveToRelative(0.195F, -0.195F, 0.195F, -0.512F, 0.0F, -0.707F)
          lineToRelative(-1.403F, -1.403F)
          close()        
      }
    }
    return _timer16!!
  }

private var _timer16: ImageVector? = null
