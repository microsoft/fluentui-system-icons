package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Pulse20: ImageVector
  get() {
    if (_pulse20 != null) {
      return _pulse20!!
    }
    _pulse20 = fluentIcon(name = "Filled.Pulse20", 20f) {
      materialPath {
          moveTo(7.01F, 3.0F)
          curveToRelative(0.332F, 0.004F, 0.623F, 0.227F, 0.712F, 0.548F)
          lineToRelative(2.821F, 10.075F)
          lineToRelative(2.242F, -7.099F)
          curveToRelative(0.094F, -0.299F, 0.365F, -0.508F, 0.678F, -0.523F)
          curveToRelative(0.313F, -0.016F, 0.603F, 0.165F, 0.726F, 0.454F)
          lineTo(15.495F, 9.5F)
          horizontalLineToRelative(1.755F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveTo(17.664F, 11.0F, 17.25F, 11.0F)
          horizontalLineTo(15.0F)
          curveToRelative(-0.3F, 0.0F, -0.571F, -0.179F, -0.69F, -0.455F)
          lineToRelative(-0.703F, -1.642F)
          lineToRelative(-2.392F, 7.573F)
          curveToRelative(-0.1F, 0.316F, -0.396F, 0.53F, -0.727F, 0.524F)
          curveToRelative(-0.332F, -0.006F, -0.62F, -0.228F, -0.71F, -0.548F)
          lineTo(6.966F, 6.41F)
          lineToRelative(-1.25F, 4.06F)
          curveTo(5.62F, 10.786F, 5.33F, 11.0F, 5.0F, 11.0F)
          horizontalLineTo(2.75F)
          curveTo(2.336F, 11.0F, 2.0F, 10.664F, 2.0F, 10.25F)
          reflectiveCurveTo(2.336F, 9.5F, 2.75F, 9.5F)
          horizontalLineToRelative(1.696F)
          lineToRelative(1.837F, -5.97F)
          curveTo(6.381F, 3.21F, 6.677F, 2.995F, 7.01F, 3.0F)
          close()        
      }
    }
    return _pulse20!!
  }

private var _pulse20: ImageVector? = null
