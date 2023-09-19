package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ShieldError16: ImageVector
  get() {
    if (_shieldError16 != null) {
      return _shieldError16!!
    }
    _shieldError16 = fluentIcon(name = "Filled.ShieldError16", 16f) {
      materialPath {
          moveTo(8.355F, 2.147F)
          curveToRelative(-0.196F, -0.196F, -0.512F, -0.196F, -0.708F, 0.0F)
          curveTo(6.404F, 3.388F, 5.03F, 4.0F, 3.5F, 4.0F)
          curveTo(3.224F, 4.0F, 3.0F, 4.224F, 3.0F, 4.5F)
          verticalLineToRelative(3.001F)
          curveToRelative(0.0F, 3.219F, 1.641F, 5.407F, 4.842F, 6.473F)
          curveToRelative(0.103F, 0.035F, 0.214F, 0.035F, 0.316F, 0.0F)
          curveTo(11.358F, 12.908F, 13.0F, 10.72F, 13.0F, 7.501F)
          verticalLineTo(4.5F)
          curveTo(13.0F, 4.224F, 12.776F, 4.0F, 12.5F, 4.0F)
          curveToRelative(-1.531F, 0.0F, -2.905F, -0.61F, -4.145F, -1.853F)
          close()
          moveTo(8.5F, 5.5F)
          verticalLineToRelative(3.0F)
          curveTo(8.5F, 8.776F, 8.276F, 9.0F, 8.0F, 9.0F)
          reflectiveCurveTo(7.5F, 8.776F, 7.5F, 8.5F)
          verticalLineToRelative(-3.0F)
          curveTo(7.5F, 5.224F, 7.724F, 5.0F, 8.0F, 5.0F)
          reflectiveCurveToRelative(0.5F, 0.224F, 0.5F, 0.5F)
          close()
          moveToRelative(-0.5F, 6.0F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.336F, -0.75F, -0.75F)
          reflectiveCurveTo(7.586F, 10.0F, 8.0F, 10.0F)
          reflectiveCurveToRelative(0.75F, 0.336F, 0.75F, 0.75F)
          reflectiveCurveTo(8.414F, 11.5F, 8.0F, 11.5F)
          close()        
      }
    }
    return _shieldError16!!
  }

private var _shieldError16: ImageVector? = null
