package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.RadioButton20: ImageVector
  get() {
    if (_radioButton20 != null) {
      return _radioButton20!!
    }
    _radioButton20 = fluentIcon(name = "Regular.RadioButton20", 20f) {
      materialPath {
          moveTo(10.0F, 3.0F)
          curveToRelative(-3.866F, 0.0F, -7.0F, 3.134F, -7.0F, 7.0F)
          reflectiveCurveToRelative(3.134F, 7.0F, 7.0F, 7.0F)
          reflectiveCurveToRelative(7.0F, -3.134F, 7.0F, -7.0F)
          reflectiveCurveToRelative(-3.134F, -7.0F, -7.0F, -7.0F)
          close()
          moveToRelative(-8.0F, 7.0F)
          curveToRelative(0.0F, -4.418F, 3.582F, -8.0F, 8.0F, -8.0F)
          reflectiveCurveToRelative(8.0F, 3.582F, 8.0F, 8.0F)
          reflectiveCurveToRelative(-3.582F, 8.0F, -8.0F, 8.0F)
          reflectiveCurveToRelative(-8.0F, -3.582F, -8.0F, -8.0F)
          close()        
      }
    }
    return _radioButton20!!
  }

private var _radioButton20: ImageVector? = null
