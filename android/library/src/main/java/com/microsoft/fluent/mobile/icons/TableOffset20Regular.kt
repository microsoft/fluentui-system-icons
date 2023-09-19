package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TableOffset20: ImageVector
  get() {
    if (_tableOffset20 != null) {
      return _tableOffset20!!
    }
    _tableOffset20 = fluentIcon(name = "Regular.TableOffset20", 20f) {
      materialPath {
          moveTo(5.5F, 3.0F)
          curveTo(4.12F, 3.0F, 3.0F, 4.12F, 3.0F, 5.5F)
          verticalLineToRelative(9.0F)
          curveTo(3.0F, 15.88F, 4.12F, 17.0F, 5.5F, 17.0F)
          horizontalLineToRelative(9.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineToRelative(-9.0F)
          curveTo(17.0F, 4.12F, 15.88F, 3.0F, 14.5F, 3.0F)
          horizontalLineToRelative(-9.0F)
          close()
          moveTo(16.0F, 12.0F)
          horizontalLineTo(8.0F)
          verticalLineTo(8.0F)
          horizontalLineToRelative(8.0F)
          verticalLineToRelative(4.0F)
          close()
          moveToRelative(-3.0F, 1.0F)
          horizontalLineToRelative(3.0F)
          verticalLineToRelative(1.5F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineTo(13.0F)
          verticalLineToRelative(-3.0F)
          close()
          moveToRelative(-1.0F, 0.0F)
          verticalLineToRelative(3.0F)
          horizontalLineTo(5.5F)
          curveTo(4.672F, 16.0F, 4.0F, 15.328F, 4.0F, 14.5F)
          verticalLineTo(13.0F)
          horizontalLineToRelative(8.0F)
          close()
          moveToRelative(-8.0F, -1.0F)
          verticalLineTo(8.0F)
          horizontalLineToRelative(3.0F)
          verticalLineToRelative(4.0F)
          horizontalLineTo(4.0F)
          close()
          moveToRelative(0.0F, -5.0F)
          verticalLineTo(5.5F)
          curveTo(4.0F, 4.672F, 4.672F, 4.0F, 5.5F, 4.0F)
          horizontalLineTo(12.0F)
          verticalLineToRelative(3.0F)
          horizontalLineTo(4.0F)
          close()
          moveToRelative(12.0F, -1.5F)
          verticalLineTo(7.0F)
          horizontalLineToRelative(-3.0F)
          verticalLineTo(4.0F)
          horizontalLineToRelative(1.5F)
          curveTo(15.328F, 4.0F, 16.0F, 4.672F, 16.0F, 5.5F)
          close()        
      }
    }
    return _tableOffset20!!
  }

private var _tableOffset20: ImageVector? = null
