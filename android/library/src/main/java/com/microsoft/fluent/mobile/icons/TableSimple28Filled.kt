package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TableSimple28: ImageVector
  get() {
    if (_tableSimple28 != null) {
      return _tableSimple28!!
    }
    _tableSimple28 = fluentIcon(name = "Filled.TableSimple28", 28f) {
      materialPath {
          moveTo(3.0F, 6.75F)
          curveTo(3.0F, 4.679F, 4.679F, 3.0F, 6.75F, 3.0F)
          horizontalLineToRelative(6.5F)
          verticalLineToRelative(10.25F)
          horizontalLineTo(3.0F)
          verticalLineToRelative(-6.5F)
          close()
          moveToRelative(0.0F, 8.0F)
          verticalLineToRelative(6.5F)
          curveTo(3.0F, 23.321F, 4.679F, 25.0F, 6.75F, 25.0F)
          horizontalLineToRelative(6.5F)
          verticalLineTo(14.75F)
          horizontalLineTo(3.0F)
          close()
          moveTo(14.75F, 25.0F)
          horizontalLineToRelative(6.5F)
          curveToRelative(2.071F, 0.0F, 3.75F, -1.679F, 3.75F, -3.75F)
          verticalLineToRelative(-6.5F)
          horizontalLineTo(14.75F)
          verticalLineTo(25.0F)
          close()
          moveTo(25.0F, 13.25F)
          verticalLineToRelative(-6.5F)
          curveTo(25.0F, 4.679F, 23.321F, 3.0F, 21.25F, 3.0F)
          horizontalLineToRelative(-6.5F)
          verticalLineToRelative(10.25F)
          horizontalLineTo(25.0F)
          close()        
      }
    }
    return _tableSimple28!!
  }

private var _tableSimple28: ImageVector? = null
