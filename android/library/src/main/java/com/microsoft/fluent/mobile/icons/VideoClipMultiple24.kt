package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.VideoClipMultiple24: ImageVector
  get() {
    if (_videoClipMultiple24 != null) {
      return _videoClipMultiple24!!
    }
    _videoClipMultiple24 = fluentIcon(name = "Filled.VideoClipMultiple24", 24f) {
      materialPath {
          moveTo(5.25F, 3.0F)
          curveTo(3.455F, 3.0F, 2.0F, 4.455F, 2.0F, 6.25F)
          verticalLineToRelative(9.0F)
          curveToRelative(0.0F, 1.795F, 1.455F, 3.25F, 3.25F, 3.25F)
          horizontalLineToRelative(10.5F)
          curveToRelative(1.795F, 0.0F, 3.25F, -1.455F, 3.25F, -3.25F)
          verticalLineToRelative(-9.0F)
          curveTo(19.0F, 4.455F, 17.545F, 3.0F, 15.75F, 3.0F)
          horizontalLineTo(5.25F)
          close()
          moveTo(8.0F, 13.25F)
          verticalLineTo(7.751F)
          curveToRelative(0.0F, -0.591F, 0.655F, -0.95F, 1.155F, -0.63F)
          lineToRelative(4.618F, 2.959F)
          curveToRelative(0.307F, 0.196F, 0.307F, 0.645F, 0.0F, 0.842F)
          lineTo(9.155F, 13.88F)
          curveTo(8.655F, 14.2F, 8.0F, 13.842F, 8.0F, 13.249F)
          close()
          moveTo(7.75F, 21.0F)
          curveToRelative(-1.15F, 0.0F, -2.162F, -0.598F, -2.74F, -1.5F)
          horizontalLineToRelative(11.24F)
          curveToRelative(2.07F, 0.0F, 3.75F, -1.679F, 3.75F, -3.75F)
          verticalLineTo(6.01F)
          curveToRelative(0.902F, 0.578F, 1.5F, 1.59F, 1.5F, 2.74F)
          verticalLineToRelative(7.0F)
          curveToRelative(0.0F, 2.9F, -2.35F, 5.25F, -5.25F, 5.25F)
          horizontalLineToRelative(-8.5F)
          close()        
      }
    }
    return _videoClipMultiple24!!
  }

private var _videoClipMultiple24: ImageVector? = null
