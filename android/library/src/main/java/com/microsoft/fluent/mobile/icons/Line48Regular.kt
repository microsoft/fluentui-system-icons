package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Line48: ImageVector
  get() {
    if (_line48 != null) {
      return _line48!!
    }
    _line48 = fluentIcon(name = "Regular.Line48", 48f) {
      materialPath {
          moveTo(43.634F, 4.366F)
          curveToRelative(0.488F, 0.488F, 0.488F, 1.28F, 0.0F, 1.768F)
          lineToRelative(-37.5F, 37.5F)
          curveToRelative(-0.488F, 0.488F, -1.28F, 0.488F, -1.768F, 0.0F)
          reflectiveCurveToRelative(-0.488F, -1.28F, 0.0F, -1.768F)
          lineToRelative(37.5F, -37.5F)
          curveToRelative(0.488F, -0.488F, 1.28F, -0.488F, 1.768F, 0.0F)
          close()        
      }
    }
    return _line48!!
  }

private var _line48: ImageVector? = null
