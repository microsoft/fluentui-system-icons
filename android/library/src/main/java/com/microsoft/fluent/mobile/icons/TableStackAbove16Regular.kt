package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TableStackAbove16: ImageVector
  get() {
    if (_tableStackAbove16 != null) {
      return _tableStackAbove16!!
    }
    _tableStackAbove16 = fluentIcon(name = "Regular.TableStackAbove16", 16f) {
      materialPath {
          moveTo(2.5F, 2.0F)
          curveTo(2.224F, 2.0F, 2.0F, 2.224F, 2.0F, 2.5F)
          reflectiveCurveTo(2.224F, 3.0F, 2.5F, 3.0F)
          horizontalLineToRelative(11.0F)
          curveTo(13.776F, 3.0F, 14.0F, 2.776F, 14.0F, 2.5F)
          reflectiveCurveTo(13.776F, 2.0F, 13.5F, 2.0F)
          horizontalLineToRelative(-11.0F)
          close()
          moveToRelative(9.0F, 12.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineToRelative(-5.0F)
          curveTo(14.0F, 6.224F, 13.776F, 6.0F, 13.5F, 6.0F)
          horizontalLineToRelative(-11.0F)
          curveTo(2.224F, 6.0F, 2.0F, 6.224F, 2.0F, 6.5F)
          verticalLineToRelative(5.0F)
          curveTo(2.0F, 12.88F, 3.12F, 14.0F, 4.5F, 14.0F)
          horizontalLineToRelative(7.0F)
          close()
          moveTo(3.0F, 7.0F)
          horizontalLineToRelative(2.0F)
          verticalLineToRelative(3.0F)
          horizontalLineTo(3.0F)
          verticalLineTo(7.0F)
          close()
          moveToRelative(3.0F, 0.0F)
          horizontalLineToRelative(4.0F)
          verticalLineToRelative(3.0F)
          horizontalLineTo(6.0F)
          verticalLineTo(7.0F)
          close()
          moveToRelative(5.0F, 0.0F)
          horizontalLineToRelative(2.0F)
          verticalLineToRelative(3.0F)
          horizontalLineToRelative(-2.0F)
          verticalLineTo(7.0F)
          close()
          moveToRelative(-1.0F, 6.0F)
          horizontalLineTo(6.0F)
          verticalLineToRelative(-2.0F)
          horizontalLineToRelative(4.0F)
          verticalLineToRelative(2.0F)
          close()
          moveToRelative(-5.0F, 0.0F)
          horizontalLineTo(4.5F)
          curveTo(3.672F, 13.0F, 3.0F, 12.328F, 3.0F, 11.5F)
          verticalLineTo(11.0F)
          horizontalLineToRelative(2.0F)
          verticalLineToRelative(2.0F)
          close()
          moveToRelative(6.0F, 0.0F)
          verticalLineToRelative(-2.0F)
          horizontalLineToRelative(2.0F)
          verticalLineToRelative(0.5F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineTo(11.0F)
          close()        
      }
    }
    return _tableStackAbove16!!
  }

private var _tableStackAbove16: ImageVector? = null
