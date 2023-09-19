package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TableInsertColumn20: ImageVector
  get() {
    if (_tableInsertColumn20 != null) {
      return _tableInsertColumn20!!
    }
    _tableInsertColumn20 = fluentIcon(name = "Filled.TableInsertColumn20", 20f) {
      materialPath {
          moveTo(4.0F, 3.5F)
          curveTo(4.0F, 3.224F, 3.776F, 3.0F, 3.5F, 3.0F)
          reflectiveCurveTo(3.0F, 3.224F, 3.0F, 3.5F)
          verticalLineToRelative(13.0F)
          curveTo(3.0F, 16.776F, 3.224F, 17.0F, 3.5F, 17.0F)
          reflectiveCurveTo(4.0F, 16.776F, 4.0F, 16.5F)
          verticalLineToRelative(-13.0F)
          close()
          moveToRelative(13.0F, 0.0F)
          curveTo(17.0F, 3.224F, 16.776F, 3.0F, 16.5F, 3.0F)
          reflectiveCurveTo(16.0F, 3.224F, 16.0F, 3.5F)
          verticalLineToRelative(13.0F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          reflectiveCurveToRelative(0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineToRelative(-13.0F)
          close()
          moveTo(9.0F, 3.0F)
          curveTo(7.895F, 3.0F, 7.0F, 3.895F, 7.0F, 5.0F)
          verticalLineToRelative(2.0F)
          horizontalLineToRelative(6.0F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(9.0F)
          close()
          moveToRelative(-2.0F, 9.0F)
          verticalLineTo(8.0F)
          horizontalLineToRelative(6.0F)
          verticalLineToRelative(4.0F)
          horizontalLineTo(7.0F)
          close()
          moveToRelative(0.0F, 1.0F)
          horizontalLineToRelative(6.0F)
          verticalLineToRelative(2.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(9.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineToRelative(-2.0F)
          close()        
      }
    }
    return _tableInsertColumn20!!
  }

private var _tableInsertColumn20: ImageVector? = null
