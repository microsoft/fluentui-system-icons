package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ChevronCircleLeft48: ImageVector
  get() {
    if (_chevronCircleLeft48 != null) {
      return _chevronCircleLeft48!!
    }
    _chevronCircleLeft48 = fluentIcon(name = "Filled.ChevronCircleLeft48", 48f) {
      materialPath {
          moveTo(24.0F, 4.0F)
          curveTo(12.954F, 4.0F, 4.0F, 12.954F, 4.0F, 24.0F)
          reflectiveCurveToRelative(8.954F, 20.0F, 20.0F, 20.0F)
          reflectiveCurveToRelative(20.0F, -8.954F, 20.0F, -20.0F)
          reflectiveCurveTo(35.046F, 4.0F, 24.0F, 4.0F)
          close()
          moveToRelative(3.634F, 28.616F)
          curveToRelative(0.488F, 0.488F, 0.488F, 1.28F, 0.0F, 1.768F)
          reflectiveCurveToRelative(-1.28F, 0.488F, -1.768F, 0.0F)
          lineToRelative(-9.5F, -9.5F)
          curveToRelative(-0.488F, -0.488F, -0.488F, -1.28F, 0.0F, -1.768F)
          lineToRelative(9.5F, -9.5F)
          curveToRelative(0.488F, -0.488F, 1.28F, -0.488F, 1.768F, 0.0F)
          reflectiveCurveToRelative(0.488F, 1.28F, 0.0F, 1.768F)
          lineTo(19.018F, 24.0F)
          lineToRelative(8.616F, 8.616F)
          close()        
      }
    }
    return _chevronCircleLeft48!!
  }

private var _chevronCircleLeft48: ImageVector? = null
