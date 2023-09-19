package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.BoardSplit24: ImageVector
  get() {
    if (_boardSplit24 != null) {
      return _boardSplit24!!
    }
    _boardSplit24 = fluentIcon(name = "Regular.BoardSplit24", 24f) {
      materialPath {
          moveTo(3.0F, 6.25F)
          curveTo(3.0F, 4.455F, 4.455F, 3.0F, 6.25F, 3.0F)
          horizontalLineToRelative(11.5F)
          curveTo(19.545F, 3.0F, 21.0F, 4.455F, 21.0F, 6.25F)
          verticalLineToRelative(11.5F)
          curveToRelative(0.0F, 1.795F, -1.455F, 3.25F, -3.25F, 3.25F)
          horizontalLineTo(6.25F)
          curveTo(4.455F, 21.0F, 3.0F, 19.545F, 3.0F, 17.75F)
          verticalLineTo(6.25F)
          close()
          moveToRelative(1.5F, 6.25F)
          verticalLineToRelative(5.25F)
          curveToRelative(0.0F, 0.966F, 0.784F, 1.75F, 1.75F, 1.75F)
          horizontalLineTo(14.0F)
          verticalLineToRelative(-7.0F)
          horizontalLineTo(4.5F)
          close()
          moveTo(14.0F, 11.0F)
          verticalLineTo(4.5F)
          horizontalLineTo(6.25F)
          curveTo(5.284F, 4.5F, 4.5F, 5.284F, 4.5F, 6.25F)
          verticalLineTo(11.0F)
          horizontalLineTo(14.0F)
          close()
          moveToRelative(5.5F, -1.5F)
          horizontalLineToRelative(-4.0F)
          verticalLineToRelative(5.0F)
          horizontalLineToRelative(4.0F)
          verticalLineToRelative(-5.0F)
          close()
          moveToRelative(0.0F, 6.5F)
          horizontalLineToRelative(-4.0F)
          verticalLineToRelative(3.5F)
          horizontalLineToRelative(2.25F)
          curveToRelative(0.966F, 0.0F, 1.75F, -0.784F, 1.75F, -1.75F)
          verticalLineTo(16.0F)
          close()
          moveToRelative(0.0F, -8.0F)
          verticalLineTo(6.25F)
          curveToRelative(0.0F, -0.966F, -0.784F, -1.75F, -1.75F, -1.75F)
          horizontalLineTo(15.5F)
          verticalLineTo(8.0F)
          horizontalLineToRelative(4.0F)
          close()        
      }
    }
    return _boardSplit24!!
  }

private var _boardSplit24: ImageVector? = null
