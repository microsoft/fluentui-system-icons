package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Payment24: ImageVector
  get() {
    if (_payment24 != null) {
      return _payment24!!
    }
    _payment24 = fluentIcon(name = "Filled.Payment24", 24f) {
      materialPath {
          moveTo(5.25F, 5.0F)
          curveTo(3.455F, 5.0F, 2.0F, 6.455F, 2.0F, 8.25F)
          verticalLineTo(9.5F)
          horizontalLineToRelative(20.0F)
          verticalLineTo(8.25F)
          curveTo(22.0F, 6.455F, 20.545F, 5.0F, 18.75F, 5.0F)
          horizontalLineTo(5.25F)
          close()
          moveTo(22.0F, 11.0F)
          horizontalLineTo(2.0F)
          verticalLineToRelative(4.75F)
          curveTo(2.0F, 17.545F, 3.455F, 19.0F, 5.25F, 19.0F)
          horizontalLineToRelative(13.5F)
          curveToRelative(1.795F, 0.0F, 3.25F, -1.455F, 3.25F, -3.25F)
          verticalLineTo(11.0F)
          close()
          moveToRelative(-6.25F, 3.5F)
          horizontalLineToRelative(2.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveTo(18.664F, 16.0F, 18.25F, 16.0F)
          horizontalLineToRelative(-2.5F)
          curveTo(15.336F, 16.0F, 15.0F, 15.664F, 15.0F, 15.25F)
          reflectiveCurveToRelative(0.336F, -0.75F, 0.75F, -0.75F)
          close()        
      }
    }
    return _payment24!!
  }

private var _payment24: ImageVector? = null
