package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.VideoClipMultiple16: ImageVector
  get() {
    if (_videoClipMultiple16 != null) {
      return _videoClipMultiple16!!
    }
    _videoClipMultiple16 = fluentIcon(name = "Filled.VideoClipMultiple16", 16f) {
      materialPath {
          moveTo(4.25F, 2.0F)
          curveTo(3.007F, 2.0F, 2.0F, 3.007F, 2.0F, 4.25F)
          verticalLineToRelative(5.5F)
          curveTo(2.0F, 10.993F, 3.007F, 12.0F, 4.25F, 12.0F)
          horizontalLineToRelative(6.5F)
          curveTo(11.993F, 12.0F, 13.0F, 10.993F, 13.0F, 9.75F)
          verticalLineToRelative(-5.5F)
          curveTo(13.0F, 3.007F, 11.993F, 2.0F, 10.75F, 2.0F)
          horizontalLineToRelative(-6.5F)
          close()
          moveTo(6.0F, 8.996F)
          verticalLineTo(5.004F)
          curveToRelative(0.0F, -0.4F, 0.446F, -0.637F, 0.778F, -0.416F)
          lineToRelative(2.997F, 1.996F)
          curveToRelative(0.297F, 0.198F, 0.297F, 0.635F, 0.0F, 0.833F)
          lineTo(6.777F, 9.412F)
          curveTo(6.445F, 9.634F, 6.0F, 9.396F, 6.0F, 8.996F)
          close()
          moveTo(6.0F, 14.0F)
          curveToRelative(-0.818F, 0.0F, -1.544F, -0.393F, -2.0F, -1.0F)
          horizontalLineToRelative(7.25F)
          curveToRelative(1.52F, 0.0F, 2.75F, -1.23F, 2.75F, -2.75F)
          verticalLineTo(4.0F)
          curveToRelative(0.607F, 0.456F, 1.0F, 1.182F, 1.0F, 2.0F)
          verticalLineToRelative(4.25F)
          curveToRelative(0.0F, 2.071F, -1.679F, 3.75F, -3.75F, 3.75F)
          horizontalLineTo(6.0F)
          close()        
      }
    }
    return _videoClipMultiple16!!
  }

private var _videoClipMultiple16: ImageVector? = null
