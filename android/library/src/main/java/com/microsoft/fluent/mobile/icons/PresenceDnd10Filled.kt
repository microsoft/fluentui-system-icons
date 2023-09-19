package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PresenceDnd10: ImageVector
  get() {
    if (_presenceDnd10 != null) {
      return _presenceDnd10!!
    }
    _presenceDnd10 = fluentIcon(name = "Filled.PresenceDnd10", 10f) {
      materialPath {
          moveTo(5.0F, 10.0F)
          curveToRelative(2.761F, 0.0F, 5.0F, -2.239F, 5.0F, -5.0F)
          reflectiveCurveTo(7.761F, 0.0F, 5.0F, 0.0F)
          reflectiveCurveTo(0.0F, 2.239F, 0.0F, 5.0F)
          reflectiveCurveToRelative(2.239F, 5.0F, 5.0F, 5.0F)
          close()
          moveTo(3.5F, 4.5F)
          horizontalLineToRelative(3.0F)
          curveTo(6.776F, 4.5F, 7.0F, 4.724F, 7.0F, 5.0F)
          reflectiveCurveTo(6.776F, 5.5F, 6.5F, 5.5F)
          horizontalLineToRelative(-3.0F)
          curveTo(3.224F, 5.5F, 3.0F, 5.276F, 3.0F, 5.0F)
          reflectiveCurveToRelative(0.224F, -0.5F, 0.5F, -0.5F)
          close()        
      }
    }
    return _presenceDnd10!!
  }

private var _presenceDnd10: ImageVector? = null
