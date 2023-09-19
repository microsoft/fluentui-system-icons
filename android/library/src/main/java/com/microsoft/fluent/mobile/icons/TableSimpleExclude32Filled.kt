package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TableSimpleExclude32: ImageVector
  get() {
    if (_tableSimpleExclude32 != null) {
      return _tableSimpleExclude32!!
    }
    _tableSimpleExclude32 = fluentIcon(name = "Filled.TableSimpleExclude32", 32f) {
      materialPath {
          moveTo(6.5F, 2.0F)
          horizontalLineTo(12.0F)
          verticalLineToRelative(10.0F)
          horizontalLineTo(2.0F)
          verticalLineTo(6.5F)
          curveTo(2.0F, 4.015F, 4.015F, 2.0F, 6.5F, 2.0F)
          close()
          moveTo(2.0F, 14.0F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 2.485F, 2.015F, 4.5F, 4.5F, 4.5F)
          horizontalLineTo(12.0F)
          verticalLineTo(14.0F)
          horizontalLineTo(2.0F)
          close()
          moveToRelative(21.5F, -2.0F)
          verticalLineTo(6.5F)
          curveTo(23.5F, 4.015F, 21.485F, 2.0F, 19.0F, 2.0F)
          horizontalLineToRelative(-5.0F)
          verticalLineToRelative(10.0F)
          horizontalLineToRelative(9.5F)
          close()
          moveTo(16.0F, 19.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, 1.343F, 3.0F, 3.0F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 1.657F, -1.343F, 3.0F, -3.0F, 3.0F)
          horizontalLineToRelative(-8.0F)
          curveToRelative(-1.657F, 0.0F, -3.0F, -1.343F, -3.0F, -3.0F)
          verticalLineToRelative(-8.0F)
          close()        
      }
    }
    return _tableSimpleExclude32!!
  }

private var _tableSimpleExclude32: ImageVector? = null
