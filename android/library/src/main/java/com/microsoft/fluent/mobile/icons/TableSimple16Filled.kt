package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TableSimple16: ImageVector
  get() {
    if (_tableSimple16 != null) {
      return _tableSimple16!!
    }
    _tableSimple16 = fluentIcon(name = "Filled.TableSimple16", 16f) {
      materialPath {
          moveTo(4.5F, 2.0F)
          curveTo(3.12F, 2.0F, 2.0F, 3.12F, 2.0F, 4.5F)
          verticalLineToRelative(3.0F)
          horizontalLineToRelative(5.5F)
          verticalLineTo(2.0F)
          horizontalLineToRelative(-3.0F)
          close()
          moveToRelative(3.0F, 6.5F)
          horizontalLineTo(2.0F)
          verticalLineToRelative(3.0F)
          curveTo(2.0F, 12.88F, 3.12F, 14.0F, 4.5F, 14.0F)
          horizontalLineToRelative(3.0F)
          verticalLineTo(8.5F)
          close()
          moveToRelative(1.0F, 0.0F)
          horizontalLineTo(14.0F)
          verticalLineToRelative(3.0F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineToRelative(-3.0F)
          verticalLineTo(8.5F)
          close()
          moveToRelative(5.5F, -1.0F)
          verticalLineToRelative(-3.0F)
          curveTo(14.0F, 3.12F, 12.88F, 2.0F, 11.5F, 2.0F)
          horizontalLineToRelative(-3.0F)
          verticalLineToRelative(5.5F)
          horizontalLineTo(14.0F)
          close()        
      }
    }
    return _tableSimple16!!
  }

private var _tableSimple16: ImageVector? = null
