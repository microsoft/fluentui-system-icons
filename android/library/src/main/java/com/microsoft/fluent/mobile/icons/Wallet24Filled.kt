package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Wallet24: ImageVector
  get() {
    if (_wallet24 != null) {
      return _wallet24!!
    }
    _wallet24 = fluentIcon(name = "Filled.Wallet24", 24f) {
      materialPath {
          moveTo(3.0F, 5.0F)
          verticalLineToRelative(12.75F)
          curveTo(3.0F, 19.545F, 4.455F, 21.0F, 6.25F, 21.0F)
          horizontalLineToRelative(12.0F)
          curveToRelative(1.795F, 0.0F, 3.25F, -1.455F, 3.25F, -3.25F)
          verticalLineToRelative(-8.5F)
          curveToRelative(0.0F, -1.537F, -1.067F, -2.824F, -2.5F, -3.163F)
          verticalLineTo(5.25F)
          curveTo(19.0F, 4.007F, 17.993F, 3.0F, 16.75F, 3.0F)
          horizontalLineTo(5.25F)
          curveTo(4.092F, 3.0F, 3.138F, 3.875F, 3.014F, 5.0F)
          horizontalLineTo(3.0F)
          close()
          moveToRelative(2.25F, 1.0F)
          curveTo(4.836F, 6.0F, 4.5F, 5.664F, 4.5F, 5.25F)
          reflectiveCurveTo(4.836F, 4.5F, 5.25F, 4.5F)
          horizontalLineToRelative(11.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          verticalLineTo(6.0F)
          horizontalLineTo(5.25F)
          close()
          moveToRelative(11.0F, 7.0F)
          horizontalLineToRelative(2.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveToRelative(-0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineToRelative(-2.0F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          reflectiveCurveTo(15.836F, 13.0F, 16.25F, 13.0F)
          close()        
      }
    }
    return _wallet24!!
  }

private var _wallet24: ImageVector? = null
