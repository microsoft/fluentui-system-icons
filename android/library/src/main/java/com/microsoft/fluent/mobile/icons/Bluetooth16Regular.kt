package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Bluetooth16: ImageVector
  get() {
    if (_bluetooth16 != null) {
      return _bluetooth16!!
    }
    _bluetooth16 = fluentIcon(name = "Regular.Bluetooth16", 16f) {
      materialPath {
          moveTo(7.285F, 1.048F)
          curveToRelative(0.174F, -0.082F, 0.38F, -0.058F, 0.53F, 0.064F)
          lineToRelative(4.0F, 3.25F)
          curveTo(11.932F, 4.457F, 12.0F, 4.599F, 12.0F, 4.75F)
          curveToRelative(0.0F, 0.15F, -0.068F, 0.293F, -0.185F, 0.388F)
          lineTo(8.293F, 8.0F)
          lineToRelative(3.522F, 2.862F)
          curveTo(11.932F, 10.957F, 12.0F, 11.099F, 12.0F, 11.25F)
          curveToRelative(0.0F, 0.15F, -0.068F, 0.293F, -0.185F, 0.388F)
          lineToRelative(-4.0F, 3.25F)
          curveToRelative(-0.15F, 0.122F, -0.356F, 0.146F, -0.53F, 0.063F)
          curveTo(7.111F, 14.87F, 7.0F, 14.694F, 7.0F, 14.5F)
          verticalLineTo(9.05F)
          lineToRelative(-3.185F, 2.588F)
          curveToRelative(-0.214F, 0.174F, -0.529F, 0.142F, -0.703F, -0.073F)
          curveToRelative(-0.174F, -0.214F, -0.142F, -0.529F, 0.073F, -0.703F)
          lineTo(6.707F, 8.0F)
          lineTo(3.185F, 5.138F)
          curveTo(2.97F, 4.964F, 2.938F, 4.65F, 3.112F, 4.435F)
          curveTo(3.286F, 4.22F, 3.601F, 4.188F, 3.815F, 4.362F)
          lineTo(7.0F, 6.949F)
          verticalLineTo(1.5F)
          curveToRelative(0.0F, -0.193F, 0.111F, -0.369F, 0.285F, -0.452F)
          close()
          moveTo(8.0F, 9.05F)
          verticalLineToRelative(4.4F)
          lineToRelative(2.707F, -2.2F)
          lineTo(8.0F, 9.05F)
          close()
          moveToRelative(0.0F, -2.1F)
          lineToRelative(2.707F, -2.2F)
          lineTo(8.0F, 2.55F)
          verticalLineToRelative(4.4F)
          close()        
      }
    }
    return _bluetooth16!!
  }

private var _bluetooth16: ImageVector? = null
