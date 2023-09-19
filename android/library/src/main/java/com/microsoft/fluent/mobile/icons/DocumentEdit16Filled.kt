package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DocumentEdit16: ImageVector
  get() {
    if (_documentEdit16 != null) {
      return _documentEdit16!!
    }
    _documentEdit16 = fluentIcon(name = "Filled.DocumentEdit16", 16f) {
      materialPath {
          moveTo(8.0F, 1.0F)
          verticalLineToRelative(3.5F)
          curveTo(8.0F, 5.327F, 8.67F, 6.0F, 9.498F, 6.0F)
          horizontalLineToRelative(3.5F)
          verticalLineToRelative(1.035F)
          curveToRelative(-0.502F, 0.087F, -0.983F, 0.325F, -1.37F, 0.712F)
          lineToRelative(-4.287F, 4.287F)
          curveToRelative(-0.484F, 0.484F, -0.828F, 1.09F, -0.994F, 1.755F)
          lineToRelative(-0.302F, 1.209F)
          horizontalLineTo(4.5F)
          curveToRelative(-0.829F, 0.0F, -1.5F, -0.672F, -1.5F, -1.5F)
          verticalLineTo(2.5F)
          curveTo(3.0F, 1.67F, 3.671F, 1.0F, 4.5F, 1.0F)
          horizontalLineTo(8.0F)
          close()
          moveToRelative(4.998F, 7.06F)
          curveToRelative(-0.242F, 0.071F, -0.47F, 0.203F, -0.662F, 0.394F)
          lineTo(8.05F, 12.74F)
          curveToRelative(-0.356F, 0.356F, -0.609F, 0.802F, -0.73F, 1.29F)
          lineToRelative(-0.303F, 1.211F)
          curveToRelative(-0.112F, 0.447F, 0.292F, 0.85F, 0.739F, 0.74F)
          lineToRelative(1.21F, -0.303F)
          curveToRelative(0.489F, -0.123F, 0.934F, -0.375F, 1.29F, -0.73F)
          lineToRelative(4.288F, -4.288F)
          curveToRelative(0.61F, -0.61F, 0.61F, -1.598F, 0.0F, -2.207F)
          curveToRelative(-0.418F, -0.418F, -1.015F, -0.55F, -1.545F, -0.394F)
          close()
          moveToRelative(-4.0F, -6.81F)
          verticalLineTo(4.5F)
          curveToRelative(0.0F, 0.276F, 0.225F, 0.5F, 0.5F, 0.5F)
          horizontalLineToRelative(3.25F)
          lineToRelative(-3.75F, -3.75F)
          close()        
      }
    }
    return _documentEdit16!!
  }

private var _documentEdit16: ImageVector? = null
