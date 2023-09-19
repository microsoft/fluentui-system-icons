package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.BoardSplit20: ImageVector
  get() {
    if (_boardSplit20 != null) {
      return _boardSplit20!!
    }
    _boardSplit20 = fluentIcon(name = "Filled.BoardSplit20", 20f) {
      materialPath {
          moveTo(6.0F, 3.0F)
          curveTo(4.343F, 3.0F, 3.0F, 4.343F, 3.0F, 6.0F)
          verticalLineToRelative(3.0F)
          horizontalLineToRelative(8.0F)
          verticalLineTo(3.0F)
          horizontalLineTo(6.0F)
          close()
          moveToRelative(5.0F, 7.0F)
          horizontalLineTo(3.0F)
          verticalLineToRelative(4.0F)
          curveToRelative(0.0F, 1.657F, 1.343F, 3.0F, 3.0F, 3.0F)
          horizontalLineToRelative(5.0F)
          verticalLineToRelative(-7.0F)
          close()
          moveToRelative(3.0F, 7.0F)
          horizontalLineToRelative(-2.0F)
          verticalLineToRelative(-4.0F)
          horizontalLineToRelative(5.0F)
          verticalLineToRelative(1.0F)
          curveToRelative(0.0F, 1.657F, -1.343F, 3.0F, -3.0F, 3.0F)
          close()
          moveToRelative(3.0F, -5.0F)
          horizontalLineToRelative(-5.0F)
          verticalLineTo(8.0F)
          horizontalLineToRelative(5.0F)
          verticalLineToRelative(4.0F)
          close()
          moveToRelative(0.0F, -5.0F)
          horizontalLineToRelative(-5.0F)
          verticalLineTo(3.0F)
          horizontalLineToRelative(2.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, 1.343F, 3.0F, 3.0F)
          verticalLineToRelative(1.0F)
          close()        
      }
    }
    return _boardSplit20!!
  }

private var _boardSplit20: ImageVector? = null
