package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.VideoClip48: ImageVector
  get() {
    if (_videoClip48 != null) {
      return _videoClip48!!
    }
    _videoClip48 = fluentIcon(name = "Regular.VideoClip48", 48f) {
      materialPath {
          moveTo(10.25F, 8.0F)
          curveTo(6.798F, 8.0F, 4.0F, 10.798F, 4.0F, 14.25F)
          verticalLineToRelative(19.5F)
          curveTo(4.0F, 37.202F, 6.798F, 40.0F, 10.25F, 40.0F)
          horizontalLineToRelative(27.5F)
          curveToRelative(3.452F, 0.0F, 6.25F, -2.798F, 6.25F, -6.25F)
          verticalLineToRelative(-19.5F)
          curveTo(44.0F, 10.798F, 41.202F, 8.0F, 37.75F, 8.0F)
          horizontalLineToRelative(-27.5F)
          close()
          moveTo(6.5F, 14.25F)
          curveToRelative(0.0F, -2.071F, 1.679F, -3.75F, 3.75F, -3.75F)
          horizontalLineToRelative(27.5F)
          curveToRelative(2.071F, 0.0F, 3.75F, 1.679F, 3.75F, 3.75F)
          verticalLineToRelative(19.5F)
          curveToRelative(0.0F, 2.071F, -1.679F, 3.75F, -3.75F, 3.75F)
          horizontalLineToRelative(-27.5F)
          curveToRelative(-2.071F, 0.0F, -3.75F, -1.679F, -3.75F, -3.75F)
          verticalLineToRelative(-19.5F)
          close()
          moveTo(18.0F, 18.0F)
          verticalLineToRelative(12.0F)
          curveToRelative(0.0F, 1.139F, 1.219F, 1.862F, 2.218F, 1.317F)
          lineToRelative(11.0F, -6.0F)
          curveToRelative(1.042F, -0.569F, 1.042F, -2.065F, 0.0F, -2.634F)
          lineToRelative(-11.0F, -6.0F)
          curveTo(19.218F, 16.137F, 18.0F, 16.86F, 18.0F, 18.0F)
          close()        
      }
    }
    return _videoClip48!!
  }

private var _videoClip48: ImageVector? = null
