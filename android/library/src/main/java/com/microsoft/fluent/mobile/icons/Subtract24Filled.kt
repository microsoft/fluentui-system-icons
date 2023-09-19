package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Subtract24: ImageVector
  get() {
    if (_subtract24 != null) {
      return _subtract24!!
    }
    _subtract24 = fluentIcon(name = "Filled.Subtract24", 24f) {
      materialPath {
          moveTo(3.996F, 13.0F)
          horizontalLineTo(20.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          reflectiveCurveToRelative(-0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(3.996F)
          curveToRelative(-0.552F, 0.0F, -1.0F, 0.448F, -1.0F, 1.0F)
          reflectiveCurveToRelative(0.448F, 1.0F, 1.0F, 1.0F)
          close()        
      }
    }
    return _subtract24!!
  }

private var _subtract24: ImageVector? = null
