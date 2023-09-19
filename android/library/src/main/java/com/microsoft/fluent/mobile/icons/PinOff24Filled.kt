package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PinOff24: ImageVector
  get() {
    if (_pinOff24 != null) {
      return _pinOff24!!
    }
    _pinOff24 = fluentIcon(name = "Filled.PinOff24", 24f) {
      materialPath {
          moveTo(3.28F, 2.22F)
          curveToRelative(-0.292F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(5.905F, 5.905F)
          lineTo(4.81F, 10.33F)
          curveToRelative(-0.873F, 0.302F, -1.129F, 1.413F, -0.476F, 2.065F)
          lineTo(7.439F, 15.5F)
          lineTo(3.0F, 19.94F)
          verticalLineTo(21.0F)
          horizontalLineToRelative(1.06F)
          lineToRelative(4.44F, -4.44F)
          lineToRelative(3.105F, 3.105F)
          curveToRelative(0.652F, 0.653F, 1.764F, 0.397F, 2.065F, -0.476F)
          lineToRelative(1.145F, -3.313F)
          lineToRelative(5.905F, 5.904F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          lineTo(3.28F, 2.22F)
          close()
          moveToRelative(17.074F, 9.942F)
          lineToRelative(-3.34F, 1.67F)
          lineToRelative(-6.846F, -6.846F)
          lineToRelative(1.67F, -3.34F)
          curveToRelative(0.84F, -1.678F, 3.077F, -2.041F, 4.405F, -0.714F)
          lineToRelative(4.825F, 4.825F)
          curveToRelative(1.328F, 1.328F, 0.965F, 3.565F, -0.714F, 4.405F)
          close()        
      }
    }
    return _pinOff24!!
  }

private var _pinOff24: ImageVector? = null
