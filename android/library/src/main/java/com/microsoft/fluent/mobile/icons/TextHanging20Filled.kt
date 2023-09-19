package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.TextHanging20: ImageVector
  get() {
    if (_textHanging20 != null) {
      return _textHanging20!!
    }
    _textHanging20 = fluentIcon(name = "Filled.TextHanging20", 20f) {
      materialPath {
          moveTo(16.25F, 3.5F)
          curveTo(16.664F, 3.5F, 17.0F, 3.836F, 17.0F, 4.25F)
          reflectiveCurveTo(16.664F, 5.0F, 16.25F, 5.0F)
          horizontalLineTo(3.75F)
          curveTo(3.336F, 5.0F, 3.0F, 4.664F, 3.0F, 4.25F)
          reflectiveCurveTo(3.336F, 3.5F, 3.75F, 3.5F)
          horizontalLineToRelative(12.5F)
          close()
          moveToRelative(-5.0F, 10.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveTo(11.664F, 15.0F, 11.25F, 15.0F)
          horizontalLineToRelative(-7.5F)
          curveTo(3.336F, 15.0F, 3.0F, 14.664F, 3.0F, 14.25F)
          reflectiveCurveToRelative(0.336F, -0.75F, 0.75F, -0.75F)
          horizontalLineToRelative(7.5F)
          close()
          moveTo(12.0F, 9.25F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          horizontalLineToRelative(-7.5F)
          curveTo(3.336F, 8.5F, 3.0F, 8.836F, 3.0F, 9.25F)
          reflectiveCurveTo(3.336F, 10.0F, 3.75F, 10.0F)
          horizontalLineToRelative(7.5F)
          curveTo(11.664F, 10.0F, 12.0F, 9.664F, 12.0F, 9.25F)
          close()
          moveToRelative(3.72F, 1.47F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(-0.97F, 0.97F)
          lineToRelative(0.97F, 0.97F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          lineToRelative(-1.5F, -1.5F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          lineToRelative(1.5F, -1.5F)
          close()        
      }
    }
    return _textHanging20!!
  }

private var _textHanging20: ImageVector? = null
