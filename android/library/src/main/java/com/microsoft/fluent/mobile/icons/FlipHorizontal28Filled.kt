package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.FlipHorizontal28: ImageVector
  get() {
    if (_flipHorizontal28 != null) {
      return _flipHorizontal28!!
    }
    _flipHorizontal28 = fluentIcon(name = "Filled.FlipHorizontal28", 28f) {
      materialPath {
          moveTo(25.84F, 23.543F)
          curveTo(25.656F, 23.828F, 25.34F, 24.0F, 25.0F, 24.0F)
          horizontalLineToRelative(-9.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineTo(3.0F)
          curveToRelative(0.0F, -0.471F, 0.33F, -0.879F, 0.79F, -0.978F)
          curveToRelative(0.461F, -0.099F, 0.928F, 0.138F, 1.122F, 0.568F)
          lineToRelative(9.0F, 20.0F)
          curveToRelative(0.14F, 0.31F, 0.112F, 0.668F, -0.072F, 0.953F)
          close()
          moveTo(17.0F, 7.66F)
          verticalLineTo(22.0F)
          horizontalLineToRelative(6.453F)
          lineTo(17.0F, 7.66F)
          close()
          moveTo(2.75F, 24.0F)
          curveToRelative(-0.256F, 0.0F, -0.494F, -0.13F, -0.632F, -0.346F)
          curveToRelative(-0.138F, -0.216F, -0.156F, -0.487F, -0.048F, -0.719F)
          lineToRelative(9.5F, -20.5F)
          curveToRelative(0.147F, -0.32F, 0.498F, -0.493F, 0.841F, -0.417F)
          curveTo(12.755F, 2.094F, 13.0F, 2.398F, 13.0F, 2.75F)
          verticalLineToRelative(20.5F)
          curveToRelative(0.0F, 0.415F, -0.336F, 0.75F, -0.75F, 0.75F)
          horizontalLineToRelative(-9.5F)
          close()        
      }
    }
    return _flipHorizontal28!!
  }

private var _flipHorizontal28: ImageVector? = null
