package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.AddSubtractCircle24: ImageVector
  get() {
    if (_addSubtractCircle24 != null) {
      return _addSubtractCircle24!!
    }
    _addSubtractCircle24 = fluentIcon(name = "Filled.AddSubtractCircle24", 24f) {
      materialPath {
          moveTo(13.75F, 14.5F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          reflectiveCurveTo(13.336F, 16.0F, 13.75F, 16.0F)
          horizontalLineToRelative(3.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineToRelative(-3.5F)
          close()
          moveTo(12.0F, 22.0F)
          curveToRelative(5.523F, 0.0F, 10.0F, -4.477F, 10.0F, -10.0F)
          reflectiveCurveTo(17.523F, 2.0F, 12.0F, 2.0F)
          reflectiveCurveTo(2.0F, 6.477F, 2.0F, 12.0F)
          reflectiveCurveToRelative(4.477F, 10.0F, 10.0F, 10.0F)
          close()
          moveToRelative(6.517F, -15.457F)
          curveTo(19.755F, 8.02F, 20.5F, 9.923F, 20.5F, 12.0F)
          curveToRelative(0.0F, 4.694F, -3.806F, 8.5F, -8.5F, 8.5F)
          curveToRelative(-2.077F, 0.0F, -3.98F, -0.745F, -5.457F, -1.983F)
          lineTo(18.517F, 6.543F)
          close()
          moveTo(6.0F, 8.75F)
          curveTo(6.0F, 8.336F, 6.336F, 8.0F, 6.75F, 8.0F)
          horizontalLineTo(8.0F)
          verticalLineTo(6.75F)
          curveTo(8.0F, 6.336F, 8.336F, 6.0F, 8.75F, 6.0F)
          reflectiveCurveTo(9.5F, 6.336F, 9.5F, 6.75F)
          verticalLineTo(8.0F)
          horizontalLineToRelative(1.25F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveTo(11.164F, 9.5F, 10.75F, 9.5F)
          horizontalLineTo(9.5F)
          verticalLineToRelative(1.25F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveTo(8.0F, 11.164F, 8.0F, 10.75F)
          verticalLineTo(9.5F)
          horizontalLineTo(6.75F)
          curveTo(6.336F, 9.5F, 6.0F, 9.164F, 6.0F, 8.75F)
          close()        
      }
    }
    return _addSubtractCircle24!!
  }

private var _addSubtractCircle24: ImageVector? = null
