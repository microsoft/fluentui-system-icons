package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.People24: ImageVector
  get() {
    if (_people24 != null) {
      return _people24!!
    }
    _people24 = fluentIcon(name = "Filled.People24", 24f) {
      materialPath {
          moveTo(8.0F, 12.0F)
          curveToRelative(2.21F, 0.0F, 4.0F, -1.79F, 4.0F, -4.0F)
          reflectiveCurveToRelative(-1.79F, -4.0F, -4.0F, -4.0F)
          reflectiveCurveToRelative(-4.0F, 1.79F, -4.0F, 4.0F)
          reflectiveCurveToRelative(1.79F, 4.0F, 4.0F, 4.0F)
          close()
          moveToRelative(9.0F, 0.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, -1.343F, 3.0F, -3.0F)
          reflectiveCurveToRelative(-1.343F, -3.0F, -3.0F, -3.0F)
          reflectiveCurveToRelative(-3.0F, 1.343F, -3.0F, 3.0F)
          reflectiveCurveToRelative(1.343F, 3.0F, 3.0F, 3.0F)
          close()
          moveTo(4.25F, 14.0F)
          curveTo(3.007F, 14.0F, 2.0F, 15.007F, 2.0F, 16.25F)
          verticalLineToRelative(0.25F)
          reflectiveCurveTo(2.0F, 21.0F, 8.0F, 21.0F)
          reflectiveCurveToRelative(6.0F, -4.5F, 6.0F, -4.5F)
          verticalLineToRelative(-0.25F)
          curveToRelative(0.0F, -1.243F, -1.007F, -2.25F, -2.25F, -2.25F)
          horizontalLineToRelative(-7.5F)
          close()
          moveTo(17.0F, 19.5F)
          curveToRelative(-1.171F, 0.0F, -2.068F, -0.181F, -2.755F, -0.458F)
          curveToRelative(0.342F, -0.575F, 0.527F, -1.128F, 0.627F, -1.558F)
          curveToRelative(0.06F, -0.26F, 0.092F, -0.481F, 0.11F, -0.649F)
          curveToRelative(0.008F, -0.084F, 0.012F, -0.155F, 0.015F, -0.211F)
          lineTo(15.0F, 16.55F)
          verticalLineToRelative(-0.3F)
          curveToRelative(0.0F, -0.872F, -0.343F, -1.664F, -0.902F, -2.248F)
          lineTo(14.2F, 14.0F)
          horizontalLineToRelative(5.6F)
          curveToRelative(1.215F, 0.0F, 2.2F, 0.985F, 2.2F, 2.2F)
          curveToRelative(0.0F, 0.0F, 0.0F, 3.3F, -5.0F, 3.3F)
          close()        
      }
    }
    return _people24!!
  }

private var _people24: ImageVector? = null
