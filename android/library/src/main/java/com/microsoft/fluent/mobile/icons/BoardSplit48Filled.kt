package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.BoardSplit48: ImageVector
  get() {
    if (_boardSplit48 != null) {
      return _boardSplit48!!
    }
    _boardSplit48 = fluentIcon(name = "Filled.BoardSplit48", 48f) {
      materialPath {
          moveTo(11.25F, 6.0F)
          curveTo(8.35F, 6.0F, 6.0F, 8.35F, 6.0F, 11.25F)
          verticalLineTo(23.0F)
          horizontalLineToRelative(21.0F)
          verticalLineTo(6.0F)
          horizontalLineTo(11.25F)
          close()
          moveTo(27.0F, 25.5F)
          horizontalLineTo(6.0F)
          verticalLineToRelative(11.25F)
          curveTo(6.0F, 39.65F, 8.35F, 42.0F, 11.25F, 42.0F)
          horizontalLineTo(27.0F)
          verticalLineTo(25.5F)
          close()
          moveTo(36.75F, 42.0F)
          horizontalLineTo(29.5F)
          verticalLineTo(31.5F)
          horizontalLineTo(42.0F)
          verticalLineToRelative(5.25F)
          curveToRelative(0.0F, 2.9F, -2.35F, 5.25F, -5.25F, 5.25F)
          close()
          moveTo(42.0F, 19.5F)
          verticalLineTo(29.0F)
          horizontalLineTo(29.5F)
          verticalLineToRelative(-9.5F)
          horizontalLineTo(42.0F)
          close()
          moveToRelative(0.0F, -2.5F)
          horizontalLineTo(29.5F)
          verticalLineTo(6.0F)
          horizontalLineToRelative(7.25F)
          curveTo(39.65F, 6.0F, 42.0F, 8.35F, 42.0F, 11.25F)
          verticalLineTo(17.0F)
          close()        
      }
    }
    return _boardSplit48!!
  }

private var _boardSplit48: ImageVector? = null
