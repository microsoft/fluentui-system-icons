package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PositionForward24: ImageVector
  get() {
    if (_positionForward24 != null) {
      return _positionForward24!!
    }
    _positionForward24 = fluentIcon(name = "Filled.PositionForward24", 24f) {
      materialPath {
          moveTo(13.25F, 16.5F)
          curveToRelative(1.795F, 0.0F, 3.25F, -1.455F, 3.25F, -3.25F)
          verticalLineToRelative(-8.0F)
          curveTo(16.5F, 3.455F, 15.045F, 2.0F, 13.25F, 2.0F)
          horizontalLineToRelative(-8.0F)
          curveTo(3.455F, 2.0F, 2.0F, 3.455F, 2.0F, 5.25F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 1.795F, 1.455F, 3.25F, 3.25F, 3.25F)
          horizontalLineToRelative(8.0F)
          close()
          moveToRelative(-5.75F, 1.0F)
          horizontalLineTo(9.0F)
          verticalLineToRelative(1.25F)
          curveToRelative(0.0F, 0.966F, 0.784F, 1.75F, 1.75F, 1.75F)
          horizontalLineToRelative(8.0F)
          curveToRelative(0.966F, 0.0F, 1.75F, -0.784F, 1.75F, -1.75F)
          verticalLineToRelative(-8.0F)
          curveTo(20.5F, 9.784F, 19.716F, 9.0F, 18.75F, 9.0F)
          horizontalLineTo(17.5F)
          verticalLineTo(7.5F)
          horizontalLineToRelative(1.25F)
          curveToRelative(1.795F, 0.0F, 3.25F, 1.455F, 3.25F, 3.25F)
          verticalLineToRelative(8.0F)
          curveToRelative(0.0F, 1.795F, -1.455F, 3.25F, -3.25F, 3.25F)
          horizontalLineToRelative(-8.0F)
          curveToRelative(-1.795F, 0.0F, -3.25F, -1.455F, -3.25F, -3.25F)
          verticalLineTo(17.5F)
          close()        
      }
    }
    return _positionForward24!!
  }

private var _positionForward24: ImageVector? = null
