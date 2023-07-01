package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Broom16: ImageVector
  get() {
    if (_broom16 != null) {
      return _broom16!!
    }
    _broom16 = fluentIcon(name = "Filled.Broom16", 16f) {
      materialPath {
          moveTo(14.854F, 1.147F)
          curveToRelative(0.195F, 0.195F, 0.195F, 0.511F, 0.0F, 0.706F)
          lineToRelative(-3.958F, 3.958F)
          curveTo(10.792F, 5.683F, 10.68F, 5.56F, 10.56F, 5.44F)
          curveToRelative(-0.12F, -0.12F, -0.244F, -0.231F, -0.373F, -0.335F)
          lineToRelative(3.958F, -3.958F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          close()
          moveTo(4.653F, 6.19F)
          lineTo(4.262F, 6.555F)
          lineToRelative(5.195F, 5.195F)
          lineToRelative(0.396F, -0.396F)
          curveToRelative(1.445F, -1.445F, 1.445F, -3.762F, 0.0F, -5.207F)
          curveTo(8.4F, 4.692F, 6.088F, 4.761F, 4.653F, 6.19F)
          close()
          moveToRelative(-3.36F, 1.855F)
          lineToRelative(2.093F, -0.952F)
          lineToRelative(5.52F, 5.52F)
          lineToRelative(-0.95F, 2.094F)
          curveToRelative(-0.069F, 0.15F, -0.205F, 0.256F, -0.367F, 0.285F)
          curveToRelative(-0.161F, 0.03F, -0.327F, -0.023F, -0.443F, -0.139F)
          lineToRelative(-6.0F, -6.0F)
          curveTo(1.031F, 8.739F, 0.98F, 8.574F, 1.008F, 8.412F)
          curveToRelative(0.03F, -0.162F, 0.136F, -0.298F, 0.285F, -0.366F)
          close()        
      }
    }
    return _broom16!!
  }

private var _broom16: ImageVector? = null
