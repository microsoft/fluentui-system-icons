package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ChevronCircleUp48: ImageVector
  get() {
    if (_chevronCircleUp48 != null) {
      return _chevronCircleUp48!!
    }
    _chevronCircleUp48 = fluentIcon(name = "Filled.ChevronCircleUp48", 48f) {
      materialPath {
          moveTo(24.0F, 4.0F)
          curveToRelative(11.046F, 0.0F, 20.0F, 8.954F, 20.0F, 20.0F)
          reflectiveCurveToRelative(-8.954F, 20.0F, -20.0F, 20.0F)
          reflectiveCurveTo(4.0F, 35.046F, 4.0F, 24.0F)
          reflectiveCurveTo(12.954F, 4.0F, 24.0F, 4.0F)
          close()
          moveToRelative(-8.616F, 23.634F)
          lineTo(24.0F, 19.018F)
          lineToRelative(8.616F, 8.616F)
          curveToRelative(0.488F, 0.488F, 1.28F, 0.488F, 1.768F, 0.0F)
          reflectiveCurveToRelative(0.488F, -1.28F, 0.0F, -1.768F)
          lineToRelative(-9.5F, -9.5F)
          curveToRelative(-0.488F, -0.488F, -1.28F, -0.488F, -1.768F, 0.0F)
          lineToRelative(-9.5F, 9.5F)
          curveToRelative(-0.488F, 0.488F, -0.488F, 1.28F, 0.0F, 1.768F)
          reflectiveCurveToRelative(1.28F, 0.488F, 1.768F, 0.0F)
          close()        
      }
    }
    return _chevronCircleUp48!!
  }

private var _chevronCircleUp48: ImageVector? = null
