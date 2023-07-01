package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Shifts24: ImageVector
  get() {
    if (_shifts24 != null) {
      return _shifts24!!
    }
    _shifts24 = fluentIcon(name = "Filled.Shifts24", 24f) {
      materialPath {
          moveTo(17.75F, 3.0F)
          curveTo(19.545F, 3.0F, 21.0F, 4.455F, 21.0F, 6.25F)
          verticalLineToRelative(11.5F)
          curveToRelative(0.0F, 1.795F, -1.455F, 3.25F, -3.25F, 3.25F)
          horizontalLineTo(6.25F)
          curveTo(4.455F, 21.0F, 3.0F, 19.545F, 3.0F, 17.75F)
          verticalLineTo(6.25F)
          curveTo(3.0F, 4.455F, 4.455F, 3.0F, 6.25F, 3.0F)
          horizontalLineToRelative(11.5F)
          close()
          moveToRelative(-6.0F, 3.0F)
          curveTo(11.336F, 6.0F, 11.0F, 6.336F, 11.0F, 6.75F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(4.498F)
          curveToRelative(0.415F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(16.663F, 12.0F, 16.248F, 12.0F)
          horizontalLineTo(12.5F)
          verticalLineTo(6.75F)
          curveTo(12.5F, 6.336F, 12.164F, 6.0F, 11.75F, 6.0F)
          close()        
      }
    }
    return _shifts24!!
  }

private var _shifts24: ImageVector? = null
