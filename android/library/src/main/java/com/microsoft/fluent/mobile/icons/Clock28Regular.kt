package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Clock28: ImageVector
  get() {
    if (_clock28 != null) {
      return _clock28!!
    }
    _clock28 = fluentIcon(name = "Regular.Clock28", 28f) {
      materialPath {
          moveTo(3.5F, 14.0F)
          curveTo(3.5F, 8.201F, 8.201F, 3.5F, 14.0F, 3.5F)
          reflectiveCurveTo(24.5F, 8.201F, 24.5F, 14.0F)
          reflectiveCurveTo(19.799F, 24.5F, 14.0F, 24.5F)
          reflectiveCurveTo(3.5F, 19.799F, 3.5F, 14.0F)
          close()
          moveTo(14.0F, 2.0F)
          curveTo(7.373F, 2.0F, 2.0F, 7.373F, 2.0F, 14.0F)
          reflectiveCurveToRelative(5.373F, 12.0F, 12.0F, 12.0F)
          reflectiveCurveToRelative(12.0F, -5.373F, 12.0F, -12.0F)
          reflectiveCurveTo(20.627F, 2.0F, 14.0F, 2.0F)
          close()
          moveToRelative(-0.007F, 5.648F)
          curveTo(13.943F, 7.282F, 13.63F, 7.0F, 13.25F, 7.0F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          verticalLineToRelative(7.0F)
          lineToRelative(0.007F, 0.102F)
          curveToRelative(0.05F, 0.366F, 0.364F, 0.648F, 0.743F, 0.648F)
          horizontalLineToRelative(5.0F)
          lineToRelative(0.102F, -0.007F)
          curveTo(18.718F, 15.443F, 19.0F, 15.13F, 19.0F, 14.75F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineTo(14.0F)
          verticalLineTo(7.75F)
          lineToRelative(-0.007F, -0.102F)
          close()        
      }
    }
    return _clock28!!
  }

private var _clock28: ImageVector? = null
