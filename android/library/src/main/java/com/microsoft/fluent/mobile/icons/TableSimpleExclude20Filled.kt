package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TableSimpleExclude20: ImageVector
  get() {
    if (_tableSimpleExclude20 != null) {
      return _tableSimpleExclude20!!
    }
    _tableSimpleExclude20 = fluentIcon(name = "Filled.TableSimpleExclude20", 20f) {
      materialPath {
          moveTo(4.5F, 2.0F)
          horizontalLineTo(8.0F)
          verticalLineToRelative(6.0F)
          horizontalLineTo(2.0F)
          verticalLineTo(4.5F)
          curveTo(2.0F, 3.12F, 3.12F, 2.0F, 4.5F, 2.0F)
          close()
          moveTo(2.0F, 9.0F)
          verticalLineToRelative(3.5F)
          curveTo(2.0F, 13.88F, 3.12F, 15.0F, 4.5F, 15.0F)
          horizontalLineTo(8.0F)
          verticalLineTo(9.0F)
          horizontalLineTo(2.0F)
          close()
          moveToRelative(13.0F, -1.0F)
          verticalLineTo(4.5F)
          curveTo(15.0F, 3.12F, 13.88F, 2.0F, 12.5F, 2.0F)
          horizontalLineTo(9.0F)
          verticalLineToRelative(6.0F)
          horizontalLineToRelative(6.0F)
          close()
          moveToRelative(-4.0F, 5.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(4.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(4.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineToRelative(-4.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineToRelative(-4.0F)
          close()        
      }
    }
    return _tableSimpleExclude20!!
  }

private var _tableSimpleExclude20: ImageVector? = null
