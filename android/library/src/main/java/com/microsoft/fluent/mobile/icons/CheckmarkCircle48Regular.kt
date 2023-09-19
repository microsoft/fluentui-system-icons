package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.CheckmarkCircle48: ImageVector
  get() {
    if (_checkmarkCircle48 != null) {
      return _checkmarkCircle48!!
    }
    _checkmarkCircle48 = fluentIcon(name = "Regular.CheckmarkCircle48", 48f) {
      materialPath {
          moveTo(24.0F, 4.0F)
          curveToRelative(11.046F, 0.0F, 20.0F, 8.954F, 20.0F, 20.0F)
          reflectiveCurveToRelative(-8.954F, 20.0F, -20.0F, 20.0F)
          reflectiveCurveTo(4.0F, 35.046F, 4.0F, 24.0F)
          reflectiveCurveTo(12.954F, 4.0F, 24.0F, 4.0F)
          close()
          moveToRelative(0.0F, 2.5F)
          curveTo(14.335F, 6.5F, 6.5F, 14.335F, 6.5F, 24.0F)
          reflectiveCurveTo(14.335F, 41.5F, 24.0F, 41.5F)
          reflectiveCurveTo(41.5F, 33.665F, 41.5F, 24.0F)
          reflectiveCurveTo(33.665F, 6.5F, 24.0F, 6.5F)
          close()
          moveToRelative(8.634F, 11.116F)
          curveToRelative(0.488F, 0.488F, 0.488F, 1.28F, 0.0F, 1.768F)
          lineToRelative(-11.0F, 11.0F)
          curveToRelative(-0.488F, 0.488F, -1.28F, 0.488F, -1.768F, 0.0F)
          lineToRelative(-4.5F, -4.5F)
          curveToRelative(-0.488F, -0.488F, -0.488F, -1.28F, 0.0F, -1.768F)
          reflectiveCurveToRelative(1.28F, -0.488F, 1.768F, 0.0F)
          lineToRelative(3.616F, 3.616F)
          lineToRelative(10.116F, -10.116F)
          curveToRelative(0.488F, -0.488F, 1.28F, -0.488F, 1.768F, 0.0F)
          close()        
      }
    }
    return _checkmarkCircle48!!
  }

private var _checkmarkCircle48: ImageVector? = null
