package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Reward20: ImageVector
  get() {
    if (_reward20 != null) {
      return _reward20!!
    }
    _reward20 = fluentIcon(name = "Filled.Reward20", 20f) {
      materialPath {
          moveTo(15.526F, 3.0F)
          curveToRelative(0.829F, 0.0F, 1.5F, 0.672F, 1.5F, 1.5F)
          verticalLineToRelative(1.394F)
          curveToRelative(0.0F, 0.94F, -0.526F, 1.8F, -1.362F, 2.227F)
          lineToRelative(-4.19F, 2.14F)
          curveToRelative(1.226F, 0.556F, 2.078F, 1.79F, 2.078F, 3.223F)
          curveToRelative(0.0F, 1.954F, -1.584F, 3.539F, -3.539F, 3.539F)
          curveToRelative(-1.954F, 0.0F, -3.538F, -1.585F, -3.538F, -3.539F)
          curveToRelative(0.0F, -1.433F, 0.852F, -2.667F, 2.077F, -3.224F)
          lineTo(4.363F, 8.12F)
          curveToRelative(-0.78F, -0.398F, -1.29F, -1.174F, -1.356F, -2.039F)
          lineTo(3.001F, 5.894F)
          verticalLineTo(4.5F)
          curveTo(3.0F, 3.672F, 3.671F, 3.0F, 4.5F, 3.0F)
          horizontalLineToRelative(11.025F)
          close()
          moveToRelative(-5.513F, 7.945F)
          curveToRelative(-1.402F, 0.0F, -2.538F, 1.137F, -2.538F, 2.539F)
          curveToRelative(0.0F, 1.402F, 1.136F, 2.539F, 2.538F, 2.539F)
          reflectiveCurveToRelative(2.539F, -1.137F, 2.539F, -2.539F)
          curveToRelative(0.0F, -1.402F, -1.137F, -2.539F, -2.539F, -2.539F)
          close()
          moveTo(12.616F, 4.0F)
          horizontalLineToRelative(-5.21F)
          verticalLineToRelative(4.553F)
          lineToRelative(2.38F, 1.216F)
          curveToRelative(0.143F, 0.073F, 0.312F, 0.073F, 0.455F, 0.0F)
          lineToRelative(2.375F, -1.214F)
          verticalLineTo(3.999F)
          close()        
      }
    }
    return _reward20!!
  }

private var _reward20: ImageVector? = null
