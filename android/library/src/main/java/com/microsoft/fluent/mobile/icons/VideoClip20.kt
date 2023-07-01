package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.VideoClip20: ImageVector
  get() {
    if (_videoClip20 != null) {
      return _videoClip20!!
    }
    _videoClip20 = fluentIcon(name = "Filled.VideoClip20", 20f) {
      materialPath {
          moveTo(4.5F, 3.0F)
          curveTo(3.12F, 3.0F, 2.0F, 4.12F, 2.0F, 5.5F)
          verticalLineToRelative(9.0F)
          curveTo(2.0F, 15.88F, 3.12F, 17.0F, 4.5F, 17.0F)
          horizontalLineToRelative(11.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineToRelative(-9.0F)
          curveTo(18.0F, 4.12F, 16.88F, 3.0F, 15.5F, 3.0F)
          horizontalLineToRelative(-11.0F)
          close()
          moveToRelative(4.265F, 4.076F)
          lineToRelative(4.0F, 2.502F)
          curveTo(12.91F, 9.668F, 12.998F, 9.825F, 13.0F, 9.995F)
          curveToRelative(0.002F, 0.17F, -0.082F, 0.33F, -0.224F, 0.424F)
          lineToRelative(-4.0F, 2.648F)
          curveToRelative(-0.153F, 0.101F, -0.35F, 0.11F, -0.513F, 0.024F)
          curveTo(8.101F, 13.003F, 8.0F, 12.834F, 8.0F, 12.65F)
          verticalLineTo(7.5F)
          curveToRelative(0.0F, -0.182F, 0.099F, -0.35F, 0.258F, -0.437F)
          curveTo(8.417F, 6.975F, 8.61F, 6.98F, 8.765F, 7.076F)
          close()        
      }
    }
    return _videoClip20!!
  }

private var _videoClip20: ImageVector? = null
