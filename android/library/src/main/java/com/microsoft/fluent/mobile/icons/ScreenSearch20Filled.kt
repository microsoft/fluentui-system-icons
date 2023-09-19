package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ScreenSearch20: ImageVector
  get() {
    if (_screenSearch20 != null) {
      return _screenSearch20!!
    }
    _screenSearch20 = fluentIcon(name = "Filled.ScreenSearch20", 20f) {
      materialPath {
          moveTo(2.0F, 6.75F)
          curveTo(2.0F, 5.231F, 3.231F, 4.0F, 4.75F, 4.0F)
          horizontalLineToRelative(10.5F)
          curveTo(16.769F, 4.0F, 18.0F, 5.231F, 18.0F, 6.75F)
          verticalLineToRelative(6.5F)
          curveToRelative(0.0F, 1.519F, -1.231F, 2.75F, -2.75F, 2.75F)
          horizontalLineToRelative(-5.129F)
          lineToRelative(-1.56F, -1.56F)
          curveTo(8.843F, 13.853F, 9.0F, 13.195F, 9.0F, 12.5F)
          curveTo(9.0F, 10.015F, 6.985F, 8.0F, 4.5F, 8.0F)
          curveTo(3.575F, 8.0F, 2.715F, 8.28F, 2.0F, 8.758F)
          verticalLineTo(6.75F)
          close()
          moveTo(4.5F, 16.0F)
          curveToRelative(0.786F, 0.0F, 1.512F, -0.26F, 2.096F, -0.697F)
          lineToRelative(2.55F, 2.55F)
          curveToRelative(0.196F, 0.196F, 0.512F, 0.196F, 0.707F, 0.0F)
          curveToRelative(0.196F, -0.195F, 0.196F, -0.511F, 0.0F, -0.707F)
          lineToRelative(-2.55F, -2.55F)
          curveTo(7.741F, 14.012F, 8.0F, 13.286F, 8.0F, 12.5F)
          curveTo(8.0F, 10.567F, 6.433F, 9.0F, 4.5F, 9.0F)
          reflectiveCurveTo(1.0F, 10.567F, 1.0F, 12.5F)
          reflectiveCurveTo(2.567F, 16.0F, 4.5F, 16.0F)
          close()
          moveToRelative(0.0F, -1.0F)
          curveTo(3.12F, 15.0F, 2.0F, 13.88F, 2.0F, 12.5F)
          reflectiveCurveTo(3.12F, 10.0F, 4.5F, 10.0F)
          reflectiveCurveTo(7.0F, 11.12F, 7.0F, 12.5F)
          reflectiveCurveTo(5.88F, 15.0F, 4.5F, 15.0F)
          close()        
      }
    }
    return _screenSearch20!!
  }

private var _screenSearch20: ImageVector? = null
