package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Map24: ImageVector
  get() {
    if (_map24 != null) {
      return _map24!!
    }
    _map24 = fluentIcon(name = "Filled.Map24", 24f) {
      materialPath {
          moveTo(8.5F, 4.358F)
          verticalLineToRelative(12.465F)
          lineToRelative(-4.32F, 3.038F)
          curveToRelative(-0.467F, 0.33F, -1.101F, 0.034F, -1.174F, -0.509F)
          lineToRelative(-0.007F, -0.104F)
          verticalLineTo(8.615F)
          curveToRelative(0.0F, -0.209F, 0.087F, -0.407F, 0.238F, -0.548F)
          lineToRelative(0.08F, -0.065F)
          lineTo(8.5F, 4.358F)
          close()
          moveToRelative(12.494F, 0.29F)
          lineToRelative(0.007F, 0.104F)
          verticalLineToRelative(10.633F)
          curveToRelative(0.0F, 0.21F, -0.087F, 0.407F, -0.238F, 0.548F)
          lineToRelative(-0.08F, 0.065F)
          lineTo(15.5F, 19.64F)
          verticalLineTo(7.174F)
          lineToRelative(4.32F, -3.035F)
          curveToRelative(0.468F, -0.33F, 1.102F, -0.034F, 1.174F, 0.509F)
          close()
          moveTo(10.0F, 4.359F)
          lineToRelative(4.0F, 2.812F)
          verticalLineToRelative(12.467F)
          lineToRelative(-4.0F, -2.814F)
          verticalLineTo(4.359F)
          close()        
      }
    }
    return _map24!!
  }

private var _map24: ImageVector? = null
