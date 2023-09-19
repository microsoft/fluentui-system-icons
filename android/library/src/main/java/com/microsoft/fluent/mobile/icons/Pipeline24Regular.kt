package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Pipeline24: ImageVector
  get() {
    if (_pipeline24 != null) {
      return _pipeline24!!
    }
    _pipeline24 = fluentIcon(name = "Regular.Pipeline24", 24f) {
      materialPath {
          moveTo(2.0F, 6.25F)
          curveTo(2.0F, 5.007F, 3.007F, 4.0F, 4.25F, 4.0F)
          curveToRelative(1.158F, 0.0F, 2.112F, 0.875F, 2.236F, 2.0F)
          horizontalLineToRelative(11.028F)
          curveToRelative(0.124F, -1.125F, 1.078F, -2.0F, 2.236F, -2.0F)
          curveTo(20.993F, 4.0F, 22.0F, 5.007F, 22.0F, 6.25F)
          verticalLineToRelative(10.5F)
          curveToRelative(0.0F, 1.243F, -1.007F, 2.25F, -2.25F, 2.25F)
          curveToRelative(-1.158F, 0.0F, -2.112F, -0.875F, -2.236F, -2.0F)
          horizontalLineTo(6.486F)
          curveToRelative(-0.124F, 1.125F, -1.078F, 2.0F, -2.236F, 2.0F)
          curveTo(3.007F, 19.0F, 2.0F, 17.993F, 2.0F, 16.75F)
          verticalLineTo(6.25F)
          close()
          moveToRelative(3.0F, 0.0F)
          curveTo(5.0F, 5.836F, 4.664F, 5.5F, 4.25F, 5.5F)
          reflectiveCurveTo(3.5F, 5.836F, 3.5F, 6.25F)
          verticalLineToRelative(10.5F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveTo(5.0F, 17.164F, 5.0F, 16.75F)
          verticalLineTo(6.25F)
          close()
          moveToRelative(1.5F, 9.25F)
          horizontalLineToRelative(11.0F)
          verticalLineToRelative(-8.0F)
          horizontalLineToRelative(-11.0F)
          verticalLineToRelative(8.0F)
          close()
          moveToRelative(14.0F, -9.25F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          reflectiveCurveTo(19.0F, 5.836F, 19.0F, 6.25F)
          verticalLineToRelative(10.5F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          reflectiveCurveToRelative(0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineTo(6.25F)
          close()        
      }
    }
    return _pipeline24!!
  }

private var _pipeline24: ImageVector? = null
