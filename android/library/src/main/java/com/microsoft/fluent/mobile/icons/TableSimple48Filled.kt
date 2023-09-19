package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TableSimple48: ImageVector
  get() {
    if (_tableSimple48 != null) {
      return _tableSimple48!!
    }
    _tableSimple48 = fluentIcon(name = "Filled.TableSimple48", 48f) {
      materialPath {
          moveTo(6.0F, 10.75F)
          curveTo(6.0F, 8.127F, 8.127F, 6.0F, 10.75F, 6.0F)
          horizontalLineToRelative(12.0F)
          verticalLineToRelative(16.75F)
          horizontalLineTo(6.0F)
          verticalLineToRelative(-12.0F)
          close()
          moveToRelative(0.0F, 14.5F)
          verticalLineToRelative(12.0F)
          curveTo(6.0F, 39.873F, 8.127F, 42.0F, 10.75F, 42.0F)
          horizontalLineToRelative(12.0F)
          verticalLineTo(25.25F)
          horizontalLineTo(6.0F)
          close()
          moveTo(25.25F, 42.0F)
          horizontalLineToRelative(12.0F)
          curveToRelative(2.623F, 0.0F, 4.75F, -2.127F, 4.75F, -4.75F)
          verticalLineToRelative(-12.0F)
          horizontalLineTo(25.25F)
          verticalLineTo(42.0F)
          close()
          moveTo(42.0F, 22.75F)
          verticalLineToRelative(-12.0F)
          curveTo(42.0F, 8.127F, 39.873F, 6.0F, 37.25F, 6.0F)
          horizontalLineToRelative(-12.0F)
          verticalLineToRelative(16.75F)
          horizontalLineTo(42.0F)
          close()        
      }
    }
    return _tableSimple48!!
  }

private var _tableSimple48: ImageVector? = null
