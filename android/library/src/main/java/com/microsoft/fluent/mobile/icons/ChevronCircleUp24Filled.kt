package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ChevronCircleUp24: ImageVector
  get() {
    if (_chevronCircleUp24 != null) {
      return _chevronCircleUp24!!
    }
    _chevronCircleUp24 = fluentIcon(name = "Filled.ChevronCircleUp24", 24f) {
      materialPath {
          moveTo(12.0F, 22.0F)
          curveToRelative(5.523F, 0.0F, 10.0F, -4.477F, 10.0F, -10.0F)
          reflectiveCurveTo(17.523F, 2.0F, 12.0F, 2.0F)
          reflectiveCurveTo(2.0F, 6.477F, 2.0F, 12.0F)
          reflectiveCurveToRelative(4.477F, 10.0F, 10.0F, 10.0F)
          close()
          moveToRelative(-4.53F, -7.97F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(4.0F, -4.0F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineToRelative(4.0F, 4.0F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          lineTo(12.0F, 10.56F)
          lineToRelative(-3.47F, 3.47F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          close()        
      }
    }
    return _chevronCircleUp24!!
  }

private var _chevronCircleUp24: ImageVector? = null
