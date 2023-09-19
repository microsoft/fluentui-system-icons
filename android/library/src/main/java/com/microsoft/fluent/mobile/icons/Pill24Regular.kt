package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Pill24: ImageVector
  get() {
    if (_pill24 != null) {
      return _pill24!!
    }
    _pill24 = fluentIcon(name = "Regular.Pill24", 24f) {
      materialPath {
          moveTo(10.53F, 15.47F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(-2.0F, 2.0F)
          curveToRelative(-0.843F, 0.843F, -2.209F, 0.845F, -3.054F, 0.007F)
          curveToRelative(-0.14F, -0.136F, -0.227F, -0.326F, -0.227F, -0.537F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          curveToRelative(0.207F, 0.0F, 0.395F, 0.084F, 0.53F, 0.22F)
          curveToRelative(0.26F, 0.26F, 0.68F, 0.26F, 0.94F, 0.0F)
          lineToRelative(2.0F, -2.0F)
          curveToRelative(0.293F, -0.293F, 0.768F, -0.293F, 1.06F, 0.0F)
          close()
          moveToRelative(2.772F, -11.945F)
          curveToRelative(1.98F, -1.98F, 5.192F, -1.98F, 7.172F, 0.0F)
          curveToRelative(1.98F, 1.98F, 1.98F, 5.192F, 0.0F, 7.172F)
          lineToRelative(-9.778F, 9.778F)
          curveToRelative(-1.98F, 1.98F, -5.191F, 1.98F, -7.172F, 0.0F)
          curveToRelative(-1.98F, -1.98F, -1.98F, -5.191F, 0.0F, -7.172F)
          lineToRelative(9.778F, -9.778F)
          close()
          moveToRelative(6.111F, 1.061F)
          curveToRelative(-1.394F, -1.395F, -3.655F, -1.395F, -5.05F, 0.0F)
          lineToRelative(-4.359F, 4.359F)
          lineToRelative(5.05F, 5.05F)
          lineToRelative(4.36F, -4.358F)
          curveToRelative(1.394F, -1.395F, 1.394F, -3.656F, 0.0F, -5.051F)
          close()
          moveToRelative(-5.419F, 10.47F)
          lineToRelative(-5.05F, -5.05F)
          lineToRelative(-4.359F, 4.358F)
          curveToRelative(-1.395F, 1.394F, -1.395F, 3.656F, 0.0F, 5.05F)
          curveToRelative(1.395F, 1.395F, 3.656F, 1.395F, 5.05F, 0.0F)
          lineToRelative(4.36F, -4.358F)
          close()        
      }
    }
    return _pill24!!
  }

private var _pill24: ImageVector? = null
