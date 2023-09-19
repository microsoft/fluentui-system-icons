package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TableStackRight20: ImageVector
  get() {
    if (_tableStackRight20 != null) {
      return _tableStackRight20!!
    }
    _tableStackRight20 = fluentIcon(name = "Filled.TableStackRight20", 20f) {
      materialPath {
          moveTo(17.0F, 3.5F)
          curveTo(17.0F, 3.224F, 16.776F, 3.0F, 16.5F, 3.0F)
          reflectiveCurveTo(16.0F, 3.224F, 16.0F, 3.5F)
          verticalLineToRelative(13.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-13.0F)
          close()
          moveTo(3.0F, 15.0F)
          verticalLineToRelative(-2.0F)
          horizontalLineToRelative(4.0F)
          verticalLineToRelative(4.0F)
          horizontalLineTo(5.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          close()
          moveToRelative(5.0F, 2.0F)
          verticalLineToRelative(-4.0F)
          horizontalLineToRelative(4.0F)
          verticalLineToRelative(3.5F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          horizontalLineTo(8.0F)
          close()
          moveToRelative(0.0F, -5.0F)
          horizontalLineToRelative(4.0F)
          verticalLineTo(8.0F)
          horizontalLineTo(8.0F)
          verticalLineToRelative(4.0F)
          close()
          moveTo(3.0F, 8.0F)
          verticalLineToRelative(4.0F)
          horizontalLineToRelative(4.0F)
          verticalLineTo(8.0F)
          horizontalLineTo(3.0F)
          close()
          moveToRelative(9.0F, -1.0F)
          horizontalLineTo(8.0F)
          verticalLineTo(3.0F)
          horizontalLineToRelative(3.5F)
          curveTo(11.776F, 3.0F, 12.0F, 3.224F, 12.0F, 3.5F)
          verticalLineTo(7.0F)
          close()
          moveTo(3.0F, 7.0F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(2.0F)
          verticalLineToRelative(4.0F)
          horizontalLineTo(3.0F)
          close()        
      }
    }
    return _tableStackRight20!!
  }

private var _tableStackRight20: ImageVector? = null
