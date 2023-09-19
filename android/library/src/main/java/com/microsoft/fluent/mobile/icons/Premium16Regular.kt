package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Premium16: ImageVector
  get() {
    if (_premium16 != null) {
      return _premium16!!
    }
    _premium16 = fluentIcon(name = "Regular.Premium16", 16f) {
      materialPath {
          moveTo(3.5F, 2.0F)
          curveTo(3.31F, 2.0F, 3.138F, 2.107F, 3.053F, 2.276F)
          lineToRelative(-2.0F, 4.0F)
          curveToRelative(-0.088F, 0.176F, -0.065F, 0.387F, 0.059F, 0.54F)
          lineToRelative(6.5F, 8.0F)
          curveTo(7.707F, 14.931F, 7.849F, 15.0F, 8.0F, 15.0F)
          curveToRelative(0.15F, 0.0F, 0.293F, -0.068F, 0.388F, -0.185F)
          lineToRelative(6.5F, -8.0F)
          curveToRelative(0.124F, -0.152F, 0.147F, -0.363F, 0.06F, -0.539F)
          lineToRelative(-2.0F, -4.0F)
          curveTo(12.862F, 2.107F, 12.688F, 2.0F, 12.5F, 2.0F)
          horizontalLineToRelative(-9.0F)
          close()
          moveTo(2.309F, 6.0F)
          lineToRelative(1.5F, -3.0F)
          horizontalLineToRelative(2.05F)
          lineTo(5.11F, 6.0F)
          horizontalLineToRelative(-2.8F)
          close()
          moveTo(2.55F, 7.0F)
          horizontalLineToRelative(2.583F)
          lineToRelative(1.613F, 5.164F)
          lineTo(2.55F, 7.0F)
          close()
          moveToRelative(3.63F, 0.0F)
          horizontalLineToRelative(3.64F)
          lineTo(8.0F, 12.823F)
          lineTo(6.18F, 7.0F)
          close()
          moveToRelative(4.688F, 0.0F)
          horizontalLineToRelative(2.582F)
          lineToRelative(-4.196F, 5.164F)
          lineTo(10.868F, 7.0F)
          close()
          moveToRelative(2.823F, -1.0F)
          horizontalLineToRelative(-2.8F)
          lineToRelative(-0.75F, -3.0F)
          horizontalLineToRelative(2.05F)
          lineToRelative(1.5F, 3.0F)
          close()
          moveTo(9.86F, 6.0F)
          horizontalLineTo(6.14F)
          lineToRelative(0.75F, -3.0F)
          horizontalLineToRelative(2.22F)
          lineToRelative(0.75F, 3.0F)
          close()        
      }
    }
    return _premium16!!
  }

private var _premium16: ImageVector? = null
