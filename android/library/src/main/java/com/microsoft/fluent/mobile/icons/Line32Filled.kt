package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Line32: ImageVector
  get() {
    if (_line32 != null) {
      return _line32!!
    }
    _line32 = fluentIcon(name = "Filled.Line32", 32f) {
      materialPath {
          moveTo(28.634F, 3.366F)
          curveToRelative(0.488F, 0.488F, 0.488F, 1.28F, 0.0F, 1.768F)
          lineToRelative(-23.5F, 23.5F)
          curveToRelative(-0.488F, 0.488F, -1.28F, 0.488F, -1.768F, 0.0F)
          reflectiveCurveToRelative(-0.488F, -1.28F, 0.0F, -1.768F)
          lineToRelative(23.5F, -23.5F)
          curveToRelative(0.488F, -0.488F, 1.28F, -0.488F, 1.768F, 0.0F)
          close()        
      }
    }
    return _line32!!
  }

private var _line32: ImageVector? = null
