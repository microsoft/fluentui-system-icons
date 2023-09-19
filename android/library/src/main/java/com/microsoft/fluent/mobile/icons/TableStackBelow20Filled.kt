package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TableStackBelow20: ImageVector
  get() {
    if (_tableStackBelow20 != null) {
      return _tableStackBelow20!!
    }
    _tableStackBelow20 = fluentIcon(name = "Filled.TableStackBelow20", 20f) {
      materialPath {
          moveTo(16.5F, 17.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(16.776F, 16.0F, 16.5F, 16.0F)
          horizontalLineToRelative(-13.0F)
          curveTo(3.224F, 16.0F, 3.0F, 16.224F, 3.0F, 16.5F)
          reflectiveCurveTo(3.224F, 17.0F, 3.5F, 17.0F)
          horizontalLineToRelative(13.0F)
          close()
          moveTo(5.0F, 3.0F)
          horizontalLineToRelative(2.0F)
          verticalLineToRelative(4.0F)
          horizontalLineTo(3.0F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          close()
          moveTo(3.0F, 8.0F)
          horizontalLineToRelative(4.0F)
          verticalLineToRelative(4.0F)
          horizontalLineTo(3.5F)
          curveTo(3.224F, 12.0F, 3.0F, 11.776F, 3.0F, 11.5F)
          verticalLineTo(8.0F)
          close()
          moveToRelative(5.0F, 0.0F)
          verticalLineToRelative(4.0F)
          horizontalLineToRelative(4.0F)
          verticalLineTo(8.0F)
          horizontalLineTo(8.0F)
          close()
          moveToRelative(4.0F, -5.0F)
          horizontalLineTo(8.0F)
          verticalLineToRelative(4.0F)
          horizontalLineToRelative(4.0F)
          verticalLineTo(3.0F)
          close()
          moveToRelative(1.0F, 9.0F)
          verticalLineTo(8.0F)
          horizontalLineToRelative(4.0F)
          verticalLineToRelative(3.5F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          horizontalLineTo(13.0F)
          close()
          moveToRelative(0.0F, -9.0F)
          horizontalLineToRelative(2.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(2.0F)
          horizontalLineToRelative(-4.0F)
          verticalLineTo(3.0F)
          close()        
      }
    }
    return _tableStackBelow20!!
  }

private var _tableStackBelow20: ImageVector? = null
