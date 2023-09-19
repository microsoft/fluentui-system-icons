package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Reward16: ImageVector
  get() {
    if (_reward16 != null) {
      return _reward16!!
    }
    _reward16 = fluentIcon(name = "Filled.Reward16", 16f) {
      materialPath {
          moveTo(3.5F, 2.0F)
          curveTo(2.672F, 2.0F, 2.0F, 2.672F, 2.0F, 3.5F)
          verticalLineToRelative(1.192F)
          curveToRelative(0.0F, 0.52F, 0.27F, 1.003F, 0.711F, 1.276F)
          lineToRelative(3.866F, 2.39F)
          curveTo(5.638F, 8.865F, 5.0F, 9.858F, 5.0F, 11.0F)
          curveToRelative(0.0F, 1.657F, 1.343F, 3.0F, 3.0F, 3.0F)
          reflectiveCurveToRelative(3.0F, -1.343F, 3.0F, -3.0F)
          curveToRelative(0.0F, -1.142F, -0.638F, -2.135F, -1.577F, -2.642F)
          lineToRelative(3.866F, -2.39F)
          curveTo(13.73F, 5.695F, 14.0F, 5.212F, 14.0F, 4.692F)
          verticalLineTo(3.5F)
          curveTo(14.0F, 2.672F, 13.328F, 2.0F, 12.5F, 2.0F)
          horizontalLineToRelative(-9.0F)
          close()
          moveTo(6.0F, 6.826F)
          verticalLineTo(3.0F)
          horizontalLineToRelative(4.0F)
          verticalLineToRelative(3.826F)
          lineTo(8.263F, 7.9F)
          curveTo(8.102F, 8.0F, 7.898F, 8.0F, 7.737F, 7.9F)
          lineTo(6.0F, 6.826F)
          close()
          moveTo(8.0F, 9.0F)
          curveToRelative(1.105F, 0.0F, 2.0F, 0.895F, 2.0F, 2.0F)
          reflectiveCurveToRelative(-0.895F, 2.0F, -2.0F, 2.0F)
          reflectiveCurveToRelative(-2.0F, -0.895F, -2.0F, -2.0F)
          reflectiveCurveToRelative(0.895F, -2.0F, 2.0F, -2.0F)
          close()        
      }
    }
    return _reward16!!
  }

private var _reward16: ImageVector? = null
