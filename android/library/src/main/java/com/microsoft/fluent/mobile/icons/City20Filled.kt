package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.City20: ImageVector
  get() {
    if (_city20 != null) {
      return _city20!!
    }
    _city20 = fluentIcon(name = "Filled.City20", 20f) {
      materialPath {
          moveTo(11.0F, 2.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          verticalLineTo(4.0F)
          lineToRelative(1.0F, 0.001F)
          curveToRelative(0.828F, 0.0F, 1.5F, 0.672F, 1.5F, 1.5F)
          verticalLineToRelative(2.553F)
          curveToRelative(-1.141F, 0.232F, -2.0F, 1.24F, -2.0F, 2.45F)
          verticalLineTo(18.0F)
          horizontalLineToRelative(-2.0F)
          verticalLineTo(8.004F)
          curveToRelative(0.0F, -1.104F, -0.895F, -2.0F, -2.0F, -2.0F)
          verticalLineTo(5.501F)
          curveToRelative(0.0F, -0.828F, 0.672F, -1.5F, 1.5F, -1.5F)
          horizontalLineToRelative(1.0F)
          verticalLineTo(2.5F)
          curveTo(10.5F, 2.224F, 10.724F, 2.0F, 11.0F, 2.0F)
          close()
          moveTo(8.644F, 7.239F)
          curveToRelative(-0.28F, -0.197F, -0.48F, -0.204F, -0.648F, -0.153F)
          curveTo(7.95F, 7.102F, 7.906F, 7.123F, 7.861F, 7.15F)
          lineTo(4.729F, 9.03F)
          curveTo(4.277F, 9.3F, 4.0F, 9.79F, 4.0F, 10.316F)
          verticalLineTo(16.5F)
          curveTo(4.0F, 17.328F, 4.672F, 18.0F, 5.5F, 18.0F)
          horizontalLineTo(9.0F)
          verticalLineTo(8.004F)
          curveTo(9.0F, 7.697F, 8.862F, 7.422F, 8.644F, 7.24F)
          close()
          moveTo(15.5F, 9.0F)
          verticalLineToRelative(0.004F)
          horizontalLineToRelative(-1.0F)
          curveToRelative(-0.828F, 0.0F, -1.5F, 0.672F, -1.5F, 1.5F)
          verticalLineTo(18.0F)
          horizontalLineToRelative(3.5F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-6.0F)
          curveTo(18.0F, 9.672F, 17.328F, 9.0F, 16.5F, 9.0F)
          horizontalLineToRelative(-1.0F)
          close()        
      }
    }
    return _city20!!
  }

private var _city20: ImageVector? = null
