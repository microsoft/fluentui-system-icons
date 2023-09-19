package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ArrowSquareDown24: ImageVector
  get() {
    if (_arrowSquareDown24 != null) {
      return _arrowSquareDown24!!
    }
    _arrowSquareDown24 = fluentIcon(name = "Filled.ArrowSquareDown24", 24f) {
      materialPath {
          moveTo(5.5F, 3.0F)
          curveTo(4.12F, 3.0F, 3.0F, 4.12F, 3.0F, 5.5F)
          verticalLineToRelative(13.0F)
          curveTo(3.0F, 19.88F, 4.12F, 21.0F, 5.5F, 21.0F)
          horizontalLineToRelative(13.0F)
          curveToRelative(1.38F, 0.0F, 2.5F, -1.12F, 2.5F, -2.5F)
          verticalLineToRelative(-13.0F)
          curveTo(21.0F, 4.12F, 19.88F, 3.0F, 18.5F, 3.0F)
          horizontalLineToRelative(-13.0F)
          close()
          moveToRelative(11.03F, 8.72F)
          curveToRelative(0.267F, 0.267F, 0.29F, 0.683F, 0.073F, 0.977F)
          lineTo(16.53F, 12.78F)
          lineToRelative(-4.0F, 4.0F)
          curveToRelative(-0.267F, 0.267F, -0.683F, 0.291F, -0.977F, 0.073F)
          lineToRelative(-0.084F, -0.072F)
          lineToRelative(-4.0F, -4.002F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.768F, 0.0F, -1.06F)
          curveToRelative(0.266F, -0.267F, 0.683F, -0.29F, 0.976F, -0.073F)
          lineTo(8.53F, 11.72F)
          lineToRelative(2.72F, 2.722F)
          verticalLineTo(7.75F)
          curveToRelative(0.0F, -0.38F, 0.282F, -0.694F, 0.648F, -0.743F)
          lineTo(12.0F, 7.0F)
          curveToRelative(0.38F, 0.0F, 0.694F, 0.282F, 0.743F, 0.648F)
          lineTo(12.75F, 7.75F)
          verticalLineToRelative(6.69F)
          lineToRelative(2.72F, -2.72F)
          curveToRelative(0.266F, -0.266F, 0.683F, -0.29F, 0.976F, -0.072F)
          lineToRelative(0.084F, 0.072F)
          close()        
      }
    }
    return _arrowSquareDown24!!
  }

private var _arrowSquareDown24: ImageVector? = null
