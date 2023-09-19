package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Snooze20: ImageVector
  get() {
    if (_snooze20 != null) {
      return _snooze20!!
    }
    _snooze20 = fluentIcon(name = "Filled.Snooze20", 20f) {
      materialPath {
          moveTo(10.75F, 4.0F)
          curveTo(10.336F, 4.0F, 10.0F, 4.336F, 10.0F, 4.75F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(3.883F)
          lineToRelative(-4.455F, 5.265F)
          curveToRelative(-0.19F, 0.223F, -0.231F, 0.536F, -0.108F, 0.8F)
          curveTo(10.193F, 11.832F, 10.458F, 12.0F, 10.75F, 12.0F)
          horizontalLineToRelative(5.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveToRelative(-0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineToRelative(-3.883F)
          lineToRelative(4.456F, -5.266F)
          curveToRelative(0.188F, -0.223F, 0.23F, -0.535F, 0.107F, -0.8F)
          curveTo(16.808F, 4.17F, 16.542F, 4.0F, 16.25F, 4.0F)
          horizontalLineToRelative(-5.5F)
          close()
          moveToRelative(-7.0F, 6.0F)
          curveTo(3.336F, 10.0F, 3.0F, 10.336F, 3.0F, 10.75F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(1.966F)
          lineToRelative(-2.558F, 3.29F)
          curveToRelative(-0.176F, 0.226F, -0.208F, 0.532F, -0.082F, 0.79F)
          curveTo(3.202F, 15.836F, 3.464F, 16.0F, 3.75F, 16.0F)
          horizontalLineToRelative(3.5F)
          curveTo(7.664F, 16.0F, 8.0F, 15.664F, 8.0F, 15.25F)
          reflectiveCurveTo(7.664F, 14.5F, 7.25F, 14.5F)
          horizontalLineTo(5.284F)
          lineToRelative(2.558F, -3.29F)
          curveToRelative(0.176F, -0.226F, 0.208F, -0.532F, 0.082F, -0.79F)
          curveTo(7.798F, 10.164F, 7.536F, 10.0F, 7.25F, 10.0F)
          horizontalLineToRelative(-3.5F)
          close()        
      }
    }
    return _snooze20!!
  }

private var _snooze20: ImageVector? = null
