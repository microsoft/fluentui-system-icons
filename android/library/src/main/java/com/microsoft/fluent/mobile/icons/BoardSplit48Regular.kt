package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.BoardSplit48: ImageVector
  get() {
    if (_boardSplit48 != null) {
      return _boardSplit48!!
    }
    _boardSplit48 = fluentIcon(name = "Regular.BoardSplit48", 48f) {
      materialPath {
          moveTo(6.0F, 11.25F)
          curveTo(6.0F, 8.35F, 8.35F, 6.0F, 11.25F, 6.0F)
          horizontalLineToRelative(25.5F)
          curveTo(39.65F, 6.0F, 42.0F, 8.35F, 42.0F, 11.25F)
          verticalLineToRelative(25.5F)
          curveToRelative(0.0F, 2.9F, -2.35F, 5.25F, -5.25F, 5.25F)
          horizontalLineToRelative(-25.5F)
          curveTo(8.35F, 42.0F, 6.0F, 39.65F, 6.0F, 36.75F)
          verticalLineToRelative(-25.5F)
          close()
          moveTo(39.5F, 29.0F)
          verticalLineToRelative(-9.5F)
          horizontalLineToRelative(-10.0F)
          verticalLineTo(29.0F)
          horizontalLineToRelative(10.0F)
          close()
          moveToRelative(-10.0F, 2.5F)
          verticalLineToRelative(8.0F)
          horizontalLineToRelative(7.25F)
          curveToRelative(1.519F, 0.0F, 2.75F, -1.231F, 2.75F, -2.75F)
          verticalLineTo(31.5F)
          horizontalLineToRelative(-10.0F)
          close()
          moveToRelative(-2.5F, -6.0F)
          horizontalLineTo(8.5F)
          verticalLineToRelative(11.25F)
          curveToRelative(0.0F, 1.519F, 1.231F, 2.75F, 2.75F, 2.75F)
          horizontalLineTo(27.0F)
          verticalLineToRelative(-14.0F)
          close()
          moveToRelative(0.0F, -2.5F)
          verticalLineTo(8.5F)
          horizontalLineTo(11.25F)
          curveToRelative(-1.519F, 0.0F, -2.75F, 1.231F, -2.75F, 2.75F)
          verticalLineTo(23.0F)
          horizontalLineTo(27.0F)
          close()
          moveToRelative(12.5F, -6.0F)
          verticalLineToRelative(-5.75F)
          curveToRelative(0.0F, -1.519F, -1.231F, -2.75F, -2.75F, -2.75F)
          horizontalLineTo(29.5F)
          verticalLineTo(17.0F)
          horizontalLineToRelative(10.0F)
          close()        
      }
    }
    return _boardSplit48!!
  }

private var _boardSplit48: ImageVector? = null
