package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Shifts28: ImageVector
  get() {
    if (_shifts28 != null) {
      return _shifts28!!
    }
    _shifts28 = fluentIcon(name = "Filled.Shifts28", 28f) {
      materialPath {
          moveTo(3.0F, 6.25F)
          curveTo(3.0F, 4.455F, 4.455F, 3.0F, 6.25F, 3.0F)
          horizontalLineToRelative(15.5F)
          curveTo(23.545F, 3.0F, 25.0F, 4.455F, 25.0F, 6.25F)
          verticalLineToRelative(15.5F)
          curveToRelative(0.0F, 1.795F, -1.455F, 3.25F, -3.25F, 3.25F)
          horizontalLineTo(6.25F)
          curveTo(4.455F, 25.0F, 3.0F, 23.545F, 3.0F, 21.75F)
          verticalLineTo(6.25F)
          close()
          moveToRelative(11.5F, 1.5F)
          curveTo(14.5F, 7.336F, 14.164F, 7.0F, 13.75F, 7.0F)
          reflectiveCurveTo(13.0F, 7.336F, 13.0F, 7.75F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(5.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(19.664F, 14.0F, 19.25F, 14.0F)
          horizontalLineTo(14.5F)
          verticalLineTo(7.75F)
          close()        
      }
    }
    return _shifts28!!
  }

private var _shifts28: ImageVector? = null
