package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.FlipHorizontal32: ImageVector
  get() {
    if (_flipHorizontal32 != null) {
      return _flipHorizontal32!!
    }
    _flipHorizontal32 = fluentIcon(name = "Filled.FlipHorizontal32", 32f) {
      materialPath {
          moveTo(29.799F, 27.43F)
          curveTo(29.569F, 27.786F, 29.174F, 28.0F, 28.75F, 28.0F)
          horizontalLineToRelative(-10.5F)
          curveTo(17.56F, 28.0F, 17.0F, 27.44F, 17.0F, 26.75F)
          verticalLineTo(3.25F)
          curveToRelative(0.0F, -0.59F, 0.412F, -1.1F, 0.99F, -1.222F)
          curveToRelative(0.576F, -0.123F, 1.16F, 0.174F, 1.401F, 0.712F)
          lineToRelative(10.5F, 23.5F)
          curveToRelative(0.173F, 0.387F, 0.138F, 0.835F, -0.092F, 1.19F)
          close()
          moveTo(19.5F, 9.112F)
          verticalLineTo(25.5F)
          horizontalLineToRelative(7.322F)
          lineTo(19.5F, 9.112F)
          close()
          moveTo(3.0F, 28.0F)
          curveToRelative(-0.34F, 0.0F, -0.658F, -0.173F, -0.842F, -0.46F)
          curveToRelative(-0.183F, -0.286F, -0.209F, -0.647F, -0.067F, -0.956F)
          lineToRelative(11.0F, -24.0F)
          curveToRelative(0.196F, -0.428F, 0.663F, -0.66F, 1.122F, -0.56F)
          curveTo(14.673F, 2.123F, 15.0F, 2.53F, 15.0F, 3.0F)
          verticalLineToRelative(24.0F)
          curveToRelative(0.0F, 0.553F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(3.0F)
          close()        
      }
    }
    return _flipHorizontal32!!
  }

private var _flipHorizontal32: ImageVector? = null
