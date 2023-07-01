package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PlayingCards20: ImageVector
  get() {
    if (_playingCards20 != null) {
      return _playingCards20!!
    }
    _playingCards20 = fluentIcon(name = "Filled.PlayingCards20", 20f) {
      materialPath {
          moveTo(5.068F, 13.01F)
          curveToRelative(-0.285F, 1.066F, 0.35F, 2.164F, 1.416F, 2.451F)
          lineToRelative(5.46F, 1.47F)
          curveToRelative(1.067F, 0.287F, 2.163F, -0.346F, 2.447F, -1.413F)
          lineToRelative(2.54F, -9.523F)
          curveToRelative(0.285F, -1.067F, -0.348F, -2.165F, -1.415F, -2.452F)
          lineToRelative(-5.46F, -1.47F)
          curveTo(8.989F, 1.788F, 7.893F, 2.42F, 7.609F, 3.487F)
          lineToRelative(-2.54F, 9.523F)
          close()
          moveTo(5.0F, 4.001F)
          verticalLineToRelative(5.382F)
          lineToRelative(1.772F, -6.64F)
          curveToRelative(0.072F, -0.272F, 0.186F, -0.52F, 0.334F, -0.742F)
          horizontalLineTo(7.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, 0.895F, -2.0F, 2.0F)
          close()
          moveTo(2.67F, 5.506F)
          lineTo(4.0F, 10.469F)
          verticalLineTo(4.002F)
          curveToRelative(0.0F, -0.338F, 0.056F, -0.663F, 0.16F, -0.965F)
          lineToRelative(-0.075F, 0.02F)
          curveToRelative(-1.066F, 0.285F, -1.7F, 1.382F, -1.414F, 2.449F)
          close()
          moveTo(13.0F, 6.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          reflectiveCurveToRelative(-1.0F, -0.448F, -1.0F, -1.0F)
          reflectiveCurveToRelative(0.448F, -1.0F, 1.0F, -1.0F)
          reflectiveCurveToRelative(1.0F, 0.448F, 1.0F, 1.0F)
          close()
          moveToRelative(-3.0F, 8.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          reflectiveCurveToRelative(0.448F, -1.0F, 1.0F, -1.0F)
          reflectiveCurveToRelative(1.0F, 0.448F, 1.0F, 1.0F)
          reflectiveCurveToRelative(-0.448F, 1.0F, -1.0F, 1.0F)
          close()        
      }
    }
    return _playingCards20!!
  }

private var _playingCards20: ImageVector? = null
