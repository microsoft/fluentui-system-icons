package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DocumentHeart20: ImageVector
  get() {
    if (_documentHeart20 != null) {
      return _documentHeart20!!
    }
    _documentHeart20 = fluentIcon(name = "Filled.DocumentHeart20", 20f) {
      materialPath {
          moveTo(10.0F, 6.5F)
          verticalLineTo(2.0F)
          horizontalLineTo(5.5F)
          curveTo(4.672F, 2.0F, 4.0F, 2.672F, 4.0F, 3.5F)
          verticalLineToRelative(5.503F)
          curveTo(4.702F, 9.03F, 5.398F, 9.248F, 6.003F, 9.657F)
          curveToRelative(1.498F, -1.012F, 3.55F, -0.855F, 4.875F, 0.47F)
          curveToRelative(1.504F, 1.505F, 1.504F, 3.942F, 0.0F, 5.446F)
          lineTo(8.45F, 18.0F)
          horizontalLineToRelative(6.05F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineTo(8.0F)
          horizontalLineToRelative(-4.5F)
          curveTo(10.671F, 8.0F, 10.0F, 7.328F, 10.0F, 6.5F)
          close()
          moveToRelative(1.0F, 0.0F)
          verticalLineTo(2.25F)
          lineTo(15.75F, 7.0F)
          horizontalLineTo(11.5F)
          curveTo(11.225F, 7.0F, 11.0F, 6.776F, 11.0F, 6.5F)
          close()
          moveToRelative(-4.863F, 4.335F)
          curveToRelative(1.113F, -1.113F, 2.918F, -1.113F, 4.031F, 0.0F)
          curveToRelative(1.113F, 1.113F, 1.113F, 2.918F, 0.0F, 4.031F)
          lineTo(6.354F, 18.68F)
          curveToRelative(-0.195F, 0.195F, -0.512F, 0.195F, -0.707F, 0.0F)
          lineToRelative(-3.814F, -3.814F)
          curveToRelative(-1.113F, -1.113F, -1.113F, -2.918F, 0.0F, -4.031F)
          curveToRelative(1.113F, -1.113F, 2.918F, -1.113F, 4.031F, 0.0F)
          lineToRelative(0.137F, 0.136F)
          lineToRelative(0.136F, -0.136F)
          close()
          moveToRelative(4.031F, 4.031F)
          lineToRelative(-0.353F, -0.353F)
          close()        
      }
    }
    return _documentHeart20!!
  }

private var _documentHeart20: ImageVector? = null
