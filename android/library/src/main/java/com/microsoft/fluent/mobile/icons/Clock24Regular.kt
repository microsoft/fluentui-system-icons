package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Clock24: ImageVector
  get() {
    if (_clock24 != null) {
      return _clock24!!
    }
    _clock24 = fluentIcon(name = "Regular.Clock24", 24f) {
      materialPath {
          moveTo(3.5F, 12.0F)
          curveToRelative(0.0F, -4.694F, 3.806F, -8.5F, 8.5F, -8.5F)
          reflectiveCurveToRelative(8.5F, 3.806F, 8.5F, 8.5F)
          reflectiveCurveToRelative(-3.806F, 8.5F, -8.5F, 8.5F)
          reflectiveCurveToRelative(-8.5F, -3.806F, -8.5F, -8.5F)
          close()
          moveTo(12.0F, 2.0F)
          curveTo(6.477F, 2.0F, 2.0F, 6.477F, 2.0F, 12.0F)
          reflectiveCurveToRelative(4.477F, 10.0F, 10.0F, 10.0F)
          reflectiveCurveToRelative(10.0F, -4.477F, 10.0F, -10.0F)
          reflectiveCurveTo(17.523F, 2.0F, 12.0F, 2.0F)
          close()
          moveToRelative(-0.007F, 4.648F)
          curveTo(11.943F, 6.282F, 11.63F, 6.0F, 11.25F, 6.0F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          verticalLineToRelative(6.0F)
          lineToRelative(0.007F, 0.102F)
          curveToRelative(0.05F, 0.366F, 0.364F, 0.648F, 0.743F, 0.648F)
          horizontalLineToRelative(4.0F)
          lineToRelative(0.102F, -0.007F)
          curveTo(15.718F, 13.443F, 16.0F, 13.13F, 16.0F, 12.75F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineTo(12.0F)
          verticalLineTo(6.75F)
          lineToRelative(-0.007F, -0.102F)
          close()        
      }
    }
    return _clock24!!
  }

private var _clock24: ImageVector? = null
