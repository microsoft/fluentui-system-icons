package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Heart24: ImageVector
  get() {
    if (_heart24 != null) {
      return _heart24!!
    }
    _heart24 = fluentIcon(name = "Filled.Heart24", 24f) {
      materialPath {
          moveTo(12.82F, 5.58F)
          lineTo(12.0F, 6.401F)
          lineToRelative(-0.824F, -0.824F)
          curveToRelative(-2.1F, -2.099F, -5.502F, -2.099F, -7.601F, 0.0F)
          curveToRelative(-2.1F, 2.1F, -2.1F, 5.503F, 0.0F, 7.602F)
          lineToRelative(7.895F, 7.895F)
          curveToRelative(0.293F, 0.293F, 0.768F, 0.293F, 1.06F, 0.0F)
          lineToRelative(7.902F, -7.897F)
          curveToRelative(2.094F, -2.106F, 2.098F, -5.5F, -0.001F, -7.599F)
          curveToRelative(-2.103F, -2.103F, -5.508F, -2.103F, -7.611F, 0.0F)
          close()        
      }
    }
    return _heart24!!
  }

private var _heart24: ImageVector? = null
