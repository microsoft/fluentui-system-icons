package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ThumbLike28: ImageVector
  get() {
    if (_thumbLike28 != null) {
      return _thumbLike28!!
    }
    _thumbLike28 = fluentIcon(name = "Filled.ThumbLike28", 28f) {
      materialPath {
          moveTo(16.124F, 1.115F)
          curveToRelative(-0.884F, -0.246F, -1.58F, 0.38F, -1.82F, 0.989F)
          lineToRelative(-0.26F, 0.66F)
          curveToRelative(-2.006F, 5.09F, -3.837F, 9.74F, -8.612F, 12.157F)
          curveToRelative(-1.101F, 0.558F, -1.868F, 1.765F, -1.648F, 3.086F)
          lineTo(4.2F, 20.503F)
          curveToRelative(0.238F, 1.428F, 1.277F, 2.592F, 2.669F, 2.99F)
          lineToRelative(7.69F, 2.196F)
          curveToRelative(3.783F, 1.081F, 7.685F, -1.29F, 8.469F, -5.146F)
          lineToRelative(1.228F, -6.046F)
          curveTo(24.728F, 12.173F, 22.952F, 10.0F, 20.58F, 10.0F)
          horizontalLineToRelative(-2.167F)
          curveToRelative(0.345F, -1.503F, 0.504F, -3.217F, 0.346F, -4.73F)
          curveToRelative(-0.184F, -1.77F, -0.858F, -3.659F, -2.636F, -4.154F)
          close()        
      }
    }
    return _thumbLike28!!
  }

private var _thumbLike28: ImageVector? = null
