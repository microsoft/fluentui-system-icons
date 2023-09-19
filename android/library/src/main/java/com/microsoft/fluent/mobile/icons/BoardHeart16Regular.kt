package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.BoardHeart16: ImageVector
  get() {
    if (_boardHeart16 != null) {
      return _boardHeart16!!
    }
    _boardHeart16 = fluentIcon(name = "Regular.BoardHeart16", 16f) {
      materialPath {
          moveTo(2.0F, 4.5F)
          curveTo(2.0F, 3.12F, 3.12F, 2.0F, 4.5F, 2.0F)
          horizontalLineToRelative(7.0F)
          curveTo(12.88F, 2.0F, 14.0F, 3.12F, 14.0F, 4.5F)
          verticalLineToRelative(1.862F)
          curveToRelative(-0.319F, -0.156F, -0.656F, -0.262F, -1.0F, -0.317F)
          verticalLineTo(4.5F)
          curveTo(13.0F, 3.672F, 12.328F, 3.0F, 11.5F, 3.0F)
          horizontalLineToRelative(-3.0F)
          verticalLineToRelative(3.0F)
          curveToRelative(-0.338F, 0.007F, -0.675F, 0.06F, -1.0F, 0.163F)
          verticalLineTo(6.0F)
          horizontalLineTo(3.0F)
          verticalLineToRelative(5.5F)
          curveTo(3.0F, 12.328F, 3.672F, 13.0F, 4.5F, 13.0F)
          horizontalLineToRelative(2.42F)
          lineToRelative(0.992F, 1.0F)
          horizontalLineTo(4.5F)
          curveTo(3.12F, 14.0F, 2.0F, 12.88F, 2.0F, 11.5F)
          verticalLineToRelative(-7.0F)
          close()
          moveTo(4.5F, 3.0F)
          curveTo(3.672F, 3.0F, 3.0F, 3.672F, 3.0F, 4.5F)
          verticalLineTo(5.0F)
          horizontalLineToRelative(4.5F)
          verticalLineTo(3.0F)
          horizontalLineToRelative(-3.0F)
          close()
          moveTo(13.0F, 7.063F)
          curveToRelative(0.356F, 0.08F, 0.698F, 0.238F, 1.0F, 0.473F)
          curveToRelative(0.086F, 0.067F, 0.17F, 0.14F, 0.249F, 0.22F)
          curveToRelative(1.001F, 1.01F, 1.001F, 2.646F, 0.0F, 3.654F)
          lineToRelative(-3.431F, 3.457F)
          curveToRelative(-0.176F, 0.177F, -0.46F, 0.177F, -0.636F, 0.0F)
          lineTo(6.75F, 11.41F)
          curveToRelative(-1.001F, -1.008F, -1.001F, -2.644F, 0.0F, -3.653F)
          curveToRelative(0.223F, -0.225F, 0.478F, -0.4F, 0.749F, -0.525F)
          curveToRelative(0.317F, -0.146F, 0.658F, -0.223F, 1.0F, -0.231F)
          curveToRelative(0.678F, -0.017F, 1.36F, 0.235F, 1.877F, 0.756F)
          lineTo(10.5F, 7.88F)
          lineToRelative(0.123F, -0.123F)
          curveTo(11.268F, 7.107F, 12.17F, 6.876F, 13.0F, 7.063F)
          close()        
      }
    }
    return _boardHeart16!!
  }

private var _boardHeart16: ImageVector? = null
