package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Oval28: ImageVector
  get() {
    if (_oval28 != null) {
      return _oval28!!
    }
    _oval28 = fluentIcon(name = "Regular.Oval28", 28f) {
      materialPath {
          moveTo(2.0F, 14.0F)
          curveToRelative(0.0F, -4.97F, 4.03F, -9.0F, 9.0F, -9.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(4.97F, 0.0F, 9.0F, 4.03F, 9.0F, 9.0F)
          reflectiveCurveToRelative(-4.03F, 9.0F, -9.0F, 9.0F)
          horizontalLineToRelative(-6.0F)
          curveToRelative(-4.97F, 0.0F, -9.0F, -4.03F, -9.0F, -9.0F)
          close()
          moveToRelative(9.0F, -7.5F)
          curveToRelative(-4.142F, 0.0F, -7.5F, 3.358F, -7.5F, 7.5F)
          curveToRelative(0.0F, 4.142F, 3.358F, 7.5F, 7.5F, 7.5F)
          horizontalLineToRelative(6.0F)
          curveToRelative(4.142F, 0.0F, 7.5F, -3.358F, 7.5F, -7.5F)
          curveToRelative(0.0F, -4.142F, -3.358F, -7.5F, -7.5F, -7.5F)
          horizontalLineToRelative(-6.0F)
          close()        
      }
    }
    return _oval28!!
  }

private var _oval28: ImageVector? = null
