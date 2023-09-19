package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowRedo20: ImageVector
  get() {
    if (_arrowRedo20 != null) {
      return _arrowRedo20!!
    }
    _arrowRedo20 = fluentIcon(name = "Filled.ArrowRedo20", 20f) {
      materialPath {
          moveTo(13.14F, 6.5F)
          horizontalLineToRelative(-2.387F)
          curveToRelative(-0.414F, 0.0F, -0.75F, 0.336F, -0.75F, 0.75F)
          reflectiveCurveTo(10.34F, 8.0F, 10.753F, 8.0F)
          horizontalLineToRelative(4.4F)
          curveToRelative(0.47F, 0.0F, 0.85F, -0.38F, 0.85F, -0.85F)
          verticalLineToRelative(-4.4F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          reflectiveCurveToRelative(-0.75F, 0.336F, -0.75F, 0.75F)
          verticalLineToRelative(2.947F)
          lineToRelative(-3.059F, -2.66F)
          curveToRelative(-2.188F, -1.9F, -5.504F, -1.669F, -7.406F, 0.52F)
          curveToRelative(-1.902F, 2.188F, -1.67F, 5.504F, 0.518F, 7.406F)
          lineToRelative(8.172F, 7.104F)
          curveToRelative(0.312F, 0.272F, 0.786F, 0.239F, 1.058F, -0.074F)
          curveToRelative(0.271F, -0.313F, 0.238F, -0.786F, -0.074F, -1.058F)
          lineTo(5.54F, 9.83F)
          curveTo(3.977F, 8.472F, 3.81F, 6.103F, 5.17F, 4.54F)
          curveToRelative(1.359F, -1.563F, 3.727F, -1.729F, 5.29F, -0.37F)
          lineToRelative(2.68F, 2.33F)
          close()        
      }
    }
    return _arrowRedo20!!
  }

private var _arrowRedo20: ImageVector? = null
