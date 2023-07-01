package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Board28: ImageVector
  get() {
    if (_board28 != null) {
      return _board28!!
    }
    _board28 = fluentIcon(name = "Filled.Board28", 28f) {
      materialPath {
          moveTo(13.5F, 3.0F)
          verticalLineToRelative(6.5F)
          horizontalLineTo(3.0F)
          verticalLineTo(6.75F)
          curveTo(3.0F, 4.679F, 4.679F, 3.0F, 6.75F, 3.0F)
          horizontalLineToRelative(6.75F)
          close()
          moveTo(15.0F, 3.0F)
          verticalLineToRelative(13.5F)
          horizontalLineToRelative(10.0F)
          verticalLineTo(6.75F)
          curveTo(25.0F, 4.679F, 23.321F, 3.0F, 21.25F, 3.0F)
          horizontalLineTo(15.0F)
          close()
          moveToRelative(10.0F, 15.0F)
          horizontalLineTo(15.0F)
          verticalLineToRelative(7.0F)
          horizontalLineToRelative(6.25F)
          curveToRelative(2.071F, 0.0F, 3.75F, -1.679F, 3.75F, -3.75F)
          verticalLineTo(18.0F)
          close()
          moveToRelative(-11.5F, 7.0F)
          verticalLineTo(11.0F)
          horizontalLineTo(3.0F)
          verticalLineToRelative(10.25F)
          curveTo(3.0F, 23.321F, 4.679F, 25.0F, 6.75F, 25.0F)
          horizontalLineToRelative(6.75F)
          close()        
      }
    }
    return _board28!!
  }

private var _board28: ImageVector? = null
