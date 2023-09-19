package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TableSimple48: ImageVector
  get() {
    if (_tableSimple48 != null) {
      return _tableSimple48!!
    }
    _tableSimple48 = fluentIcon(name = "Regular.TableSimple48", 48f) {
      materialPath {
          moveTo(11.25F, 6.0F)
          horizontalLineToRelative(25.5F)
          curveTo(39.65F, 6.0F, 42.0F, 8.35F, 42.0F, 11.25F)
          verticalLineToRelative(25.5F)
          curveToRelative(0.0F, 2.9F, -2.35F, 5.25F, -5.25F, 5.25F)
          horizontalLineToRelative(-25.5F)
          curveTo(8.35F, 42.0F, 6.0F, 39.65F, 6.0F, 36.75F)
          verticalLineToRelative(-25.5F)
          curveTo(6.0F, 8.35F, 8.35F, 6.0F, 11.25F, 6.0F)
          close()
          moveTo(23.0F, 8.5F)
          horizontalLineTo(11.25F)
          curveToRelative(-1.519F, 0.0F, -2.75F, 1.231F, -2.75F, 2.75F)
          verticalLineToRelative(11.5F)
          horizontalLineTo(23.0F)
          verticalLineTo(8.5F)
          close()
          moveTo(8.5F, 25.25F)
          verticalLineToRelative(11.5F)
          curveToRelative(0.0F, 1.519F, 1.231F, 2.75F, 2.75F, 2.75F)
          horizontalLineTo(23.0F)
          verticalLineTo(25.25F)
          horizontalLineTo(8.5F)
          close()
          moveToRelative(17.0F, 14.25F)
          horizontalLineToRelative(11.25F)
          curveToRelative(1.519F, 0.0F, 2.75F, -1.231F, 2.75F, -2.75F)
          verticalLineToRelative(-11.5F)
          horizontalLineToRelative(-14.0F)
          verticalLineTo(39.5F)
          close()
          moveToRelative(14.0F, -16.75F)
          verticalLineToRelative(-11.5F)
          curveToRelative(0.0F, -1.519F, -1.231F, -2.75F, -2.75F, -2.75F)
          horizontalLineTo(25.5F)
          verticalLineToRelative(14.25F)
          horizontalLineToRelative(14.0F)
          close()        
      }
    }
    return _tableSimple48!!
  }

private var _tableSimple48: ImageVector? = null
