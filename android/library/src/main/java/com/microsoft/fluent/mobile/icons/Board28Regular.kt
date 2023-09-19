package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Board28: ImageVector
  get() {
    if (_board28 != null) {
      return _board28!!
    }
    _board28 = fluentIcon(name = "Regular.Board28", 28f) {
      materialPath {
          moveTo(6.75F, 3.0F)
          curveTo(4.679F, 3.0F, 3.0F, 4.679F, 3.0F, 6.75F)
          verticalLineToRelative(14.5F)
          curveTo(3.0F, 23.321F, 4.679F, 25.0F, 6.75F, 25.0F)
          horizontalLineToRelative(14.5F)
          curveToRelative(2.071F, 0.0F, 3.75F, -1.679F, 3.75F, -3.75F)
          verticalLineTo(6.75F)
          curveTo(25.0F, 4.679F, 23.321F, 3.0F, 21.25F, 3.0F)
          horizontalLineTo(6.75F)
          close()
          moveTo(4.5F, 6.75F)
          curveToRelative(0.0F, -1.243F, 1.007F, -2.25F, 2.25F, -2.25F)
          horizontalLineToRelative(6.75F)
          verticalLineToRelative(5.0F)
          horizontalLineToRelative(-9.0F)
          verticalLineTo(6.75F)
          close()
          moveToRelative(0.0F, 4.25F)
          horizontalLineToRelative(9.0F)
          verticalLineToRelative(12.5F)
          horizontalLineTo(6.75F)
          curveToRelative(-1.243F, 0.0F, -2.25F, -1.007F, -2.25F, -2.25F)
          verticalLineTo(11.0F)
          close()
          moveTo(15.0F, 23.5F)
          verticalLineTo(18.0F)
          horizontalLineToRelative(8.5F)
          verticalLineToRelative(3.25F)
          curveToRelative(0.0F, 1.243F, -1.007F, 2.25F, -2.25F, 2.25F)
          horizontalLineTo(15.0F)
          close()
          moveToRelative(8.5F, -7.0F)
          horizontalLineTo(15.0F)
          verticalLineToRelative(-12.0F)
          horizontalLineToRelative(6.25F)
          curveToRelative(1.243F, 0.0F, 2.25F, 1.007F, 2.25F, 2.25F)
          verticalLineToRelative(9.75F)
          close()        
      }
    }
    return _board28!!
  }

private var _board28: ImageVector? = null
