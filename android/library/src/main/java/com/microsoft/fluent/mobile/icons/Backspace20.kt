package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Backspace20: ImageVector
  get() {
    if (_backspace20 != null) {
      return _backspace20!!
    }
    _backspace20 = fluentIcon(name = "Filled.Backspace20", 20f) {
      materialPath {
          moveTo(8.283F, 4.0F)
          curveToRelative(-0.63F, 0.0F, -1.235F, 0.237F, -1.697F, 0.664F)
          lineToRelative(-3.787F, 3.5F)
          curveToRelative(-1.07F, 0.99F, -1.07F, 2.682F, 0.0F, 3.672F)
          lineToRelative(3.787F, 3.5F)
          curveTo(7.048F, 15.763F, 7.654F, 16.0F, 8.283F, 16.0F)
          horizontalLineTo(15.5F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineToRelative(-7.0F)
          curveTo(18.0F, 5.12F, 16.88F, 4.0F, 15.5F, 4.0F)
          horizontalLineTo(8.283F)
          close()
          moveToRelative(0.864F, 3.146F)
          curveToRelative(0.195F, -0.195F, 0.511F, -0.195F, 0.707F, 0.0F)
          lineTo(12.0F, 9.293F)
          lineToRelative(2.146F, -2.146F)
          curveToRelative(0.196F, -0.196F, 0.512F, -0.196F, 0.708F, 0.0F)
          curveToRelative(0.195F, 0.195F, 0.195F, 0.511F, 0.0F, 0.707F)
          lineTo(12.707F, 10.0F)
          lineToRelative(2.147F, 2.146F)
          curveToRelative(0.195F, 0.196F, 0.195F, 0.512F, 0.0F, 0.708F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.708F, 0.0F)
          lineTo(12.0F, 10.707F)
          lineToRelative(-2.146F, 2.147F)
          curveToRelative(-0.196F, 0.195F, -0.512F, 0.195F, -0.707F, 0.0F)
          curveToRelative(-0.196F, -0.196F, -0.196F, -0.512F, 0.0F, -0.707F)
          lineTo(11.293F, 10.0F)
          lineTo(9.147F, 7.854F)
          curveToRelative(-0.196F, -0.196F, -0.196F, -0.512F, 0.0F, -0.708F)
          close()        
      }
    }
    return _backspace20!!
  }

private var _backspace20: ImageVector? = null
