package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowWrap20: ImageVector
  get() {
    if (_arrowWrap20 != null) {
      return _arrowWrap20!!
    }
    _arrowWrap20 = fluentIcon(name = "Filled.ArrowWrap20", 20f) {
      materialPath {
          moveTo(13.75F, 3.5F)
          curveTo(15.545F, 3.5F, 17.0F, 4.955F, 17.0F, 6.75F)
          reflectiveCurveTo(15.545F, 10.0F, 13.75F, 10.0F)
          horizontalLineToRelative(-7.5F)
          curveToRelative(-0.966F, 0.0F, -1.75F, 0.784F, -1.75F, 1.75F)
          reflectiveCurveToRelative(0.784F, 1.75F, 1.75F, 1.75F)
          horizontalLineToRelative(9.19F)
          lineToRelative(-0.22F, -0.22F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineToRelative(1.5F, 1.5F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(-1.5F, 1.5F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          lineTo(15.44F, 15.0F)
          horizontalLineTo(6.25F)
          curveTo(4.455F, 15.0F, 3.0F, 13.545F, 3.0F, 11.75F)
          reflectiveCurveTo(4.455F, 8.5F, 6.25F, 8.5F)
          horizontalLineToRelative(7.5F)
          curveToRelative(0.966F, 0.0F, 1.75F, -0.784F, 1.75F, -1.75F)
          reflectiveCurveTo(14.716F, 5.0F, 13.75F, 5.0F)
          horizontalLineToRelative(-10.0F)
          curveTo(3.336F, 5.0F, 3.0F, 4.664F, 3.0F, 4.25F)
          reflectiveCurveTo(3.336F, 3.5F, 3.75F, 3.5F)
          horizontalLineToRelative(10.0F)
          close()        
      }
    }
    return _arrowWrap20!!
  }

private var _arrowWrap20: ImageVector? = null
