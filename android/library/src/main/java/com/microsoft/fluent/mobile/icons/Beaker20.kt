package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Beaker20: ImageVector
  get() {
    if (_beaker20 != null) {
      return _beaker20!!
    }
    _beaker20 = fluentIcon(name = "Filled.Beaker20", 20f) {
      materialPath {
          moveTo(7.25F, 4.0F)
          verticalLineToRelative(4.747F)
          curveToRelative(0.0F, 0.412F, -0.102F, 0.818F, -0.296F, 1.18F)
          lineTo(6.11F, 11.5F)
          horizontalLineToRelative(7.778F)
          lineToRelative(-0.843F, -1.572F)
          curveToRelative(-0.194F, -0.364F, -0.296F, -0.769F, -0.296F, -1.181F)
          verticalLineTo(4.0F)
          horizontalLineToRelative(0.75F)
          curveTo(13.776F, 4.0F, 14.0F, 3.776F, 14.0F, 3.5F)
          reflectiveCurveTo(13.776F, 3.0F, 13.5F, 3.0F)
          horizontalLineToRelative(-7.0F)
          curveTo(6.224F, 3.0F, 6.0F, 3.224F, 6.0F, 3.5F)
          reflectiveCurveTo(6.224F, 4.0F, 6.5F, 4.0F)
          horizontalLineToRelative(0.75F)
          close()
          moveToRelative(7.174F, 8.5F)
          horizontalLineTo(5.576F)
          lineToRelative(-1.228F, 2.292F)
          curveTo(3.813F, 15.79F, 4.536F, 17.0F, 5.67F, 17.0F)
          horizontalLineToRelative(8.66F)
          curveToRelative(1.133F, 0.0F, 1.857F, -1.21F, 1.322F, -2.208F)
          lineTo(14.424F, 12.5F)
          close()        
      }
    }
    return _beaker20!!
  }

private var _beaker20: ImageVector? = null
