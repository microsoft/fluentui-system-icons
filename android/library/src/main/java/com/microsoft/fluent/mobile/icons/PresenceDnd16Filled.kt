package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PresenceDnd16: ImageVector
  get() {
    if (_presenceDnd16 != null) {
      return _presenceDnd16!!
    }
    _presenceDnd16 = fluentIcon(name = "Filled.PresenceDnd16", 16f) {
      materialPath {
          moveTo(8.0F, 16.0F)
          curveToRelative(4.418F, 0.0F, 8.0F, -3.582F, 8.0F, -8.0F)
          reflectiveCurveToRelative(-3.582F, -8.0F, -8.0F, -8.0F)
          reflectiveCurveToRelative(-8.0F, 3.582F, -8.0F, 8.0F)
          reflectiveCurveToRelative(3.582F, 8.0F, 8.0F, 8.0F)
          close()
          moveTo(5.249F, 7.0F)
          horizontalLineToRelative(5.5F)
          curveToRelative(0.553F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          reflectiveCurveToRelative(-0.447F, 1.0F, -1.0F, 1.0F)
          horizontalLineToRelative(-5.5F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          reflectiveCurveToRelative(0.448F, -1.0F, 1.0F, -1.0F)
          close()        
      }
    }
    return _presenceDnd16!!
  }

private var _presenceDnd16: ImageVector? = null
