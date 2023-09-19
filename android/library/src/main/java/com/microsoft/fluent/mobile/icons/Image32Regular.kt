package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Image32: ImageVector
  get() {
    if (_image32 != null) {
      return _image32!!
    }
    _image32 = fluentIcon(name = "Regular.Image32", 32f) {
      materialPath {
          moveTo(18.0F, 11.0F)
          curveToRelative(0.0F, -1.933F, 1.567F, -3.5F, 3.5F, -3.5F)
          reflectiveCurveTo(25.0F, 9.067F, 25.0F, 11.0F)
          reflectiveCurveToRelative(-1.567F, 3.5F, -3.5F, 3.5F)
          reflectiveCurveTo(18.0F, 12.933F, 18.0F, 11.0F)
          close()
          moveToRelative(3.5F, -1.5F)
          curveToRelative(-0.828F, 0.0F, -1.5F, 0.672F, -1.5F, 1.5F)
          reflectiveCurveToRelative(0.672F, 1.5F, 1.5F, 1.5F)
          reflectiveCurveTo(23.0F, 11.828F, 23.0F, 11.0F)
          reflectiveCurveToRelative(-0.672F, -1.5F, -1.5F, -1.5F)
          close()
          moveTo(3.0F, 7.5F)
          curveTo(3.0F, 5.015F, 5.015F, 3.0F, 7.5F, 3.0F)
          horizontalLineToRelative(17.0F)
          curveTo(26.985F, 3.0F, 29.0F, 5.015F, 29.0F, 7.5F)
          verticalLineToRelative(17.0F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          horizontalLineToRelative(-17.0F)
          curveTo(5.015F, 29.0F, 3.0F, 26.985F, 3.0F, 24.5F)
          verticalLineToRelative(-17.0F)
          close()
          moveTo(7.5F, 5.0F)
          curveTo(6.12F, 5.0F, 5.0F, 6.12F, 5.0F, 7.5F)
          verticalLineToRelative(17.0F)
          curveToRelative(0.0F, 0.29F, 0.05F, 0.567F, 0.14F, 0.825F)
          lineToRelative(9.092F, -9.093F)
          curveToRelative(0.977F, -0.976F, 2.56F, -0.976F, 3.536F, 0.0F)
          lineToRelative(9.093F, 9.093F)
          curveTo(26.95F, 25.067F, 27.0F, 24.789F, 27.0F, 24.5F)
          verticalLineToRelative(-17.0F)
          curveTo(27.0F, 6.12F, 25.88F, 5.0F, 24.5F, 5.0F)
          horizontalLineToRelative(-17.0F)
          close()
          moveToRelative(18.0F, 21.792F)
          lineToRelative(-9.146F, -9.146F)
          curveToRelative(-0.196F, -0.195F, -0.512F, -0.195F, -0.707F, 0.0F)
          lineTo(6.5F, 26.792F)
          curveTo(6.807F, 26.926F, 7.145F, 27.0F, 7.5F, 27.0F)
          horizontalLineToRelative(17.0F)
          curveToRelative(0.355F, 0.0F, 0.693F, -0.074F, 1.0F, -0.208F)
          close()        
      }
    }
    return _image32!!
  }

private var _image32: ImageVector? = null
