package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DocumentFolder24: ImageVector
  get() {
    if (_documentFolder24 != null) {
      return _documentFolder24!!
    }
    _documentFolder24 = fluentIcon(name = "Filled.DocumentFolder24", 24f) {
      materialPath {
          moveTo(18.5F, 6.75F)
          lineToRelative(-0.003F, -2.123F)
          curveTo(19.373F, 4.935F, 20.0F, 5.769F, 20.0F, 6.75F)
          verticalLineToRelative(7.5F)
          curveTo(19.615F, 14.088F, 19.193F, 14.0F, 18.75F, 14.0F)
          horizontalLineTo(18.5F)
          verticalLineTo(6.75F)
          close()
          moveTo(4.0F, 4.25F)
          verticalLineToRelative(3.0F)
          curveTo(4.385F, 7.088F, 4.807F, 7.0F, 5.25F, 7.0F)
          horizontalLineToRelative(2.846F)
          curveTo(9.0F, 7.0F, 9.863F, 7.376F, 10.477F, 8.039F)
          lineTo(16.014F, 14.0F)
          horizontalLineTo(17.5F)
          verticalLineTo(4.25F)
          curveTo(17.5F, 3.007F, 16.493F, 2.0F, 15.25F, 2.0F)
          horizontalLineToRelative(-9.0F)
          curveTo(5.007F, 2.0F, 4.0F, 3.007F, 4.0F, 4.25F)
          close()
          moveTo(5.25F, 8.0F)
          curveTo(4.007F, 8.0F, 3.0F, 9.007F, 3.0F, 10.25F)
          verticalLineToRelative(8.5F)
          curveTo(3.0F, 20.545F, 4.455F, 22.0F, 6.25F, 22.0F)
          horizontalLineToRelative(11.5F)
          curveToRelative(1.795F, 0.0F, 3.25F, -1.455F, 3.25F, -3.25F)
          verticalLineToRelative(-1.5F)
          curveToRelative(0.0F, -1.243F, -1.007F, -2.25F, -2.25F, -2.25F)
          horizontalLineToRelative(-2.846F)
          curveToRelative(-0.208F, 0.0F, -0.408F, -0.087F, -0.55F, -0.24F)
          lineToRelative(-5.61F, -6.04F)
          curveTo(9.32F, 8.261F, 8.723F, 8.0F, 8.097F, 8.0F)
          horizontalLineTo(5.25F)
          close()        
      }
    }
    return _documentFolder24!!
  }

private var _documentFolder24: ImageVector? = null
