package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Previous24: ImageVector
  get() {
    if (_previous24 != null) {
      return _previous24!!
    }
    _previous24 = fluentIcon(name = "Filled.Previous24", 24f) {
      materialPath {
          moveTo(3.0F, 3.75F)
          curveTo(3.0F, 3.336F, 3.336F, 3.0F, 3.75F, 3.0F)
          reflectiveCurveTo(4.5F, 3.336F, 4.5F, 3.75F)
          verticalLineToRelative(16.5F)
          curveTo(4.5F, 20.664F, 4.164F, 21.0F, 3.75F, 21.0F)
          reflectiveCurveTo(3.0F, 20.664F, 3.0F, 20.25F)
          verticalLineTo(3.75F)
          close()
          moveToRelative(18.0F, 1.003F)
          curveToRelative(0.0F, -1.408F, -1.578F, -2.24F, -2.74F, -1.444F)
          lineTo(7.763F, 10.503F)
          curveToRelative(-1.01F, 0.692F, -1.015F, 2.18F, -0.01F, 2.88F)
          lineToRelative(10.499F, 7.302F)
          curveTo(19.41F, 21.492F, 21.0F, 20.66F, 21.0F, 19.248F)
          verticalLineTo(4.753F)
          close()        
      }
    }
    return _previous24!!
  }

private var _previous24: ImageVector? = null
