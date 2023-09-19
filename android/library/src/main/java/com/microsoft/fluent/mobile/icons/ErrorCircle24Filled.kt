package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ErrorCircle24: ImageVector
  get() {
    if (_errorCircle24 != null) {
      return _errorCircle24!!
    }
    _errorCircle24 = fluentIcon(name = "Filled.ErrorCircle24", 24f) {
      materialPath {
          moveTo(12.0F, 2.0F)
          curveToRelative(5.523F, 0.0F, 10.0F, 4.478F, 10.0F, 10.0F)
          reflectiveCurveToRelative(-4.477F, 10.0F, -10.0F, 10.0F)
          reflectiveCurveTo(2.0F, 17.522F, 2.0F, 12.0F)
          reflectiveCurveTo(6.477F, 2.0F, 12.0F, 2.0F)
          close()
          moveToRelative(0.002F, 13.004F)
          curveToRelative(-0.552F, 0.0F, -0.999F, 0.447F, -0.999F, 0.998F)
          curveToRelative(0.0F, 0.552F, 0.447F, 0.999F, 0.999F, 0.999F)
          curveToRelative(0.551F, 0.0F, 0.998F, -0.447F, 0.998F, -0.999F)
          curveToRelative(0.0F, -0.551F, -0.447F, -0.998F, -0.998F, -0.998F)
          close()
          moveTo(12.0F, 7.0F)
          curveToRelative(-0.513F, 0.0F, -0.936F, 0.386F, -0.993F, 0.884F)
          lineTo(11.0F, 8.0F)
          lineToRelative(0.002F, 5.001F)
          lineToRelative(0.007F, 0.117F)
          curveTo(11.066F, 13.615F, 11.489F, 14.0F, 12.002F, 14.0F)
          reflectiveCurveToRelative(0.935F, -0.386F, 0.993F, -0.884F)
          lineTo(13.002F, 13.0F)
          lineTo(13.0F, 8.0F)
          lineToRelative(-0.007F, -0.117F)
          curveTo(12.935F, 7.386F, 12.513F, 7.0F, 12.0F, 7.0F)
          close()        
      }
    }
    return _errorCircle24!!
  }

private var _errorCircle24: ImageVector? = null
