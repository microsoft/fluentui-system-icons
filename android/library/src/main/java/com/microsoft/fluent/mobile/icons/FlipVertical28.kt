package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.FlipVertical28: ImageVector
  get() {
    if (_flipVertical28 != null) {
      return _flipVertical28!!
    }
    _flipVertical28 = fluentIcon(name = "Filled.FlipVertical28", 28f) {
      materialPath {
          moveTo(23.543F, 2.16F)
          curveTo(23.828F, 2.344F, 24.0F, 2.66F, 24.0F, 3.0F)
          verticalLineToRelative(9.0F)
          curveToRelative(0.0F, 0.552F, -0.448F, 1.0F, -1.0F, 1.0F)
          horizontalLineTo(3.0F)
          curveToRelative(-0.471F, 0.0F, -0.879F, -0.33F, -0.978F, -0.79F)
          curveToRelative(-0.099F, -0.461F, 0.138F, -0.929F, 0.568F, -1.122F)
          lineToRelative(20.0F, -9.0F)
          curveToRelative(0.31F, -0.14F, 0.668F, -0.112F, 0.953F, 0.072F)
          close()
          moveTo(7.66F, 11.0F)
          horizontalLineTo(22.0F)
          verticalLineTo(4.547F)
          lineTo(7.66F, 11.0F)
          close()
          moveTo(24.0F, 25.25F)
          curveToRelative(0.0F, 0.256F, -0.13F, 0.494F, -0.346F, 0.632F)
          curveToRelative(-0.216F, 0.138F, -0.487F, 0.156F, -0.719F, 0.048F)
          lineToRelative(-20.5F, -9.5F)
          curveToRelative(-0.32F, -0.148F, -0.493F, -0.498F, -0.417F, -0.841F)
          curveTo(2.094F, 15.245F, 2.398F, 15.0F, 2.75F, 15.0F)
          horizontalLineToRelative(20.5F)
          curveToRelative(0.415F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          verticalLineToRelative(9.5F)
          close()        
      }
    }
    return _flipVertical28!!
  }

private var _flipVertical28: ImageVector? = null
