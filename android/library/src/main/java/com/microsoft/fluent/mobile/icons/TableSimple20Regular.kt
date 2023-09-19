package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TableSimple20: ImageVector
  get() {
    if (_tableSimple20 != null) {
      return _tableSimple20!!
    }
    _tableSimple20 = fluentIcon(name = "Regular.TableSimple20", 20f) {
      materialPath {
          moveTo(3.0F, 5.5F)
          curveTo(3.0F, 4.12F, 4.12F, 3.0F, 5.5F, 3.0F)
          horizontalLineToRelative(9.0F)
          curveTo(15.88F, 3.0F, 17.0F, 4.12F, 17.0F, 5.5F)
          verticalLineToRelative(9.0F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineToRelative(-9.0F)
          curveTo(4.12F, 17.0F, 3.0F, 15.88F, 3.0F, 14.5F)
          verticalLineToRelative(-9.0F)
          close()
          moveToRelative(1.0F, 5.0F)
          verticalLineToRelative(4.0F)
          curveTo(4.0F, 15.328F, 4.672F, 16.0F, 5.5F, 16.0F)
          horizontalLineToRelative(4.0F)
          verticalLineToRelative(-5.5F)
          horizontalLineTo(4.0F)
          close()
          moveToRelative(5.5F, -1.0F)
          verticalLineTo(4.0F)
          horizontalLineToRelative(-4.0F)
          curveTo(4.672F, 4.0F, 4.0F, 4.672F, 4.0F, 5.5F)
          verticalLineToRelative(4.0F)
          horizontalLineToRelative(5.5F)
          close()
          moveToRelative(1.0F, 1.0F)
          verticalLineTo(16.0F)
          horizontalLineToRelative(4.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-4.0F)
          horizontalLineToRelative(-5.5F)
          close()
          moveToRelative(5.5F, -1.0F)
          verticalLineToRelative(-4.0F)
          curveTo(16.0F, 4.672F, 15.328F, 4.0F, 14.5F, 4.0F)
          horizontalLineToRelative(-4.0F)
          verticalLineToRelative(5.5F)
          horizontalLineTo(16.0F)
          close()        
      }
    }
    return _tableSimple20!!
  }

private var _tableSimple20: ImageVector? = null
