package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.VideoClipMultiple20: ImageVector
  get() {
    if (_videoClipMultiple20 != null) {
      return _videoClipMultiple20!!
    }
    _videoClipMultiple20 = fluentIcon(name = "Filled.VideoClipMultiple20", 20f) {
      materialPath {
          moveTo(4.5F, 3.0F)
          curveTo(3.12F, 3.0F, 2.0F, 4.12F, 2.0F, 5.5F)
          verticalLineToRelative(7.0F)
          curveTo(2.0F, 13.88F, 3.12F, 15.0F, 4.5F, 15.0F)
          horizontalLineToRelative(9.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineToRelative(-7.0F)
          curveTo(16.0F, 4.12F, 14.88F, 3.0F, 13.5F, 3.0F)
          horizontalLineToRelative(-9.0F)
          close()
          moveTo(7.0F, 6.756F)
          curveToRelative(0.0F, -0.602F, 0.673F, -0.959F, 1.171F, -0.62F)
          lineToRelative(3.61F, 2.451F)
          curveToRelative(0.293F, 0.198F, 0.293F, 0.629F, 0.001F, 0.827F)
          lineToRelative(-3.61F, 2.458F)
          curveTo(7.674F, 12.211F, 7.0F, 11.854F, 7.0F, 11.252F)
          verticalLineTo(6.756F)
          close()
          moveTo(6.5F, 17.0F)
          curveToRelative(-0.818F, 0.0F, -1.544F, -0.393F, -2.0F, -1.0F)
          horizontalLineTo(14.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, -1.343F, 3.0F, -3.0F)
          verticalLineTo(5.5F)
          curveToRelative(0.607F, 0.456F, 1.0F, 1.182F, 1.0F, 2.0F)
          verticalLineTo(13.0F)
          curveToRelative(0.0F, 2.21F, -1.79F, 4.0F, -4.0F, 4.0F)
          horizontalLineTo(6.5F)
          close()        
      }
    }
    return _videoClipMultiple20!!
  }

private var _videoClipMultiple20: ImageVector? = null
