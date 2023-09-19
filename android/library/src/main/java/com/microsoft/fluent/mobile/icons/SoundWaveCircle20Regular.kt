package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.SoundWaveCircle20: ImageVector
  get() {
    if (_soundWaveCircle20 != null) {
      return _soundWaveCircle20!!
    }
    _soundWaveCircle20 = fluentIcon(name = "Regular.SoundWaveCircle20", 20f) {
      materialPath {
          moveTo(9.0F, 7.5F)
          curveTo(9.0F, 7.224F, 8.776F, 7.0F, 8.5F, 7.0F)
          reflectiveCurveTo(8.0F, 7.224F, 8.0F, 7.5F)
          verticalLineToRelative(5.0F)
          curveTo(8.0F, 12.776F, 8.224F, 13.0F, 8.5F, 13.0F)
          reflectiveCurveTo(9.0F, 12.776F, 9.0F, 12.5F)
          verticalLineToRelative(-5.0F)
          close()
          moveTo(6.0F, 8.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          verticalLineToRelative(2.0F)
          curveTo(6.5F, 10.776F, 6.276F, 11.0F, 6.0F, 11.0F)
          reflectiveCurveToRelative(-0.5F, -0.224F, -0.5F, -0.5F)
          verticalLineToRelative(-2.0F)
          curveTo(5.5F, 8.224F, 5.724F, 8.0F, 6.0F, 8.0F)
          close()
          moveToRelative(5.0F, 0.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          verticalLineToRelative(2.0F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          reflectiveCurveToRelative(-0.5F, -0.224F, -0.5F, -0.5F)
          verticalLineToRelative(-2.0F)
          curveTo(10.5F, 8.224F, 10.724F, 8.0F, 11.0F, 8.0F)
          close()
          moveToRelative(2.5F, -1.0F)
          curveTo(13.776F, 7.0F, 14.0F, 7.224F, 14.0F, 7.5F)
          verticalLineToRelative(5.0F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          reflectiveCurveTo(13.0F, 12.776F, 13.0F, 12.5F)
          verticalLineToRelative(-5.0F)
          curveTo(13.0F, 7.224F, 13.224F, 7.0F, 13.5F, 7.0F)
          close()
          moveTo(10.0F, 2.0F)
          curveToRelative(-4.418F, 0.0F, -8.0F, 3.582F, -8.0F, 8.0F)
          reflectiveCurveToRelative(3.582F, 8.0F, 8.0F, 8.0F)
          reflectiveCurveToRelative(8.0F, -3.582F, 8.0F, -8.0F)
          reflectiveCurveToRelative(-3.582F, -8.0F, -8.0F, -8.0F)
          close()
          moveToRelative(-7.0F, 8.0F)
          curveToRelative(0.0F, -3.866F, 3.134F, -7.0F, 7.0F, -7.0F)
          reflectiveCurveToRelative(7.0F, 3.134F, 7.0F, 7.0F)
          reflectiveCurveToRelative(-3.134F, 7.0F, -7.0F, 7.0F)
          reflectiveCurveToRelative(-7.0F, -3.134F, -7.0F, -7.0F)
          close()        
      }
    }
    return _soundWaveCircle20!!
  }

private var _soundWaveCircle20: ImageVector? = null
