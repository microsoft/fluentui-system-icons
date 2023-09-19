package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PositionBackward24: ImageVector
  get() {
    if (_positionBackward24 != null) {
      return _positionBackward24!!
    }
    _positionBackward24 = fluentIcon(name = "Filled.PositionBackward24", 24f) {
      materialPath {
          moveTo(16.5F, 6.5F)
          horizontalLineToRelative(-5.75F)
          curveToRelative(-2.347F, 0.0F, -4.25F, 1.903F, -4.25F, 4.25F)
          verticalLineToRelative(5.75F)
          horizontalLineTo(5.25F)
          curveTo(3.455F, 16.5F, 2.0F, 15.045F, 2.0F, 13.25F)
          verticalLineToRelative(-8.0F)
          curveTo(2.0F, 3.455F, 3.455F, 2.0F, 5.25F, 2.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.795F, 0.0F, 3.25F, 1.455F, 3.25F, 3.25F)
          verticalLineTo(6.5F)
          close()
          moveTo(22.0F, 18.75F)
          curveToRelative(0.0F, 1.795F, -1.455F, 3.25F, -3.25F, 3.25F)
          horizontalLineToRelative(-8.0F)
          curveToRelative(-1.795F, 0.0F, -3.25F, -1.455F, -3.25F, -3.25F)
          verticalLineToRelative(-8.0F)
          curveToRelative(0.0F, -1.795F, 1.455F, -3.25F, 3.25F, -3.25F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.795F, 0.0F, 3.25F, 1.455F, 3.25F, 3.25F)
          verticalLineToRelative(8.0F)
          close()
          moveToRelative(-3.25F, 1.75F)
          curveToRelative(0.966F, 0.0F, 1.75F, -0.784F, 1.75F, -1.75F)
          verticalLineToRelative(-8.0F)
          curveTo(20.5F, 9.784F, 19.716F, 9.0F, 18.75F, 9.0F)
          horizontalLineToRelative(-8.0F)
          curveTo(9.784F, 9.0F, 9.0F, 9.784F, 9.0F, 10.75F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 0.966F, 0.784F, 1.75F, 1.75F, 1.75F)
          horizontalLineToRelative(8.0F)
          close()        
      }
    }
    return _positionBackward24!!
  }

private var _positionBackward24: ImageVector? = null
