package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DataWaterfall24: ImageVector
  get() {
    if (_dataWaterfall24 != null) {
      return _dataWaterfall24!!
    }
    _dataWaterfall24 = fluentIcon(name = "Filled.DataWaterfall24", 24f) {
      materialPath {
          moveTo(2.75F, 3.0F)
          curveTo(2.336F, 3.0F, 2.0F, 3.336F, 2.0F, 3.75F)
          reflectiveCurveTo(2.336F, 4.5F, 2.75F, 4.5F)
          horizontalLineTo(4.0F)
          verticalLineToRelative(5.75F)
          curveToRelative(0.0F, 1.243F, 1.007F, 2.25F, 2.25F, 2.25F)
          horizontalLineToRelative(6.25F)
          verticalLineToRelative(6.25F)
          curveToRelative(0.0F, 1.243F, 1.007F, 2.25F, 2.25F, 2.25F)
          horizontalLineToRelative(6.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineTo(20.0F)
          verticalLineToRelative(-6.25F)
          curveToRelative(0.0F, -1.243F, -1.007F, -2.25F, -2.25F, -2.25F)
          horizontalLineTo(11.5F)
          verticalLineTo(5.25F)
          curveTo(11.5F, 4.007F, 10.493F, 3.0F, 9.25F, 3.0F)
          horizontalLineToRelative(-6.5F)
          close()        
      }
    }
    return _dataWaterfall24!!
  }

private var _dataWaterfall24: ImageVector? = null
