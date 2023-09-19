package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.SpeakerMute24: ImageVector
  get() {
    if (_speakerMute24 != null) {
      return _speakerMute24!!
    }
    _speakerMute24 = fluentIcon(name = "Filled.SpeakerMute24", 24f) {
      materialPath {
          moveTo(15.0F, 4.25F)
          curveToRelative(0.0F, -1.078F, -1.274F, -1.65F, -2.08F, -0.934F)
          lineTo(8.427F, 7.31F)
          curveTo(8.29F, 7.432F, 8.113F, 7.5F, 7.93F, 7.5F)
          horizontalLineTo(4.25F)
          curveTo(3.007F, 7.5F, 2.0F, 8.505F, 2.0F, 9.75F)
          verticalLineToRelative(4.497F)
          curveToRelative(0.0F, 1.243F, 1.007F, 2.25F, 2.25F, 2.25F)
          horizontalLineToRelative(3.68F)
          curveToRelative(0.183F, 0.0F, 0.36F, 0.067F, 0.498F, 0.19F)
          lineToRelative(4.491F, 3.993F)
          curveTo(13.725F, 21.397F, 15.0F, 20.825F, 15.0F, 19.746F)
          verticalLineTo(4.251F)
          close()
          moveToRelative(1.22F, 4.97F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          lineTo(19.0F, 10.94F)
          lineToRelative(1.72F, -1.72F)
          curveToRelative(0.293F, -0.293F, 0.767F, -0.293F, 1.06F, 0.0F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.768F, 0.0F, 1.06F)
          lineTo(20.06F, 12.0F)
          lineToRelative(1.72F, 1.72F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.768F, 0.0F, 1.06F)
          curveToRelative(-0.293F, 0.294F, -0.767F, 0.294F, -1.06F, 0.0F)
          lineTo(19.0F, 13.062F)
          lineToRelative(-1.72F, 1.72F)
          curveToRelative(-0.293F, 0.293F, -0.767F, 0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.768F, 0.0F, -1.06F)
          lineTo(17.94F, 12.0F)
          lineToRelative(-1.72F, -1.72F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.768F, 0.0F, -1.06F)
          close()        
      }
    }
    return _speakerMute24!!
  }

private var _speakerMute24: ImageVector? = null
