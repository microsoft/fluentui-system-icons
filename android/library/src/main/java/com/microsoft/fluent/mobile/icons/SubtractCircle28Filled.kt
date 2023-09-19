package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.SubtractCircle28: ImageVector
  get() {
    if (_subtractCircle28 != null) {
      return _subtractCircle28!!
    }
    _subtractCircle28 = fluentIcon(name = "Filled.SubtractCircle28", 28f) {
      materialPath {
          moveTo(14.0F, 2.0F)
          curveToRelative(6.627F, 0.0F, 12.0F, 5.373F, 12.0F, 12.0F)
          reflectiveCurveToRelative(-5.373F, 12.0F, -12.0F, 12.0F)
          reflectiveCurveTo(2.0F, 20.627F, 2.0F, 14.0F)
          reflectiveCurveTo(7.373F, 2.0F, 14.0F, 2.0F)
          close()
          moveTo(8.75F, 13.25F)
          curveTo(8.336F, 13.25F, 8.0F, 13.586F, 8.0F, 14.0F)
          curveToRelative(0.0F, 0.38F, 0.282F, 0.694F, 0.648F, 0.743F)
          lineTo(8.75F, 14.75F)
          horizontalLineToRelative(10.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          curveToRelative(0.0F, -0.38F, -0.282F, -0.694F, -0.648F, -0.743F)
          lineTo(19.25F, 13.25F)
          horizontalLineTo(8.75F)
          close()        
      }
    }
    return _subtractCircle28!!
  }

private var _subtractCircle28: ImageVector? = null
