package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Tv28: ImageVector
  get() {
    if (_tv28 != null) {
      return _tv28!!
    }
    _tv28 = fluentIcon(name = "Filled.Tv28", 28f) {
      materialPath {
          moveTo(5.254F, 4.0F)
          curveToRelative(-1.794F, 0.0F, -3.25F, 1.455F, -3.25F, 3.25F)
          verticalLineToRelative(10.5F)
          curveToRelative(0.0F, 1.795F, 1.455F, 3.25F, 3.25F, 3.25F)
          horizontalLineToRelative(17.497F)
          curveToRelative(1.795F, 0.0F, 3.25F, -1.455F, 3.25F, -3.25F)
          verticalLineTo(7.25F)
          curveToRelative(0.0F, -1.795F, -1.455F, -3.25F, -3.25F, -3.25F)
          horizontalLineTo(5.254F)
          close()
          moveTo(6.0F, 23.75F)
          curveTo(6.0F, 23.336F, 6.336F, 23.0F, 6.75F, 23.0F)
          horizontalLineToRelative(14.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineTo(6.75F)
          curveTo(6.336F, 24.5F, 6.0F, 24.164F, 6.0F, 23.75F)
          close()        
      }
    }
    return _tv28!!
  }

private var _tv28: ImageVector? = null
