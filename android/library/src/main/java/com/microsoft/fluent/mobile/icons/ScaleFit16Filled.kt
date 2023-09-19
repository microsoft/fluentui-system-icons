package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ScaleFit16: ImageVector
  get() {
    if (_scaleFit16 != null) {
      return _scaleFit16!!
    }
    _scaleFit16 = fluentIcon(name = "Filled.ScaleFit16", 16f) {
      materialPath {
          moveTo(2.0F, 4.998F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, -0.895F, 2.0F, -2.0F)
          verticalLineToRelative(-6.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(4.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, 0.895F, -2.0F, 2.0F)
          close()
          moveToRelative(7.65F, 4.86F)
          curveToRelative(-0.195F, -0.195F, -0.195F, -0.512F, 0.0F, -0.707F)
          lineToRelative(0.65F, -0.65F)
          horizontalLineTo(8.752F)
          curveToRelative(-0.276F, 0.0F, -0.5F, -0.224F, -0.5F, -0.5F)
          curveToRelative(0.0F, -0.277F, 0.224F, -0.5F, 0.5F, -0.5F)
          horizontalLineToRelative(1.542F)
          lineTo(9.65F, 6.857F)
          curveToRelative(-0.195F, -0.195F, -0.195F, -0.512F, 0.0F, -0.707F)
          curveToRelative(0.195F, -0.195F, 0.512F, -0.195F, 0.707F, 0.0F)
          lineToRelative(1.5F, 1.5F)
          curveToRelative(0.195F, 0.195F, 0.195F, 0.512F, 0.0F, 0.707F)
          lineToRelative(-1.5F, 1.5F)
          curveToRelative(-0.195F, 0.195F, -0.512F, 0.195F, -0.707F, 0.0F)
          close()
          moveTo(6.352F, 6.151F)
          curveToRelative(0.195F, 0.195F, 0.195F, 0.512F, 0.0F, 0.707F)
          lineTo(5.71F, 7.5F)
          lineToRelative(1.54F, 0.001F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          reflectiveCurveToRelative(-0.225F, 0.5F, -0.5F, 0.5F)
          lineTo(5.7F, 8.498F)
          lineTo(6.352F, 9.15F)
          curveToRelative(0.195F, 0.195F, 0.195F, 0.512F, 0.0F, 0.707F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.707F, 0.0F)
          lineToRelative(-1.5F, -1.5F)
          curveToRelative(-0.196F, -0.195F, -0.196F, -0.512F, 0.0F, -0.707F)
          lineToRelative(1.5F, -1.5F)
          curveToRelative(0.195F, -0.195F, 0.512F, -0.195F, 0.707F, 0.0F)
          close()        
      }
    }
    return _scaleFit16!!
  }

private var _scaleFit16: ImageVector? = null
