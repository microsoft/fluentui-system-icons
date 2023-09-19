package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.BoardSplit24: ImageVector
  get() {
    if (_boardSplit24 != null) {
      return _boardSplit24!!
    }
    _boardSplit24 = fluentIcon(name = "Filled.BoardSplit24", 24f) {
      materialPath {
          moveTo(6.25F, 3.0F)
          curveTo(4.455F, 3.0F, 3.0F, 4.455F, 3.0F, 6.25F)
          verticalLineTo(11.0F)
          horizontalLineToRelative(11.0F)
          verticalLineTo(3.0F)
          horizontalLineTo(6.25F)
          close()
          moveTo(3.0F, 17.75F)
          verticalLineTo(12.5F)
          horizontalLineToRelative(11.0F)
          verticalLineTo(21.0F)
          horizontalLineTo(6.25F)
          curveTo(4.455F, 21.0F, 3.0F, 19.545F, 3.0F, 17.75F)
          close()
          moveTo(15.5F, 16.0F)
          verticalLineToRelative(5.0F)
          horizontalLineToRelative(2.25F)
          curveToRelative(1.795F, 0.0F, 3.25F, -1.455F, 3.25F, -3.25F)
          verticalLineTo(16.0F)
          horizontalLineToRelative(-5.5F)
          close()
          moveToRelative(5.5F, -1.5F)
          verticalLineToRelative(-5.0F)
          horizontalLineToRelative(-5.5F)
          verticalLineToRelative(5.0F)
          horizontalLineTo(21.0F)
          close()
          moveTo(21.0F, 8.0F)
          horizontalLineToRelative(-5.5F)
          verticalLineTo(3.0F)
          horizontalLineToRelative(2.25F)
          curveTo(19.545F, 3.0F, 21.0F, 4.455F, 21.0F, 6.25F)
          verticalLineTo(8.0F)
          close()        
      }
    }
    return _boardSplit24!!
  }

private var _boardSplit24: ImageVector? = null
