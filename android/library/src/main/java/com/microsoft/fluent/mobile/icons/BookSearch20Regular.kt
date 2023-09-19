package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.BookSearch20: ImageVector
  get() {
    if (_bookSearch20 != null) {
      return _bookSearch20!!
    }
    _bookSearch20 = fluentIcon(name = "Regular.BookSearch20", 20f) {
      materialPath {
          moveTo(4.0F, 4.0F)
          verticalLineToRelative(12.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(9.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(15.776F, 17.0F, 15.5F, 17.0F)
          horizontalLineTo(6.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          horizontalLineToRelative(10.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, -0.448F, 1.0F, -1.0F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(6.0F)
          curveTo(4.895F, 2.0F, 4.0F, 2.895F, 4.0F, 4.0F)
          close()
          moveToRelative(10.0F, -1.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(11.0F)
          horizontalLineTo(5.0F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(8.0F)
          close()
          moveToRelative(-2.414F, 6.879F)
          curveTo(11.848F, 9.483F, 12.0F, 9.009F, 12.0F, 8.5F)
          curveTo(12.0F, 7.12F, 10.88F, 6.0F, 9.5F, 6.0F)
          reflectiveCurveTo(7.0F, 7.12F, 7.0F, 8.5F)
          reflectiveCurveTo(8.12F, 11.0F, 9.5F, 11.0F)
          curveToRelative(0.51F, 0.0F, 0.983F, -0.152F, 1.379F, -0.414F)
          lineToRelative(1.267F, 1.268F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineTo(11.586F, 9.88F)
          close()
          moveTo(8.0F, 8.5F)
          curveTo(8.0F, 7.672F, 8.672F, 7.0F, 9.5F, 7.0F)
          reflectiveCurveTo(11.0F, 7.672F, 11.0F, 8.5F)
          reflectiveCurveTo(10.328F, 10.0F, 9.5F, 10.0F)
          reflectiveCurveTo(8.0F, 9.328F, 8.0F, 8.5F)
          close()        
      }
    }
    return _bookSearch20!!
  }

private var _bookSearch20: ImageVector? = null
