package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.PresenceDnd24: ImageVector
  get() {
    if (_presenceDnd24 != null) {
      return _presenceDnd24!!
    }
    _presenceDnd24 = fluentIcon(name = "Regular.PresenceDnd24", 24f) {
      materialPath {
          moveTo(12.0F, 0.0F)
          curveTo(5.373F, 0.0F, 0.0F, 5.373F, 0.0F, 12.0F)
          reflectiveCurveToRelative(5.373F, 12.0F, 12.0F, 12.0F)
          reflectiveCurveToRelative(12.0F, -5.373F, 12.0F, -12.0F)
          reflectiveCurveTo(18.627F, 0.0F, 12.0F, 0.0F)
          close()
          moveTo(3.0F, 12.0F)
          curveToRelative(0.0F, -4.97F, 4.03F, -9.0F, 9.0F, -9.0F)
          reflectiveCurveToRelative(9.0F, 4.03F, 9.0F, 9.0F)
          reflectiveCurveToRelative(-4.03F, 9.0F, -9.0F, 9.0F)
          reflectiveCurveToRelative(-9.0F, -4.03F, -9.0F, -9.0F)
          close()
          moveToRelative(3.0F, 0.0F)
          curveToRelative(0.0F, -0.828F, 0.672F, -1.5F, 1.5F, -1.5F)
          horizontalLineToRelative(9.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, 0.672F, 1.5F, 1.5F)
          reflectiveCurveToRelative(-0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-9.0F)
          curveTo(6.672F, 13.5F, 6.0F, 12.828F, 6.0F, 12.0F)
          close()        
      }
    }
    return _presenceDnd24!!
  }

private var _presenceDnd24: ImageVector? = null
