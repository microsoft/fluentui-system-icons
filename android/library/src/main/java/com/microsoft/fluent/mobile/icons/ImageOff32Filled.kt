package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ImageOff32: ImageVector
  get() {
    if (_imageOff32 != null) {
      return _imageOff32!!
    }
    _imageOff32 = fluentIcon(name = "Filled.ImageOff32", 32f) {
      materialPath {
          moveTo(26.896F, 28.31F)
          lineToRelative(1.397F, 1.397F)
          curveToRelative(0.39F, 0.39F, 1.024F, 0.39F, 1.414F, 0.0F)
          curveToRelative(0.39F, -0.39F, 0.39F, -1.024F, 0.0F, -1.414F)
          lineToRelative(-26.0F, -26.0F)
          curveToRelative(-0.39F, -0.39F, -1.024F, -0.39F, -1.414F, 0.0F)
          curveToRelative(-0.39F, 0.39F, -0.39F, 1.024F, 0.0F, 1.414F)
          lineTo(3.69F, 5.105F)
          curveTo(3.253F, 5.798F, 3.0F, 6.62F, 3.0F, 7.5F)
          verticalLineToRelative(17.0F)
          curveToRelative(0.0F, 0.849F, 0.235F, 1.643F, 0.644F, 2.32F)
          lineToRelative(10.589F, -10.588F)
          curveToRelative(0.1F, -0.1F, 0.205F, -0.189F, 0.316F, -0.268F)
          lineToRelative(1.546F, 1.545F)
          curveToRelative(-0.157F, -0.03F, -0.326F, 0.016F, -0.448F, 0.137F)
          lineTo(5.03F, 28.262F)
          curveTo(5.74F, 28.73F, 6.588F, 29.0F, 7.5F, 29.0F)
          horizontalLineToRelative(17.0F)
          curveToRelative(0.88F, 0.0F, 1.701F, -0.253F, 2.395F, -0.69F)
          close()
          moveToRelative(2.018F, -2.93F)
          curveTo(28.971F, 25.094F, 29.0F, 24.8F, 29.0F, 24.5F)
          verticalLineToRelative(-17.0F)
          curveTo(29.0F, 5.015F, 26.986F, 3.0F, 24.5F, 3.0F)
          horizontalLineToRelative(-17.0F)
          curveTo(7.2F, 3.0F, 6.905F, 3.03F, 6.62F, 3.086F)
          lineToRelative(22.294F, 22.293F)
          close()
          moveTo(25.0F, 10.0F)
          curveToRelative(0.0F, 1.657F, -1.343F, 3.0F, -3.0F, 3.0F)
          reflectiveCurveToRelative(-3.0F, -1.343F, -3.0F, -3.0F)
          reflectiveCurveToRelative(1.343F, -3.0F, 3.0F, -3.0F)
          reflectiveCurveToRelative(3.0F, 1.343F, 3.0F, 3.0F)
          close()        
      }
    }
    return _imageOff32!!
  }

private var _imageOff32: ImageVector? = null
