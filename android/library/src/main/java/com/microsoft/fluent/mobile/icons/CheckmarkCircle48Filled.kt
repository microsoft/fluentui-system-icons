package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CheckmarkCircle48: ImageVector
  get() {
    if (_checkmarkCircle48 != null) {
      return _checkmarkCircle48!!
    }
    _checkmarkCircle48 = fluentIcon(name = "Filled.CheckmarkCircle48", 48f) {
      materialPath {
          moveTo(24.0F, 4.0F)
          curveToRelative(11.046F, 0.0F, 20.0F, 8.954F, 20.0F, 20.0F)
          reflectiveCurveToRelative(-8.954F, 20.0F, -20.0F, 20.0F)
          reflectiveCurveTo(4.0F, 35.046F, 4.0F, 24.0F)
          reflectiveCurveTo(12.954F, 4.0F, 24.0F, 4.0F)
          close()
          moveToRelative(8.634F, 13.616F)
          curveToRelative(-0.456F, -0.456F, -1.175F, -0.486F, -1.666F, -0.091F)
          lineToRelative(-0.102F, 0.091F)
          lineTo(20.75F, 27.732F)
          lineToRelative(-3.616F, -3.616F)
          curveToRelative(-0.488F, -0.488F, -1.28F, -0.488F, -1.768F, 0.0F)
          curveToRelative(-0.455F, 0.456F, -0.486F, 1.175F, -0.091F, 1.666F)
          lineToRelative(0.091F, 0.102F)
          lineToRelative(4.5F, 4.5F)
          curveToRelative(0.456F, 0.456F, 1.176F, 0.486F, 1.666F, 0.091F)
          lineToRelative(0.102F, -0.091F)
          lineToRelative(11.0F, -11.0F)
          curveToRelative(0.488F, -0.488F, 0.488F, -1.28F, 0.0F, -1.768F)
          close()        
      }
    }
    return _checkmarkCircle48!!
  }

private var _checkmarkCircle48: ImageVector? = null
