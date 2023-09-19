package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.New16: ImageVector
  get() {
    if (_new16 != null) {
      return _new16!!
    }
    _new16 = fluentIcon(name = "Filled.New16", 16f) {
      materialPath {
          moveTo(3.75F, 10.999F)
          horizontalLineToRelative(4.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.335F, 0.75F, 0.75F)
          curveToRelative(0.0F, 0.38F, -0.282F, 0.693F, -0.648F, 0.743F)
          lineTo(8.25F, 12.499F)
          horizontalLineToRelative(-4.5F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          curveToRelative(0.0F, -0.38F, 0.282F, -0.694F, 0.648F, -0.743F)
          lineToRelative(0.102F, -0.007F)
          horizontalLineToRelative(4.5F)
          close()
          moveToRelative(1.47F, -5.78F)
          curveToRelative(0.266F, -0.266F, 0.683F, -0.29F, 0.976F, -0.072F)
          lineTo(6.28F, 5.22F)
          lineToRelative(3.5F, 3.5F)
          curveToRelative(0.293F, 0.293F, 0.293F, 0.767F, 0.0F, 1.06F)
          curveToRelative(-0.266F, 0.267F, -0.683F, 0.29F, -0.976F, 0.073F)
          lineTo(8.72F, 9.78F)
          lineToRelative(-3.5F, -3.5F)
          curveToRelative(-0.293F, -0.293F, -0.293F, -0.767F, 0.0F, -1.06F)
          close()
          moveTo(11.75F, 3.0F)
          curveToRelative(0.38F, 0.0F, 0.694F, 0.282F, 0.743F, 0.648F)
          lineTo(12.5F, 3.75F)
          verticalLineToRelative(4.5F)
          curveTo(12.5F, 8.664F, 12.164F, 9.0F, 11.75F, 9.0F)
          curveToRelative(-0.38F, 0.0F, -0.694F, -0.282F, -0.743F, -0.648F)
          lineTo(11.0F, 8.25F)
          verticalLineToRelative(-4.5F)
          curveTo(11.0F, 3.336F, 11.336F, 3.0F, 11.75F, 3.0F)
          close()        
      }
    }
    return _new16!!
  }

private var _new16: ImageVector? = null
