package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Premium16: ImageVector
  get() {
    if (_premium16 != null) {
      return _premium16!!
    }
    _premium16 = fluentIcon(name = "Filled.Premium16", 16f) {
      materialPath {
          moveTo(3.75F, 2.0F)
          curveTo(3.473F, 2.0F, 3.219F, 2.153F, 3.088F, 2.397F)
          lineToRelative(-2.0F, 3.75F)
          curveTo(0.948F, 6.41F, 0.976F, 6.728F, 1.16F, 6.962F)
          lineToRelative(6.25F, 8.0F)
          curveTo(7.551F, 15.144F, 7.769F, 15.25F, 8.0F, 15.25F)
          curveToRelative(0.23F, 0.0F, 0.449F, -0.106F, 0.591F, -0.288F)
          lineToRelative(6.25F, -8.0F)
          curveToRelative(0.183F, -0.234F, 0.21F, -0.553F, 0.07F, -0.815F)
          lineToRelative(-2.0F, -3.75F)
          curveTo(12.782F, 2.153F, 12.528F, 2.0F, 12.25F, 2.0F)
          horizontalLineToRelative(-8.5F)
          close()
          moveTo(2.867F, 6.0F)
          lineTo(4.2F, 3.5F)
          horizontalLineToRelative(1.277F)
          lineTo(4.852F, 6.0F)
          horizontalLineTo(2.867F)
          close()
          moveToRelative(0.616F, 1.5F)
          horizontalLineToRelative(1.544F)
          lineToRelative(1.029F, 3.293F)
          lineTo(3.483F, 7.5F)
          close()
          moveToRelative(3.115F, 0.0F)
          horizontalLineToRelative(2.804F)
          lineTo(8.0F, 11.986F)
          lineTo(6.598F, 7.5F)
          close()
          moveToRelative(4.375F, 0.0F)
          horizontalLineToRelative(1.544F)
          lineToRelative(-2.573F, 3.293F)
          lineToRelative(1.03F, -3.293F)
          close()
          moveToRelative(2.16F, -1.5F)
          horizontalLineToRelative(-1.985F)
          lineToRelative(-0.625F, -2.5F)
          horizontalLineTo(11.8F)
          lineTo(13.133F, 6.0F)
          close()
          moveTo(9.602F, 6.0F)
          horizontalLineTo(6.398F)
          lineToRelative(0.625F, -2.5F)
          horizontalLineToRelative(1.954F)
          lineTo(9.602F, 6.0F)
          close()        
      }
    }
    return _premium16!!
  }

private var _premium16: ImageVector? = null
