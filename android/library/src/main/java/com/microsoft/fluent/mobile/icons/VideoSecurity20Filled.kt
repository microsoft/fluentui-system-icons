package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.VideoSecurity20: ImageVector
  get() {
    if (_videoSecurity20 != null) {
      return _videoSecurity20!!
    }
    _videoSecurity20 = fluentIcon(name = "Filled.VideoSecurity20", 20f) {
      materialPath {
          moveTo(2.0F, 5.0F)
          curveToRelative(0.0F, -1.105F, 0.895F, -2.0F, 2.0F, -2.0F)
          horizontalLineToRelative(8.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          horizontalLineTo(4.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, -0.895F, -2.0F, -2.0F)
          verticalLineTo(5.0F)
          close()
          moveToRelative(13.0F, 5.664F)
          verticalLineTo(5.332F)
          lineToRelative(2.255F, -1.27F)
          curveToRelative(0.155F, -0.087F, 0.344F, -0.085F, 0.497F, 0.005F)
          curveTo(17.906F, 4.157F, 18.0F, 4.32F, 18.0F, 4.498F)
          verticalLineTo(11.5F)
          curveToRelative(0.0F, 0.178F, -0.094F, 0.342F, -0.248F, 0.432F)
          curveToRelative(-0.153F, 0.09F, -0.343F, 0.09F, -0.498F, 0.003F)
          lineTo(15.0F, 10.665F)
          close()
          moveTo(7.0F, 13.75F)
          horizontalLineToRelative(3.0F)
          verticalLineToRelative(0.5F)
          curveTo(10.0F, 16.321F, 8.321F, 18.0F, 6.25F, 18.0F)
          horizontalLineTo(3.5F)
          curveTo(3.224F, 18.0F, 3.0F, 17.776F, 3.0F, 17.5F)
          verticalLineToRelative(-1.75F)
          curveToRelative(0.0F, -0.276F, 0.224F, -0.5F, 0.5F, -0.5F)
          horizontalLineToRelative(2.75F)
          curveTo(6.664F, 15.25F, 7.0F, 14.914F, 7.0F, 14.5F)
          verticalLineToRelative(-0.75F)
          close()        
      }
    }
    return _videoSecurity20!!
  }

private var _videoSecurity20: ImageVector? = null
