package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ImageBorder32: ImageVector
  get() {
    if (_imageBorder32 != null) {
      return _imageBorder32!!
    }
    _imageBorder32 = fluentIcon(name = "Filled.ImageBorder32", 32f) {
      materialPath {
          moveTo(14.232F, 16.232F)
          lineTo(10.0F, 20.465F)
          verticalLineTo(10.0F)
          horizontalLineToRelative(12.0F)
          verticalLineToRelative(10.465F)
          lineToRelative(-4.232F, -4.233F)
          curveToRelative(-0.977F, -0.976F, -2.56F, -0.976F, -3.536F, 0.0F)
          close()
          moveTo(19.0F, 11.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, 0.895F, -2.0F, 2.0F)
          reflectiveCurveToRelative(0.895F, 2.0F, 2.0F, 2.0F)
          reflectiveCurveToRelative(2.0F, -0.895F, 2.0F, -2.0F)
          reflectiveCurveToRelative(-0.895F, -2.0F, -2.0F, -2.0F)
          close()
          moveToRelative(-2.646F, 6.646F)
          lineTo(20.707F, 22.0F)
          horizontalLineToRelative(-9.414F)
          lineToRelative(4.353F, -4.354F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
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
          moveTo(9.0F, 8.0F)
          curveTo(8.448F, 8.0F, 8.0F, 8.448F, 8.0F, 9.0F)
          verticalLineToRelative(14.0F)
          curveToRelative(0.0F, 0.552F, 0.448F, 1.0F, 1.0F, 1.0F)
          horizontalLineToRelative(14.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineTo(9.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          horizontalLineTo(9.0F)
          close()        
      }
    }
    return _imageBorder32!!
  }

private var _imageBorder32: ImageVector? = null
