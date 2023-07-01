package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.FlipVertical24: ImageVector
  get() {
    if (_flipVertical24 != null) {
      return _flipVertical24!!
    }
    _flipVertical24 = fluentIcon(name = "Regular.FlipVertical24", 24f) {
      materialPath {
          moveTo(19.656F, 2.12F)
          curveTo(19.871F, 2.256F, 20.0F, 2.494F, 20.0F, 2.75F)
          verticalLineToRelative(7.5F)
          curveToRelative(0.0F, 0.414F, -0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineTo(2.75F)
          curveToRelative(-0.353F, 0.0F, -0.658F, -0.246F, -0.733F, -0.591F)
          curveToRelative(-0.075F, -0.345F, 0.101F, -0.696F, 0.423F, -0.842F)
          lineToRelative(16.5F, -7.5F)
          curveToRelative(0.232F, -0.105F, 0.502F, -0.086F, 0.716F, 0.052F)
          close()
          moveTo(6.213F, 9.5F)
          horizontalLineTo(18.5F)
          verticalLineTo(3.915F)
          lineTo(6.213F, 9.5F)
          close()
          moveTo(20.0F, 21.5F)
          curveToRelative(0.0F, 0.171F, -0.087F, 0.33F, -0.232F, 0.422F)
          curveToRelative(-0.145F, 0.092F, -0.326F, 0.103F, -0.48F, 0.03F)
          lineToRelative(-17.0F, -8.0F)
          curveToRelative(-0.213F, -0.1F, -0.327F, -0.333F, -0.276F, -0.561F)
          curveTo(2.063F, 13.162F, 2.266F, 13.0F, 2.5F, 13.0F)
          horizontalLineToRelative(17.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          verticalLineToRelative(8.0F)
          close()        
      }
    }
    return _flipVertical24!!
  }

private var _flipVertical24: ImageVector? = null
