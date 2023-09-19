package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PresenceDnd20: ImageVector
  get() {
    if (_presenceDnd20 != null) {
      return _presenceDnd20!!
    }
    _presenceDnd20 = fluentIcon(name = "Filled.PresenceDnd20", 20f) {
      materialPath {
          moveTo(10.0F, 20.0F)
          curveToRelative(5.523F, 0.0F, 10.0F, -4.477F, 10.0F, -10.0F)
          reflectiveCurveTo(15.523F, 0.0F, 10.0F, 0.0F)
          reflectiveCurveTo(0.0F, 4.477F, 0.0F, 10.0F)
          reflectiveCurveToRelative(4.477F, 10.0F, 10.0F, 10.0F)
          close()
          moveTo(7.0F, 9.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          reflectiveCurveToRelative(-0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(7.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          reflectiveCurveToRelative(0.448F, -1.0F, 1.0F, -1.0F)
          close()        
      }
    }
    return _presenceDnd20!!
  }

private var _presenceDnd20: ImageVector? = null
