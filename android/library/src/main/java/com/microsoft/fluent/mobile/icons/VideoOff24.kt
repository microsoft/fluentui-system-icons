package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.VideoOff24: ImageVector
  get() {
    if (_videoOff24 != null) {
      return _videoOff24!!
    }
    _videoOff24 = fluentIcon(name = "Filled.VideoOff24", 24f) {
      materialPath {
          moveTo(3.28F, 2.22F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(1.567F, 1.567F)
          curveTo(2.727F, 5.383F, 2.0F, 6.481F, 2.0F, 7.75F)
          verticalLineToRelative(8.5F)
          curveToRelative(0.0F, 1.795F, 1.455F, 3.25F, 3.25F, 3.25F)
          horizontalLineToRelative(7.5F)
          curveToRelative(1.544F, 0.0F, 2.837F, -1.077F, 3.168F, -2.521F)
          lineToRelative(4.801F, 4.802F)
          curveToRelative(0.293F, 0.292F, 0.768F, 0.292F, 1.061F, 0.0F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.768F, 0.0F, -1.061F)
          lineTo(3.28F, 2.22F)
          close()
          moveTo(17.0F, 13.818F)
          lineToRelative(4.504F, 4.505F)
          curveTo(21.801F, 18.149F, 22.0F, 17.827F, 22.0F, 17.459F)
          verticalLineTo(6.54F)
          curveToRelative(0.0F, -0.237F, -0.084F, -0.467F, -0.238F, -0.648F)
          curveToRelative(-0.358F, -0.42F, -0.989F, -0.472F, -1.41F, -0.114F)
          lineTo(17.0F, 8.628F)
          verticalLineToRelative(5.19F)
          close()
          moveTo(7.682F, 4.5F)
          lineTo(16.0F, 12.818F)
          verticalLineTo(7.75F)
          curveToRelative(0.0F, -1.795F, -1.455F, -3.25F, -3.25F, -3.25F)
          horizontalLineTo(7.682F)
          close()        
      }
    }
    return _videoOff24!!
  }

private var _videoOff24: ImageVector? = null
