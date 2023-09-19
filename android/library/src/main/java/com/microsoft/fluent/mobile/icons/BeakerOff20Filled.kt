package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.BeakerOff20: ImageVector
  get() {
    if (_beakerOff20 != null) {
      return _beakerOff20!!
    }
    _beakerOff20 = fluentIcon(name = "Filled.BeakerOff20", 20f) {
      materialPath {
          moveTo(2.853F, 2.147F)
          curveToRelative(-0.195F, -0.196F, -0.511F, -0.196F, -0.707F, 0.0F)
          curveToRelative(-0.195F, 0.195F, -0.195F, 0.511F, 0.0F, 0.707F)
          lineTo(7.25F, 7.957F)
          verticalLineToRelative(0.79F)
          curveToRelative(0.0F, 0.412F, -0.102F, 0.818F, -0.296F, 1.18F)
          lineTo(6.11F, 11.5F)
          horizontalLineToRelative(4.682F)
          lineToRelative(1.0F, 1.0F)
          horizontalLineTo(5.576F)
          lineToRelative(-1.228F, 2.292F)
          curveTo(3.813F, 15.79F, 4.536F, 17.0F, 5.67F, 17.0F)
          horizontalLineToRelative(8.66F)
          curveToRelative(0.552F, 0.0F, 1.007F, -0.287F, 1.266F, -0.697F)
          lineToRelative(1.55F, 1.55F)
          curveToRelative(0.196F, 0.196F, 0.512F, 0.196F, 0.708F, 0.0F)
          curveToRelative(0.195F, -0.195F, 0.195F, -0.511F, 0.0F, -0.707F)
          lineToRelative(-15.0F, -15.0F)
          close()
          moveTo(7.25F, 5.129F)
          lineToRelative(6.37F, 6.371F)
          horizontalLineToRelative(0.268F)
          lineToRelative(-0.843F, -1.572F)
          curveToRelative(-0.194F, -0.364F, -0.296F, -0.769F, -0.296F, -1.181F)
          verticalLineTo(4.0F)
          horizontalLineToRelative(0.75F)
          curveTo(13.776F, 4.0F, 14.0F, 3.776F, 14.0F, 3.5F)
          reflectiveCurveTo(13.776F, 3.0F, 13.5F, 3.0F)
          horizontalLineToRelative(-7.0F)
          curveTo(6.224F, 3.0F, 6.0F, 3.224F, 6.0F, 3.5F)
          reflectiveCurveTo(6.224F, 4.0F, 6.5F, 4.0F)
          horizontalLineToRelative(0.75F)
          verticalLineToRelative(1.129F)
          close()        
      }
    }
    return _beakerOff20!!
  }

private var _beakerOff20: ImageVector? = null
