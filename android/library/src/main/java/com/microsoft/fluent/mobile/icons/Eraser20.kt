package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Eraser20: ImageVector
  get() {
    if (_eraser20 != null) {
      return _eraser20!!
    }
    _eraser20 = fluentIcon(name = "Filled.Eraser20", 20f) {
      materialPath {
          moveTo(11.197F, 2.44F)
          curveToRelative(0.586F, -0.587F, 1.536F, -0.587F, 2.121F, 0.0F)
          lineToRelative(4.243F, 4.242F)
          curveToRelative(0.586F, 0.586F, 0.586F, 1.535F, 0.0F, 2.121F)
          lineTo(9.364F, 17.0F)
          horizontalLineTo(14.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveTo(14.776F, 18.0F, 14.5F, 18.0F)
          horizontalLineTo(7.82F)
          curveToRelative(-0.41F, 0.022F, -0.827F, -0.124F, -1.14F, -0.437F)
          lineTo(2.437F, 13.32F)
          curveToRelative(-0.585F, -0.585F, -0.585F, -1.535F, 0.0F, -2.121F)
          lineToRelative(8.76F, -8.76F)
          close()
          moveTo(9.781F, 15.168F)
          lineToRelative(-4.95F, -4.95F)
          lineToRelative(-1.687F, 1.687F)
          curveToRelative(-0.195F, 0.195F, -0.195F, 0.512F, 0.0F, 0.707F)
          lineToRelative(4.243F, 4.243F)
          curveToRelative(0.195F, 0.195F, 0.512F, 0.195F, 0.707F, 0.0F)
          lineToRelative(1.687F, -1.687F)
          close()        
      }
    }
    return _eraser20!!
  }

private var _eraser20: ImageVector? = null
