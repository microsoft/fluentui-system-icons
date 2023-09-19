package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.VideoOff28: ImageVector
  get() {
    if (_videoOff28 != null) {
      return _videoOff28!!
    }
    _videoOff28 = fluentIcon(name = "Filled.VideoOff28", 28f) {
      materialPath {
          moveTo(3.28F, 2.22F)
          curveToRelative(-0.293F, -0.293F, -0.767F, -0.293F, -1.06F, 0.0F)
          curveToRelative(-0.293F, 0.293F, -0.293F, 0.767F, 0.0F, 1.06F)
          lineToRelative(2.3F, 2.302F)
          curveTo(3.077F, 5.912F, 2.0F, 7.205F, 2.0F, 8.75F)
          verticalLineToRelative(10.5F)
          curveToRelative(0.0F, 1.795F, 1.455F, 3.25F, 3.25F, 3.25F)
          horizontalLineToRelative(9.502F)
          curveToRelative(1.754F, 0.0F, 3.184F, -1.39F, 3.248F, -3.128F)
          verticalLineToRelative(-0.311F)
          lineToRelative(6.72F, 6.72F)
          curveToRelative(0.292F, 0.292F, 0.767F, 0.292F, 1.06F, 0.0F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.768F, 0.0F, -1.061F)
          lineTo(3.28F, 2.22F)
          close()
          moveTo(8.682F, 5.5F)
          lineTo(18.0F, 14.818F)
          verticalLineToRelative(-6.19F)
          curveTo(17.936F, 6.889F, 16.506F, 5.5F, 14.752F, 5.5F)
          horizontalLineToRelative(-6.07F)
          close()
          moveTo(19.5F, 16.318F)
          lineToRelative(4.665F, 4.666F)
          curveToRelative(0.575F, -0.082F, 1.083F, -0.557F, 1.083F, -1.24F)
          verticalLineTo(8.246F)
          curveToRelative(0.0F, -1.115F, -1.35F, -1.672F, -2.136F, -0.882F)
          lineTo(19.5F, 10.992F)
          verticalLineToRelative(5.326F)
          close()        
      }
    }
    return _videoOff28!!
  }

private var _videoOff28: ImageVector? = null
