package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Gesture20: ImageVector
  get() {
    if (_gesture20 != null) {
      return _gesture20!!
    }
    _gesture20 = fluentIcon(name = "Filled.Gesture20", 20f) {
      materialPath {
          moveTo(18.0F, 4.75F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveTo(16.5F, 5.164F, 16.5F, 4.75F)
          reflectiveCurveTo(16.836F, 4.0F, 17.25F, 4.0F)
          reflectiveCurveTo(18.0F, 4.336F, 18.0F, 4.75F)
          close()
          moveTo(3.5F, 16.25F)
          curveTo(3.5F, 16.664F, 3.164F, 17.0F, 2.75F, 17.0F)
          reflectiveCurveTo(2.0F, 16.664F, 2.0F, 16.25F)
          reflectiveCurveToRelative(0.336F, -0.75F, 0.75F, -0.75F)
          reflectiveCurveToRelative(0.75F, 0.336F, 0.75F, 0.75F)
          close()
          moveTo(5.75F, 4.0F)
          curveTo(5.397F, 4.0F, 5.091F, 4.247F, 5.017F, 4.592F)
          curveTo(4.942F, 4.937F, 5.119F, 5.288F, 5.441F, 5.433F)
          lineToRelative(9.064F, 4.1F)
          lineToRelative(-9.59F, 4.796F)
          curveToRelative(-0.37F, 0.185F, -0.521F, 0.636F, -0.336F, 1.006F)
          reflectiveCurveToRelative(0.636F, 0.521F, 1.006F, 0.336F)
          lineToRelative(11.0F, -5.5F)
          curveToRelative(0.26F, -0.13F, 0.42F, -0.396F, 0.415F, -0.686F)
          curveToRelative(-0.006F, -0.289F, -0.177F, -0.55F, -0.44F, -0.668F)
          lineTo(9.227F, 5.5F)
          horizontalLineToRelative(5.522F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          reflectiveCurveTo(15.164F, 4.0F, 14.75F, 4.0F)
          horizontalLineTo(5.751F)
          close()        
      }
    }
    return _gesture20!!
  }

private var _gesture20: ImageVector? = null
