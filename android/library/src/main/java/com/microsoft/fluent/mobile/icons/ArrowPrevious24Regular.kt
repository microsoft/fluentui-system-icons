package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.ArrowPrevious24: ImageVector
  get() {
    if (_arrowPrevious24 != null) {
      return _arrowPrevious24!!
    }
    _arrowPrevious24 = fluentIcon(name = "Regular.ArrowPrevious24", 24f) {
      materialPath {
          moveTo(5.75F, 3.0F)
          curveTo(5.37F, 3.0F, 5.056F, 3.282F, 5.007F, 3.648F)
          lineTo(5.0F, 3.75F)
          verticalLineToRelative(16.5F)
          curveTo(5.0F, 20.664F, 5.336F, 21.0F, 5.75F, 21.0F)
          curveToRelative(0.38F, 0.0F, 0.694F, -0.282F, 0.743F, -0.648F)
          lineTo(6.5F, 20.25F)
          verticalLineTo(3.75F)
          curveTo(6.5F, 3.336F, 6.164F, 3.0F, 5.75F, 3.0F)
          close()
          moveToRelative(13.03F, 0.22F)
          curveToRelative(-0.266F, -0.267F, -0.683F, -0.29F, -0.976F, -0.073F)
          lineTo(17.72F, 3.22F)
          lineToRelative(-8.25F, 8.25F)
          curveToRelative(-0.267F, 0.266F, -0.29F, 0.683F, -0.073F, 0.976F)
          lineTo(9.47F, 12.53F)
          lineToRelative(8.25F, 8.25F)
          curveToRelative(0.293F, 0.293F, 0.767F, 0.293F, 1.06F, 0.0F)
          curveToRelative(0.267F, -0.266F, 0.29F, -0.683F, 0.073F, -0.976F)
          lineTo(18.78F, 19.72F)
          lineTo(11.06F, 12.0F)
          lineToRelative(7.72F, -7.72F)
          curveToRelative(0.293F, -0.293F, 0.293F, -0.767F, 0.0F, -1.06F)
          close()        
      }
    }
    return _arrowPrevious24!!
  }

private var _arrowPrevious24: ImageVector? = null
