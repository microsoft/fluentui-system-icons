package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.DataWaterfall24: ImageVector
  get() {
    if (_dataWaterfall24 != null) {
      return _dataWaterfall24!!
    }
    _dataWaterfall24 = fluentIcon(name = "Regular.DataWaterfall24", 24f) {
      materialPath {
          moveTo(2.0F, 3.75F)
          curveTo(2.0F, 3.336F, 2.336F, 3.0F, 2.75F, 3.0F)
          horizontalLineToRelative(6.5F)
          curveToRelative(1.243F, 0.0F, 2.25F, 1.007F, 2.25F, 2.25F)
          verticalLineTo(11.0F)
          horizontalLineToRelative(6.25F)
          curveToRelative(1.243F, 0.0F, 2.25F, 1.007F, 2.25F, 2.25F)
          verticalLineToRelative(6.25F)
          horizontalLineToRelative(1.25F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveTo(21.664F, 21.0F, 21.25F, 21.0F)
          horizontalLineToRelative(-6.5F)
          curveToRelative(-1.243F, 0.0F, -2.25F, -1.007F, -2.25F, -2.25F)
          verticalLineTo(12.5F)
          horizontalLineTo(6.25F)
          curveTo(5.007F, 12.5F, 4.0F, 11.493F, 4.0F, 10.25F)
          verticalLineTo(4.5F)
          horizontalLineTo(2.75F)
          curveTo(2.336F, 4.5F, 2.0F, 4.164F, 2.0F, 3.75F)
          close()
          moveTo(18.5F, 19.5F)
          verticalLineToRelative(-6.25F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineTo(14.0F)
          verticalLineToRelative(6.25F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(3.75F)
          close()
          moveTo(10.0F, 5.25F)
          curveTo(10.0F, 4.836F, 9.664F, 4.5F, 9.25F, 4.5F)
          horizontalLineTo(5.5F)
          verticalLineToRelative(5.75F)
          curveTo(5.5F, 10.664F, 5.836F, 11.0F, 6.25F, 11.0F)
          horizontalLineTo(10.0F)
          verticalLineTo(5.25F)
          close()        
      }
    }
    return _dataWaterfall24!!
  }

private var _dataWaterfall24: ImageVector? = null
