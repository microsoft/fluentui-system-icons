package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.CommentAdd16: ImageVector
  get() {
    if (_commentAdd16 != null) {
      return _commentAdd16!!
    }
    _commentAdd16 = fluentIcon(name = "Filled.CommentAdd16", 16f) {
      materialPath {
          moveTo(15.0F, 5.5F)
          curveToRelative(0.0F, 2.485F, -2.015F, 4.5F, -4.5F, 4.5F)
          reflectiveCurveTo(6.0F, 7.985F, 6.0F, 5.5F)
          reflectiveCurveTo(8.015F, 1.0F, 10.5F, 1.0F)
          reflectiveCurveTo(15.0F, 3.015F, 15.0F, 5.5F)
          close()
          moveToRelative(-4.0F, -2.0F)
          curveTo(11.0F, 3.224F, 10.776F, 3.0F, 10.5F, 3.0F)
          reflectiveCurveTo(10.0F, 3.224F, 10.0F, 3.5F)
          verticalLineTo(5.0F)
          horizontalLineTo(8.5F)
          curveTo(8.224F, 5.0F, 8.0F, 5.224F, 8.0F, 5.5F)
          reflectiveCurveTo(8.224F, 6.0F, 8.5F, 6.0F)
          horizontalLineTo(10.0F)
          verticalLineToRelative(1.5F)
          curveTo(10.0F, 7.776F, 10.224F, 8.0F, 10.5F, 8.0F)
          reflectiveCurveTo(11.0F, 7.776F, 11.0F, 7.5F)
          verticalLineTo(6.0F)
          horizontalLineToRelative(1.5F)
          curveTo(12.776F, 6.0F, 13.0F, 5.776F, 13.0F, 5.5F)
          reflectiveCurveTo(12.776F, 5.0F, 12.5F, 5.0F)
          horizontalLineTo(11.0F)
          verticalLineTo(3.5F)
          close()
          moveTo(10.5F, 11.0F)
          curveToRelative(1.86F, 0.0F, 3.505F, -0.923F, 4.5F, -2.337F)
          verticalLineTo(9.5F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineTo(8.688F)
          lineToRelative(-3.063F, 2.68F)
          curveTo(4.992F, 15.234F, 4.0F, 14.784F, 4.0F, 13.942F)
          verticalLineTo(12.0F)
          horizontalLineTo(3.5F)
          curveTo(2.12F, 12.0F, 1.0F, 10.88F, 1.0F, 9.5F)
          verticalLineToRelative(-5.0F)
          curveTo(1.0F, 3.12F, 2.12F, 2.0F, 3.5F, 2.0F)
          horizontalLineToRelative(2.757F)
          curveTo(5.472F, 2.95F, 5.0F, 4.17F, 5.0F, 5.5F)
          curveTo(5.0F, 8.538F, 7.462F, 11.0F, 10.5F, 11.0F)
          close()        
      }
    }
    return _commentAdd16!!
  }

private var _commentAdd16: ImageVector? = null
