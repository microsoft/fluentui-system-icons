package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Tent16: ImageVector
  get() {
    if (_tent16 != null) {
      return _tent16!!
    }
    _tent16 = fluentIcon(name = "Filled.Tent16", 16f) {
      materialPath {
          moveTo(8.405F, 1.353F)
          curveTo(8.31F, 1.239F, 8.17F, 1.173F, 8.021F, 1.173F)
          curveToRelative(-0.148F, 0.0F, -0.289F, 0.066F, -0.384F, 0.18F)
          curveToRelative(-1.041F, 1.25F, -3.102F, 2.737F, -4.288F, 3.4F)
          curveTo(3.212F, 4.829F, 3.12F, 4.966F, 3.098F, 5.12F)
          lineTo(2.15F, 12.0F)
          horizontalLineTo(1.486F)
          curveToRelative(-0.276F, 0.0F, -0.5F, 0.224F, -0.5F, 0.5F)
          reflectiveCurveTo(1.21F, 13.0F, 1.486F, 13.0F)
          horizontalLineTo(14.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(14.776F, 12.0F, 14.5F, 12.0F)
          horizontalLineToRelative(-0.607F)
          lineToRelative(-0.948F, -6.879F)
          curveToRelative(-0.022F, -0.155F, -0.115F, -0.292F, -0.252F, -0.368F)
          curveToRelative(-1.185F, -0.663F, -3.246F, -2.15F, -4.288F, -3.4F)
          close()
          moveTo(5.944F, 12.0F)
          curveToRelative(0.696F, -1.027F, 1.41F, -2.338F, 2.059F, -4.342F)
          curveToRelative(0.59F, 1.815F, 1.246F, 3.108F, 2.06F, 4.342F)
          horizontalLineToRelative(-4.12F)
          close()        
      }
    }
    return _tent16!!
  }

private var _tent16: ImageVector? = null
