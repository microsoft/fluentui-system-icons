package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TableChecker20: ImageVector
  get() {
    if (_tableChecker20 != null) {
      return _tableChecker20!!
    }
    _tableChecker20 = fluentIcon(name = "Filled.TableChecker20", 20f) {
      materialPath {
          moveTo(7.0F, 3.0F)
          verticalLineToRelative(4.0F)
          horizontalLineTo(3.0F)
          verticalLineTo(5.5F)
          curveTo(3.0F, 4.12F, 4.12F, 3.0F, 5.5F, 3.0F)
          horizontalLineTo(7.0F)
          close()
          moveToRelative(5.0F, 5.0F)
          horizontalLineTo(8.0F)
          verticalLineToRelative(4.0F)
          horizontalLineToRelative(4.0F)
          verticalLineTo(8.0F)
          close()
          moveToRelative(1.0F, 5.0F)
          horizontalLineToRelative(4.0F)
          verticalLineToRelative(1.5F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineTo(13.0F)
          verticalLineToRelative(-4.0F)
          close()
          moveTo(8.0F, 4.0F)
          horizontalLineToRelative(6.5F)
          curveTo(15.328F, 4.0F, 16.0F, 4.672F, 16.0F, 5.5F)
          verticalLineTo(12.0F)
          horizontalLineToRelative(1.0F)
          verticalLineTo(5.5F)
          curveTo(17.0F, 4.12F, 15.88F, 3.0F, 14.5F, 3.0F)
          horizontalLineTo(8.0F)
          verticalLineToRelative(1.0F)
          close()
          moveTo(5.5F, 16.0F)
          horizontalLineTo(12.0F)
          verticalLineToRelative(1.0F)
          horizontalLineTo(5.5F)
          curveTo(4.12F, 17.0F, 3.0F, 15.88F, 3.0F, 14.5F)
          verticalLineTo(8.0F)
          horizontalLineToRelative(1.0F)
          verticalLineToRelative(6.5F)
          curveTo(4.0F, 15.328F, 4.672F, 16.0F, 5.5F, 16.0F)
          close()        
      }
    }
    return _tableChecker20!!
  }

private var _tableChecker20: ImageVector? = null
