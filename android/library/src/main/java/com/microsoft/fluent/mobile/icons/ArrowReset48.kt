package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowReset48: ImageVector
  get() {
    if (_arrowReset48 != null) {
      return _arrowReset48!!
    }
    _arrowReset48 = fluentIcon(name = "Filled.ArrowReset48", 48f) {
      materialPath {
          moveTo(13.81F, 6.81F)
          curveToRelative(0.586F, -0.585F, 0.586F, -1.535F, 0.0F, -2.12F)
          curveToRelative(-0.585F, -0.587F, -1.535F, -0.587F, -2.12F, 0.0F)
          lineToRelative(-7.5F, 7.5F)
          curveToRelative(-0.587F, 0.585F, -0.587F, 1.535F, 0.0F, 2.12F)
          lineToRelative(7.5F, 7.5F)
          curveToRelative(0.585F, 0.586F, 1.535F, 0.586F, 2.12F, 0.0F)
          curveToRelative(0.586F, -0.585F, 0.586F, -1.535F, 0.0F, -2.12F)
          lineToRelative(-4.939F, -4.94F)
          horizontalLineTo(26.5F)
          curveToRelative(7.042F, 0.0F, 12.75F, 5.708F, 12.75F, 12.75F)
          reflectiveCurveTo(33.542F, 40.25F, 26.5F, 40.25F)
          reflectiveCurveTo(13.75F, 34.542F, 13.75F, 27.5F)
          curveToRelative(0.0F, -0.828F, -0.672F, -1.5F, -1.5F, -1.5F)
          reflectiveCurveToRelative(-1.5F, 0.672F, -1.5F, 1.5F)
          curveToRelative(0.0F, 8.699F, 7.052F, 15.75F, 15.75F, 15.75F)
          curveToRelative(8.699F, 0.0F, 15.75F, -7.051F, 15.75F, -15.75F)
          curveToRelative(0.0F, -8.698F, -7.051F, -15.75F, -15.75F, -15.75F)
          horizontalLineTo(8.871F)
          lineToRelative(4.94F, -4.94F)
          close()        
      }
    }
    return _arrowReset48!!
  }

private var _arrowReset48: ImageVector? = null
