package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ExpandUpLeft24: ImageVector
  get() {
    if (_expandUpLeft24 != null) {
      return _expandUpLeft24!!
    }
    _expandUpLeft24 = fluentIcon(name = "Filled.ExpandUpLeft24", 24f) {
      materialPath {
          moveTo(11.0F, 3.75F)
          curveTo(11.0F, 3.336F, 10.664F, 3.0F, 10.25F, 3.0F)
          horizontalLineToRelative(-6.5F)
          curveTo(3.334F, 3.0F, 3.0F, 3.336F, 3.0F, 3.75F)
          verticalLineToRelative(6.5F)
          curveTo(3.0F, 10.664F, 3.334F, 11.0F, 3.75F, 11.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineTo(5.56F)
          lineToRelative(5.22F, 5.22F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.768F, 0.0F, -1.06F)
          lineTo(5.56F, 4.5F)
          horizontalLineToRelative(4.69F)
          curveTo(10.664F, 4.5F, 11.0F, 4.164F, 11.0F, 3.75F)
          close()
          moveToRelative(6.75F, 0.75F)
          curveToRelative(0.966F, 0.0F, 1.75F, 0.784F, 1.75F, 1.75F)
          verticalLineTo(12.0F)
          horizontalLineToRelative(-4.75F)
          curveTo(13.231F, 12.0F, 12.0F, 13.231F, 12.0F, 14.75F)
          verticalLineToRelative(4.75F)
          horizontalLineTo(6.25F)
          curveToRelative(-0.966F, 0.0F, -1.75F, -0.784F, -1.75F, -1.75F)
          verticalLineToRelative(-4.0F)
          curveTo(4.5F, 13.336F, 4.164F, 13.0F, 3.75F, 13.0F)
          reflectiveCurveTo(3.0F, 13.336F, 3.0F, 13.75F)
          verticalLineToRelative(4.0F)
          curveTo(3.0F, 19.545F, 4.455F, 21.0F, 6.25F, 21.0F)
          horizontalLineToRelative(11.5F)
          curveToRelative(1.795F, 0.0F, 3.25F, -1.455F, 3.25F, -3.25F)
          verticalLineTo(6.25F)
          curveTo(21.0F, 4.455F, 19.545F, 3.0F, 17.75F, 3.0F)
          horizontalLineToRelative(-4.0F)
          curveTo(13.336F, 3.0F, 13.0F, 3.336F, 13.0F, 3.75F)
          reflectiveCurveToRelative(0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(4.0F)
          close()        
      }
    }
    return _expandUpLeft24!!
  }

private var _expandUpLeft24: ImageVector? = null
