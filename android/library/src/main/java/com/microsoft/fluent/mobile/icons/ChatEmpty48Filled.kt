package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ChatEmpty48: ImageVector
  get() {
    if (_chatEmpty48 != null) {
      return _chatEmpty48!!
    }
    _chatEmpty48 = fluentIcon(name = "Filled.ChatEmpty48", 48f) {
      materialPath {
          moveTo(4.0F, 24.0F)
          curveTo(4.0F, 12.954F, 12.954F, 4.0F, 24.0F, 4.0F)
          reflectiveCurveToRelative(20.0F, 8.954F, 20.0F, 20.0F)
          reflectiveCurveToRelative(-8.954F, 20.0F, -20.0F, 20.0F)
          curveToRelative(-3.45F, 0.0F, -6.698F, -0.874F, -9.534F, -2.414F)
          lineToRelative(-8.235F, 2.342F)
          curveToRelative(-1.319F, 0.375F, -2.537F, -0.844F, -2.162F, -2.162F)
          lineToRelative(2.343F, -8.238F)
          curveTo(4.873F, 30.695F, 4.0F, 27.448F, 4.0F, 24.0F)
          close()        
      }
    }
    return _chatEmpty48!!
  }

private var _chatEmpty48: ImageVector? = null
