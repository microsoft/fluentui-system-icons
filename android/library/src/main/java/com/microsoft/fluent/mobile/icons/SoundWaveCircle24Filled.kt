package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.SoundWaveCircle24: ImageVector
  get() {
    if (_soundWaveCircle24 != null) {
      return _soundWaveCircle24!!
    }
    _soundWaveCircle24 = fluentIcon(name = "Filled.SoundWaveCircle24", 24f) {
      materialPath {
          moveTo(12.0F, 2.0F)
          curveTo(6.477F, 2.0F, 2.0F, 6.477F, 2.0F, 12.0F)
          reflectiveCurveToRelative(4.477F, 10.0F, 10.0F, 10.0F)
          reflectiveCurveToRelative(10.0F, -4.477F, 10.0F, -10.0F)
          reflectiveCurveTo(17.523F, 2.0F, 12.0F, 2.0F)
          close()
          moveToRelative(-1.0F, 6.75F)
          verticalLineToRelative(6.5F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveTo(9.5F, 15.664F, 9.5F, 15.25F)
          verticalLineToRelative(-6.5F)
          curveTo(9.5F, 8.336F, 9.836F, 8.0F, 10.25F, 8.0F)
          reflectiveCurveTo(11.0F, 8.336F, 11.0F, 8.75F)
          close()
          moveToRelative(6.0F, 0.0F)
          verticalLineToRelative(6.5F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveToRelative(-0.75F, -0.336F, -0.75F, -0.75F)
          verticalLineToRelative(-6.5F)
          curveTo(15.5F, 8.336F, 15.836F, 8.0F, 16.25F, 8.0F)
          reflectiveCurveTo(17.0F, 8.336F, 17.0F, 8.75F)
          close()
          moveToRelative(-3.0F, 1.5F)
          verticalLineToRelative(3.5F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          reflectiveCurveToRelative(-0.75F, -0.336F, -0.75F, -0.75F)
          verticalLineToRelative(-3.5F)
          curveToRelative(0.0F, -0.414F, 0.336F, -0.75F, 0.75F, -0.75F)
          reflectiveCurveTo(14.0F, 9.836F, 14.0F, 10.25F)
          close()
          moveToRelative(-6.0F, 0.5F)
          verticalLineToRelative(2.5F)
          curveTo(8.0F, 13.664F, 7.664F, 14.0F, 7.25F, 14.0F)
          reflectiveCurveTo(6.5F, 13.664F, 6.5F, 13.25F)
          verticalLineToRelative(-2.5F)
          curveTo(6.5F, 10.336F, 6.836F, 10.0F, 7.25F, 10.0F)
          reflectiveCurveTo(8.0F, 10.336F, 8.0F, 10.75F)
          close()        
      }
    }
    return _soundWaveCircle24!!
  }

private var _soundWaveCircle24: ImageVector? = null
