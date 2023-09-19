package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TableSimple20: ImageVector
  get() {
    if (_tableSimple20 != null) {
      return _tableSimple20!!
    }
    _tableSimple20 = fluentIcon(name = "Filled.TableSimple20", 20f) {
      materialPath {
          moveTo(5.5F, 3.0F)
          curveTo(4.12F, 3.0F, 3.0F, 4.12F, 3.0F, 5.5F)
          verticalLineToRelative(4.0F)
          horizontalLineToRelative(6.5F)
          verticalLineTo(3.0F)
          horizontalLineToRelative(-4.0F)
          close()
          moveToRelative(4.0F, 7.5F)
          horizontalLineTo(3.0F)
          verticalLineToRelative(4.0F)
          curveTo(3.0F, 15.88F, 4.12F, 17.0F, 5.5F, 17.0F)
          horizontalLineToRelative(4.0F)
          verticalLineToRelative(-6.5F)
          close()
          moveToRelative(1.0F, 0.0F)
          horizontalLineTo(17.0F)
          verticalLineToRelative(4.0F)
          curveToRelative(0.0F, 1.38F, -1.12F, 2.5F, -2.5F, 2.5F)
          horizontalLineToRelative(-4.0F)
          verticalLineToRelative(-6.5F)
          close()
          moveToRelative(6.5F, -1.0F)
          verticalLineToRelative(-4.0F)
          curveTo(17.0F, 4.12F, 15.88F, 3.0F, 14.5F, 3.0F)
          horizontalLineToRelative(-4.0F)
          verticalLineToRelative(6.5F)
          horizontalLineTo(17.0F)
          close()        
      }
    }
    return _tableSimple20!!
  }

private var _tableSimple20: ImageVector? = null
