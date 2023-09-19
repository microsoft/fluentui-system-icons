package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DismissCircle28: ImageVector
  get() {
    if (_dismissCircle28 != null) {
      return _dismissCircle28!!
    }
    _dismissCircle28 = fluentIcon(name = "Filled.DismissCircle28", 28f) {
      materialPath {
          moveTo(26.0F, 14.0F)
          curveToRelative(0.0F, -6.627F, -5.373F, -12.0F, -12.0F, -12.0F)
          reflectiveCurveTo(2.0F, 7.373F, 2.0F, 14.0F)
          reflectiveCurveToRelative(5.373F, 12.0F, 12.0F, 12.0F)
          reflectiveCurveToRelative(12.0F, -5.373F, 12.0F, -12.0F)
          close()
          moveToRelative(-7.72F, -4.28F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          lineTo(15.06F, 14.0F)
          lineToRelative(3.22F, 3.22F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          lineTo(14.0F, 15.06F)
          lineToRelative(-3.22F, 3.22F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          lineTo(12.94F, 14.0F)
          lineToRelative(-3.22F, -3.22F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineTo(14.0F, 12.94F)
          lineToRelative(3.22F, -3.22F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          close()        
      }
    }
    return _dismissCircle28!!
  }

private var _dismissCircle28: ImageVector? = null
