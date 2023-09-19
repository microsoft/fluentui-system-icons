package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ChevronCircleUp48: ImageVector
  get() {
    if (_chevronCircleUp48 != null) {
      return _chevronCircleUp48!!
    }
    _chevronCircleUp48 = fluentIcon(name = "Regular.ChevronCircleUp48", 48f) {
      materialPath {
          moveTo(6.5F, 24.0F)
          curveToRelative(0.0F, 9.665F, 7.835F, 17.5F, 17.5F, 17.5F)
          reflectiveCurveTo(41.5F, 33.665F, 41.5F, 24.0F)
          reflectiveCurveTo(33.665F, 6.5F, 24.0F, 6.5F)
          reflectiveCurveTo(6.5F, 14.335F, 6.5F, 24.0F)
          close()
          moveTo(24.0F, 44.0F)
          curveTo(12.954F, 44.0F, 4.0F, 35.046F, 4.0F, 24.0F)
          reflectiveCurveTo(12.954F, 4.0F, 24.0F, 4.0F)
          reflectiveCurveToRelative(20.0F, 8.954F, 20.0F, 20.0F)
          reflectiveCurveToRelative(-8.954F, 20.0F, -20.0F, 20.0F)
          close()
          moveToRelative(-8.616F, -16.366F)
          curveToRelative(-0.488F, 0.488F, -1.28F, 0.488F, -1.768F, 0.0F)
          reflectiveCurveToRelative(-0.488F, -1.28F, 0.0F, -1.768F)
          lineToRelative(9.5F, -9.5F)
          curveToRelative(0.488F, -0.488F, 1.28F, -0.488F, 1.768F, 0.0F)
          lineToRelative(9.5F, 9.5F)
          curveToRelative(0.488F, 0.488F, 0.488F, 1.28F, 0.0F, 1.768F)
          reflectiveCurveToRelative(-1.28F, 0.488F, -1.768F, 0.0F)
          lineTo(24.0F, 19.018F)
          lineToRelative(-8.616F, 8.616F)
          close()        
      }
    }
    return _chevronCircleUp48!!
  }

private var _chevronCircleUp48: ImageVector? = null
