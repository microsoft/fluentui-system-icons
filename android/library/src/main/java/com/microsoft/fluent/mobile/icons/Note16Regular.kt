package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Note16: ImageVector
  get() {
    if (_note16 != null) {
      return _note16!!
    }
    _note16 = fluentIcon(name = "Regular.Note16", 16f) {
      materialPath {
          moveTo(4.5F, 2.0F)
          curveTo(3.12F, 2.0F, 2.0F, 3.12F, 2.0F, 4.5F)
          verticalLineToRelative(7.0F)
          curveTo(2.0F, 12.88F, 3.12F, 14.0F, 4.5F, 14.0F)
          horizontalLineToRelative(3.672F)
          curveToRelative(0.663F, 0.0F, 1.298F, -0.263F, 1.767F, -0.732F)
          lineToRelative(3.329F, -3.329F)
          curveTo(13.737F, 9.47F, 14.0F, 8.835F, 14.0F, 8.172F)
          verticalLineTo(4.5F)
          curveTo(14.0F, 3.12F, 12.88F, 2.0F, 11.5F, 2.0F)
          horizontalLineToRelative(-7.0F)
          close()
          moveTo(3.0F, 4.5F)
          curveTo(3.0F, 3.672F, 3.672F, 3.0F, 4.5F, 3.0F)
          horizontalLineToRelative(7.0F)
          curveTo(12.328F, 3.0F, 13.0F, 3.672F, 13.0F, 4.5F)
          verticalLineTo(8.0F)
          horizontalLineToRelative(-2.5F)
          curveTo(9.12F, 8.0F, 8.0F, 9.12F, 8.0F, 10.5F)
          verticalLineTo(13.0F)
          horizontalLineTo(4.5F)
          curveTo(3.672F, 13.0F, 3.0F, 12.328F, 3.0F, 11.5F)
          verticalLineToRelative(-7.0F)
          close()
          moveToRelative(6.0F, 8.25F)
          verticalLineTo(10.5F)
          curveTo(9.0F, 9.672F, 9.672F, 9.0F, 10.5F, 9.0F)
          horizontalLineToRelative(2.25F)
          curveToRelative(-0.055F, 0.083F, -0.118F, 0.16F, -0.19F, 0.232F)
          lineToRelative(-3.328F, 3.329F)
          curveTo(9.161F, 12.632F, 9.082F, 12.695F, 9.0F, 12.75F)
          close()        
      }
    }
    return _note16!!
  }

private var _note16: ImageVector? = null
