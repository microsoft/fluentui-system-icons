package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.FlipHorizontal24: ImageVector
  get() {
    if (_flipHorizontal24 != null) {
      return _flipHorizontal24!!
    }
    _flipHorizontal24 = fluentIcon(name = "Regular.FlipHorizontal24", 24f) {
      materialPath {
          moveTo(21.88F, 19.656F)
          curveTo(21.744F, 19.871F, 21.506F, 20.0F, 21.25F, 20.0F)
          horizontalLineToRelative(-7.5F)
          curveTo(13.336F, 20.0F, 13.0F, 19.664F, 13.0F, 19.25F)
          verticalLineTo(2.75F)
          curveToRelative(0.0F, -0.353F, 0.246F, -0.658F, 0.591F, -0.733F)
          curveToRelative(0.345F, -0.075F, 0.696F, 0.101F, 0.842F, 0.423F)
          lineToRelative(7.5F, 16.5F)
          curveToRelative(0.105F, 0.232F, 0.086F, 0.502F, -0.052F, 0.716F)
          close()
          moveTo(14.5F, 6.213F)
          verticalLineTo(18.5F)
          horizontalLineToRelative(5.585F)
          lineTo(14.5F, 6.213F)
          close()
          moveTo(2.5F, 20.0F)
          curveToRelative(-0.171F, 0.0F, -0.33F, -0.087F, -0.422F, -0.232F)
          curveToRelative(-0.092F, -0.145F, -0.103F, -0.326F, -0.03F, -0.48F)
          lineToRelative(8.0F, -17.0F)
          curveToRelative(0.1F, -0.213F, 0.333F, -0.327F, 0.561F, -0.276F)
          curveTo(10.838F, 2.063F, 11.0F, 2.266F, 11.0F, 2.5F)
          verticalLineToRelative(17.0F)
          curveToRelative(0.0F, 0.276F, -0.224F, 0.5F, -0.5F, 0.5F)
          horizontalLineToRelative(-8.0F)
          close()        
      }
    }
    return _flipHorizontal24!!
  }

private var _flipHorizontal24: ImageVector? = null
