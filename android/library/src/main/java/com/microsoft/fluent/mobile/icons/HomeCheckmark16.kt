package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.HomeCheckmark16: ImageVector
  get() {
    if (_homeCheckmark16 != null) {
      return _homeCheckmark16!!
    }
    _homeCheckmark16 = fluentIcon(name = "Regular.HomeCheckmark16", 16f) {
      materialPath {
          moveTo(7.313F, 1.273F)
          curveToRelative(0.386F, -0.364F, 0.989F, -0.364F, 1.374F, 0.0F)
          lineToRelative(4.844F, 4.575F)
          curveTo(13.83F, 6.131F, 14.0F, 6.525F, 14.0F, 6.938F)
          verticalLineTo(12.5F)
          curveToRelative(0.0F, 0.83F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-9.0F)
          curveTo(2.672F, 14.0F, 2.0F, 13.329F, 2.0F, 12.501F)
          verticalLineTo(6.937F)
          curveToRelative(0.0F, -0.412F, 0.17F, -0.806F, 0.47F, -1.089F)
          lineToRelative(4.843F, -4.575F)
          close()
          moveToRelative(5.53F, 5.301F)
          lineTo(8.0F, 2.0F)
          lineTo(3.156F, 6.574F)
          curveTo(3.056F, 6.67F, 3.0F, 6.8F, 3.0F, 6.937F)
          verticalLineToRelative(5.564F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineToRelative(9.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineTo(6.937F)
          curveToRelative(0.0F, -0.137F, -0.057F, -0.268F, -0.156F, -0.363F)
          close()
          moveToRelative(-1.99F, 0.08F)
          curveToRelative(0.196F, 0.195F, 0.196F, 0.511F, 0.0F, 0.706F)
          lineToRelative(-3.5F, 3.497F)
          curveToRelative(-0.195F, 0.195F, -0.511F, 0.195F, -0.707F, 0.0F)
          lineToRelative(-1.5F, -1.499F)
          curveToRelative(-0.195F, -0.195F, -0.195F, -0.511F, 0.0F, -0.706F)
          curveToRelative(0.196F, -0.195F, 0.512F, -0.195F, 0.708F, 0.0F)
          lineTo(7.0F, 9.797F)
          lineToRelative(3.146F, -3.143F)
          curveToRelative(0.196F, -0.196F, 0.512F, -0.196F, 0.708F, 0.0F)
          close()        
      }
    }
    return _homeCheckmark16!!
  }

private var _homeCheckmark16: ImageVector? = null
