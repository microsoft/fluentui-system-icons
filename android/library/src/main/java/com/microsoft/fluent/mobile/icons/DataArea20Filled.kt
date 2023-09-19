package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DataArea20: ImageVector
  get() {
    if (_dataArea20 != null) {
      return _dataArea20!!
    }
    _dataArea20 = fluentIcon(name = "Filled.DataArea20", 20f) {
      materialPath {
          moveTo(3.0F, 2.489F)
          curveTo(2.994F, 2.218F, 2.772F, 2.0F, 2.5F, 2.0F)
          curveTo(2.224F, 2.0F, 2.0F, 2.224F, 2.0F, 2.5F)
          verticalLineToRelative(15.0F)
          curveTo(2.0F, 17.776F, 2.224F, 18.0F, 2.5F, 18.0F)
          horizontalLineToRelative(15.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveTo(17.776F, 17.0F, 17.5F, 17.0F)
          horizontalLineTo(3.0F)
          verticalLineTo(2.489F)
          close()
          moveTo(16.0F, 16.0F)
          verticalLineTo(5.5F)
          curveToRelative(0.0F, -0.192F, -0.11F, -0.367F, -0.283F, -0.45F)
          curveToRelative(-0.174F, -0.084F, -0.38F, -0.06F, -0.53F, 0.06F)
          lineToRelative(-4.734F, 3.787F)
          lineToRelative(-3.205F, -1.831F)
          curveToRelative(-0.138F, -0.08F, -0.306F, -0.087F, -0.45F, -0.023F)
          lineTo(4.0F, 8.286F)
          verticalLineTo(16.0F)
          horizontalLineToRelative(12.0F)
          close()        
      }
    }
    return _dataArea20!!
  }

private var _dataArea20: ImageVector? = null
