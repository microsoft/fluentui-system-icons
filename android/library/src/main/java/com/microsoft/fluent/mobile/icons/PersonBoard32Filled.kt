package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PersonBoard32: ImageVector
  get() {
    if (_personBoard32 != null) {
      return _personBoard32!!
    }
    _personBoard32 = fluentIcon(name = "Filled.PersonBoard32", 32f) {
      materialPath {
          moveTo(7.5F, 3.0F)
          curveTo(5.015F, 3.0F, 3.0F, 5.015F, 3.0F, 7.5F)
          verticalLineToRelative(13.0F)
          curveTo(3.0F, 22.985F, 5.015F, 25.0F, 7.5F, 25.0F)
          horizontalLineToRelative(13.0F)
          curveToRelative(2.485F, 0.0F, 4.5F, -2.015F, 4.5F, -4.5F)
          verticalLineToRelative(-13.0F)
          curveTo(25.0F, 5.015F, 22.985F, 3.0F, 20.5F, 3.0F)
          horizontalLineToRelative(-13.0F)
          close()
          moveToRelative(2.125F, 12.0F)
          horizontalLineToRelative(8.75F)
          curveToRelative(1.174F, 0.0F, 2.125F, 0.951F, 2.125F, 2.125F)
          curveToRelative(0.0F, 1.561F, -0.888F, 2.7F, -2.118F, 3.396F)
          curveTo(17.186F, 21.2F, 15.623F, 21.5F, 14.0F, 21.5F)
          curveToRelative(-1.623F, 0.0F, -3.186F, -0.3F, -4.382F, -0.979F)
          curveToRelative(-1.23F, -0.697F, -2.118F, -1.835F, -2.118F, -3.396F)
          curveTo(7.5F, 15.951F, 8.451F, 15.0F, 9.625F, 15.0F)
          close()
          moveTo(10.5F, 9.5F)
          curveTo(10.5F, 7.567F, 12.067F, 6.0F, 14.0F, 6.0F)
          reflectiveCurveToRelative(3.5F, 1.567F, 3.5F, 3.5F)
          reflectiveCurveTo(15.933F, 13.0F, 14.0F, 13.0F)
          reflectiveCurveToRelative(-3.5F, -1.567F, -3.5F, -3.5F)
          close()
          moveToRelative(0.5F, 19.0F)
          curveToRelative(-1.563F, 0.0F, -2.94F, -0.796F, -3.746F, -2.005F)
          curveToRelative(0.081F, 0.003F, 0.163F, 0.005F, 0.245F, 0.005F)
          horizontalLineToRelative(14.0F)
          curveToRelative(2.762F, 0.0F, 5.0F, -2.239F, 5.0F, -5.0F)
          verticalLineToRelative(-14.0F)
          curveToRelative(0.0F, -0.082F, -0.001F, -0.164F, -0.005F, -0.245F)
          curveTo(27.704F, 8.06F, 28.5F, 9.438F, 28.5F, 11.0F)
          verticalLineToRelative(10.5F)
          curveToRelative(0.0F, 3.866F, -3.134F, 7.0F, -7.0F, 7.0F)
          horizontalLineTo(11.0F)
          close()        
      }
    }
    return _personBoard32!!
  }

private var _personBoard32: ImageVector? = null
