package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.BoardSplit28: ImageVector
  get() {
    if (_boardSplit28 != null) {
      return _boardSplit28!!
    }
    _boardSplit28 = fluentIcon(name = "Regular.BoardSplit28", 28f) {
      materialPath {
          moveTo(3.0F, 6.75F)
          curveTo(3.0F, 4.679F, 4.679F, 3.0F, 6.75F, 3.0F)
          horizontalLineToRelative(14.5F)
          curveTo(23.321F, 3.0F, 25.0F, 4.679F, 25.0F, 6.75F)
          verticalLineToRelative(14.5F)
          curveToRelative(0.0F, 2.071F, -1.679F, 3.75F, -3.75F, 3.75F)
          horizontalLineTo(6.75F)
          curveTo(4.679F, 25.0F, 3.0F, 23.321F, 3.0F, 21.25F)
          verticalLineTo(6.75F)
          close()
          moveToRelative(1.5F, 7.75F)
          verticalLineToRelative(6.75F)
          curveToRelative(0.0F, 1.243F, 1.007F, 2.25F, 2.25F, 2.25F)
          horizontalLineTo(16.0F)
          verticalLineToRelative(-9.0F)
          horizontalLineTo(4.5F)
          close()
          moveTo(16.0F, 13.0F)
          verticalLineTo(4.5F)
          horizontalLineTo(6.75F)
          curveTo(5.507F, 4.5F, 4.5F, 5.507F, 4.5F, 6.75F)
          verticalLineTo(13.0F)
          horizontalLineTo(16.0F)
          close()
          moveToRelative(5.25F, 10.5F)
          curveToRelative(1.243F, 0.0F, 2.25F, -1.007F, 2.25F, -2.25F)
          verticalLineTo(18.0F)
          horizontalLineToRelative(-6.0F)
          verticalLineToRelative(5.5F)
          horizontalLineToRelative(3.75F)
          close()
          moveToRelative(2.25F, -7.0F)
          verticalLineToRelative(-5.0F)
          horizontalLineToRelative(-6.0F)
          verticalLineToRelative(5.0F)
          horizontalLineToRelative(6.0F)
          close()
          moveToRelative(-6.0F, -12.0F)
          verticalLineTo(10.0F)
          horizontalLineToRelative(6.0F)
          verticalLineTo(6.75F)
          curveToRelative(0.0F, -1.243F, -1.007F, -2.25F, -2.25F, -2.25F)
          horizontalLineTo(17.5F)
          close()        
      }
    }
    return _boardSplit28!!
  }

private var _boardSplit28: ImageVector? = null
