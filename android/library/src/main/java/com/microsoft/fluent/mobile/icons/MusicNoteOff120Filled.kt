package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.MusicNoteOff120: ImageVector
  get() {
    if (_musicNoteOff120 != null) {
      return _musicNoteOff120!!
    }
    _musicNoteOff120 = fluentIcon(name = "Filled.MusicNoteOff120", 120f) {
      materialPath {
          moveTo(2.853F, 2.147F)
          curveToRelative(-0.195F, -0.196F, -0.511F, -0.196F, -0.707F, 0.0F)
          curveToRelative(-0.195F, 0.195F, -0.195F, 0.511F, 0.0F, 0.707F)
          lineTo(9.5F, 10.207F)
          verticalLineToRelative(2.198F)
          curveTo(8.916F, 11.845F, 8.123F, 11.5F, 7.25F, 11.5F)
          curveTo(5.455F, 11.5F, 4.0F, 12.955F, 4.0F, 14.75F)
          reflectiveCurveTo(5.455F, 18.0F, 7.25F, 18.0F)
          reflectiveCurveToRelative(3.25F, -1.455F, 3.25F, -3.25F)
          curveToRelative(0.0F, -0.06F, -0.002F, -0.12F, -0.005F, -0.18F)
          curveToRelative(0.003F, -0.023F, 0.005F, -0.046F, 0.005F, -0.07F)
          verticalLineToRelative(-3.293F)
          lineToRelative(6.646F, 6.647F)
          curveToRelative(0.196F, 0.195F, 0.512F, 0.195F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.196F, 0.195F, -0.512F, 0.0F, -0.708F)
          lineToRelative(-15.0F, -15.0F)
          close()
          moveToRelative(7.647F, 5.03F)
          verticalLineToRelative(1.202F)
          lineToRelative(-1.0F, -1.0F)
          verticalLineTo(2.5F)
          curveToRelative(0.0F, -0.159F, 0.075F, -0.308F, 0.203F, -0.402F)
          curveToRelative(0.128F, -0.095F, 0.292F, -0.122F, 0.444F, -0.076F)
          lineToRelative(5.088F, 1.566F)
          curveTo(16.285F, 3.91F, 17.0F, 4.88F, 17.0F, 5.978F)
          verticalLineTo(8.5F)
          curveToRelative(0.0F, 0.159F, -0.075F, 0.308F, -0.203F, 0.402F)
          curveToRelative(-0.128F, 0.095F, -0.292F, 0.123F, -0.444F, 0.076F)
          lineTo(10.5F, 7.177F)
          close()        
      }
    }
    return _musicNoteOff120!!
  }

private var _musicNoteOff120: ImageVector? = null
