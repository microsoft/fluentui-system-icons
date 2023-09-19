package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.QuestionCircle12: ImageVector
  get() {
    if (_questionCircle12 != null) {
      return _questionCircle12!!
    }
    _questionCircle12 = fluentIcon(name = "Filled.QuestionCircle12", 12f) {
      materialPath {
          moveTo(6.0F, 1.0F)
          curveTo(3.239F, 1.0F, 1.0F, 3.239F, 1.0F, 6.0F)
          reflectiveCurveToRelative(2.239F, 5.0F, 5.0F, 5.0F)
          reflectiveCurveToRelative(5.0F, -2.239F, 5.0F, -5.0F)
          reflectiveCurveToRelative(-2.239F, -5.0F, -5.0F, -5.0F)
          close()
          moveToRelative(0.5F, 7.5F)
          curveTo(6.5F, 8.776F, 6.276F, 9.0F, 6.0F, 9.0F)
          reflectiveCurveTo(5.5F, 8.776F, 5.5F, 8.5F)
          reflectiveCurveTo(5.724F, 8.0F, 6.0F, 8.0F)
          reflectiveCurveToRelative(0.5F, 0.224F, 0.5F, 0.5F)
          close()
          moveTo(5.0F, 4.753F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          reflectiveCurveTo(4.0F, 5.029F, 4.0F, 4.753F)
          curveTo(4.0F, 4.164F, 4.272F, 3.707F, 4.67F, 3.41F)
          curveTo(5.054F, 3.125F, 5.54F, 2.998F, 6.0F, 2.998F)
          curveToRelative(0.46F, 0.0F, 0.946F, 0.127F, 1.33F, 0.412F)
          curveTo(7.727F, 3.706F, 8.0F, 4.163F, 8.0F, 4.752F)
          curveTo(8.0F, 5.18F, 7.865F, 5.507F, 7.633F, 5.758F)
          curveTo(7.45F, 5.956F, 7.215F, 6.091F, 7.053F, 6.184F)
          lineToRelative(-0.051F, 0.03F)
          curveToRelative(-0.187F, 0.108F, -0.296F, 0.184F, -0.37F, 0.281F)
          curveTo(6.567F, 6.577F, 6.5F, 6.715F, 6.5F, 7.0F)
          curveToRelative(0.0F, 0.277F, -0.224F, 0.5F, -0.5F, 0.5F)
          reflectiveCurveTo(5.5F, 7.276F, 5.5F, 7.0F)
          curveToRelative(0.0F, -0.465F, 0.12F, -0.827F, 0.338F, -1.112F)
          curveToRelative(0.206F, -0.27F, 0.472F, -0.428F, 0.66F, -0.538F)
          lineToRelative(0.028F, -0.016F)
          curveTo(6.723F, 5.22F, 6.824F, 5.16F, 6.899F, 5.08F)
          curveTo(6.948F, 5.026F, 7.0F, 4.947F, 7.0F, 4.752F)
          curveToRelative(0.0F, -0.248F, -0.103F, -0.417F, -0.267F, -0.54F)
          curveTo(6.555F, 4.08F, 6.29F, 3.999F, 6.0F, 3.999F)
          reflectiveCurveTo(5.446F, 4.08F, 5.267F, 4.213F)
          curveTo(5.103F, 4.335F, 5.0F, 4.505F, 5.0F, 4.753F)
          close()        
      }
    }
    return _questionCircle12!!
  }

private var _questionCircle12: ImageVector? = null
