package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TableStackAbove20: ImageVector
  get() {
    if (_tableStackAbove20 != null) {
      return _tableStackAbove20!!
    }
    _tableStackAbove20 = fluentIcon(name = "Filled.TableStackAbove20", 20f) {
      materialPath {
          moveTo(3.5F, 3.0F)
          curveTo(3.224F, 3.0F, 3.0F, 3.224F, 3.0F, 3.5F)
          reflectiveCurveTo(3.224F, 4.0F, 3.5F, 4.0F)
          horizontalLineToRelative(13.0F)
          curveTo(16.776F, 4.0F, 17.0F, 3.776F, 17.0F, 3.5F)
          reflectiveCurveTo(16.776F, 3.0F, 16.5F, 3.0F)
          horizontalLineToRelative(-13.0F)
          close()
          moveTo(15.0F, 17.0F)
          horizontalLineToRelative(-2.0F)
          verticalLineToRelative(-4.0F)
          horizontalLineToRelative(4.0F)
          verticalLineToRelative(2.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          close()
          moveToRelative(2.0F, -5.0F)
          horizontalLineToRelative(-4.0F)
          verticalLineTo(8.0F)
          horizontalLineToRelative(3.5F)
          curveTo(16.776F, 8.0F, 17.0F, 8.224F, 17.0F, 8.5F)
          verticalLineTo(12.0F)
          close()
          moveToRelative(-5.0F, 0.0F)
          verticalLineTo(8.0F)
          horizontalLineTo(8.0F)
          verticalLineToRelative(4.0F)
          horizontalLineToRelative(4.0F)
          close()
          moveToRelative(-4.0F, 5.0F)
          horizontalLineToRelative(4.0F)
          verticalLineToRelative(-4.0F)
          horizontalLineTo(8.0F)
          verticalLineToRelative(4.0F)
          close()
          moveTo(7.0F, 8.0F)
          verticalLineToRelative(4.0F)
          horizontalLineTo(3.0F)
          verticalLineTo(8.5F)
          curveTo(3.0F, 8.224F, 3.224F, 8.0F, 3.5F, 8.0F)
          horizontalLineTo(7.0F)
          close()
          moveToRelative(0.0F, 9.0F)
          horizontalLineTo(5.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineToRelative(-2.0F)
          horizontalLineToRelative(4.0F)
          verticalLineToRelative(4.0F)
          close()        
      }
    }
    return _tableStackAbove20!!
  }

private var _tableStackAbove20: ImageVector? = null
