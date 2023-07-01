package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Flash24: ImageVector
  get() {
    if (_flash24 != null) {
      return _flash24!!
    }
    _flash24 = fluentIcon(name = "Regular.Flash24", 24f) {
      materialPath {
          moveTo(7.425F, 2.83F)
          curveTo(7.602F, 2.332F, 8.074F, 2.0F, 8.603F, 2.0F)
          horizontalLineToRelative(6.453F)
          curveToRelative(0.853F, 0.0F, 1.456F, 0.836F, 1.186F, 1.645F)
          lineTo(14.79F, 8.0F)
          horizontalLineToRelative(3.96F)
          curveToRelative(1.103F, 0.0F, 1.665F, 1.327F, 0.897F, 2.12F)
          lineTo(8.586F, 21.536F)
          curveToRelative(-1.054F, 1.088F, -2.872F, 0.106F, -2.541F, -1.372F)
          lineToRelative(1.27F, -5.668F)
          lineToRelative(-1.57F, -0.006F)
          curveToRelative(-1.206F, -0.004F, -2.046F, -1.2F, -1.641F, -2.337F)
          lineTo(7.425F, 2.83F)
          close()
          moveTo(8.779F, 3.5F)
          lineToRelative(-3.262F, 9.156F)
          curveTo(5.459F, 12.82F, 5.579F, 12.99F, 5.75F, 12.99F)
          lineTo(8.253F, 13.0F)
          curveToRelative(0.227F, 0.0F, 0.441F, 0.105F, 0.583F, 0.282F)
          curveToRelative(0.142F, 0.178F, 0.195F, 0.41F, 0.146F, 0.632F)
          lineToRelative(-1.473F, 6.578F)
          lineTo(18.159F, 9.5F)
          horizontalLineToRelative(-4.41F)
          curveToRelative(-0.24F, 0.0F, -0.467F, -0.116F, -0.607F, -0.312F)
          curveToRelative(-0.141F, -0.195F, -0.18F, -0.447F, -0.104F, -0.675F)
          lineTo(14.71F, 3.5F)
          horizontalLineTo(8.78F)
          close()        
      }
    }
    return _flash24!!
  }

private var _flash24: ImageVector? = null
