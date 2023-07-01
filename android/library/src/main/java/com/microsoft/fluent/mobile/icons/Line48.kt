package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Line48: ImageVector
  get() {
    if (_line48 != null) {
      return _line48!!
    }
    _line48 = fluentIcon(name = "Filled.Line48", 48f) {
      materialPath {
          moveTo(43.56F, 4.44F)
          curveToRelative(0.586F, 0.585F, 0.586F, 1.535F, 0.0F, 2.12F)
          lineToRelative(-37.0F, 37.0F)
          curveToRelative(-0.585F, 0.586F, -1.535F, 0.586F, -2.12F, 0.0F)
          curveToRelative(-0.587F, -0.585F, -0.587F, -1.535F, 0.0F, -2.12F)
          lineToRelative(37.0F, -37.0F)
          curveToRelative(0.585F, -0.587F, 1.535F, -0.587F, 2.12F, 0.0F)
          close()        
      }
    }
    return _line48!!
  }

private var _line48: ImageVector? = null
