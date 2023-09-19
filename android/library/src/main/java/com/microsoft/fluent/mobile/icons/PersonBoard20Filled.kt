package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PersonBoard20: ImageVector
  get() {
    if (_personBoard20 != null) {
      return _personBoard20!!
    }
    _personBoard20 = fluentIcon(name = "Filled.PersonBoard20", 20f) {
      materialPath {
          moveTo(6.0F, 3.0F)
          curveTo(4.343F, 3.0F, 3.0F, 4.343F, 3.0F, 6.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 1.657F, 1.343F, 3.0F, 3.0F, 3.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, -1.343F, 3.0F, -3.0F)
          verticalLineTo(6.0F)
          curveToRelative(0.0F, -1.657F, -1.343F, -3.0F, -3.0F, -3.0F)
          horizontalLineTo(6.0F)
          close()
          moveToRelative(4.75F, 3.25F)
          curveTo(10.75F, 7.216F, 9.966F, 8.0F, 9.0F, 8.0F)
          reflectiveCurveTo(7.25F, 7.216F, 7.25F, 6.25F)
          reflectiveCurveTo(8.034F, 4.5F, 9.0F, 4.5F)
          reflectiveCurveToRelative(1.75F, 0.784F, 1.75F, 1.75F)
          close()
          moveToRelative(1.75F, 4.0F)
          curveToRelative(0.0F, 0.588F, -0.146F, 2.5F, -3.502F, 2.5F)
          reflectiveCurveTo(5.5F, 10.821F, 5.5F, 10.25F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(5.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          close()
          moveTo(5.764F, 16.0F)
          curveToRelative(0.55F, 0.614F, 1.348F, 1.0F, 2.236F, 1.0F)
          horizontalLineToRelative(4.5F)
          curveToRelative(2.485F, 0.0F, 4.5F, -2.015F, 4.5F, -4.5F)
          verticalLineTo(8.0F)
          curveToRelative(0.0F, -0.888F, -0.386F, -1.687F, -1.0F, -2.236F)
          verticalLineTo(12.5F)
          curveToRelative(0.0F, 1.933F, -1.567F, 3.5F, -3.5F, 3.5F)
          horizontalLineTo(5.764F)
          close()        
      }
    }
    return _personBoard20!!
  }

private var _personBoard20: ImageVector? = null
