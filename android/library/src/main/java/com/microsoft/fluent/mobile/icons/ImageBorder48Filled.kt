package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.ImageBorder48: ImageVector
  get() {
    if (_imageBorder48 != null) {
      return _imageBorder48!!
    }
    _imageBorder48 = fluentIcon(name = "Filled.ImageBorder48", 48f) {
      materialPath {
          moveTo(21.348F, 25.098F)
          lineTo(14.5F, 31.947F)
          verticalLineTo(14.5F)
          horizontalLineToRelative(19.0F)
          verticalLineToRelative(17.447F)
          lineToRelative(-6.848F, -6.849F)
          curveToRelative(-1.465F, -1.464F, -3.84F, -1.464F, -5.304F, 0.0F)
          close()
          moveTo(29.0F, 16.5F)
          curveToRelative(-1.38F, 0.0F, -2.5F, 1.12F, -2.5F, 2.5F)
          reflectiveCurveToRelative(1.12F, 2.5F, 2.5F, 2.5F)
          reflectiveCurveToRelative(2.5F, -1.12F, 2.5F, -2.5F)
          reflectiveCurveToRelative(-1.12F, -2.5F, -2.5F, -2.5F)
          close()
          moveToRelative(-4.116F, 10.366F)
          lineToRelative(6.634F, 6.634F)
          horizontalLineTo(16.482F)
          lineToRelative(6.634F, -6.634F)
          curveToRelative(0.488F, -0.488F, 1.28F, -0.488F, 1.768F, 0.0F)
          close()
          moveTo(6.0F, 12.25F)
          curveTo(6.0F, 8.798F, 8.798F, 6.0F, 12.25F, 6.0F)
          horizontalLineToRelative(23.5F)
          curveTo(39.202F, 6.0F, 42.0F, 8.798F, 42.0F, 12.25F)
          verticalLineToRelative(23.5F)
          curveToRelative(0.0F, 3.452F, -2.798F, 6.25F, -6.25F, 6.25F)
          horizontalLineToRelative(-23.5F)
          curveTo(8.798F, 42.0F, 6.0F, 39.202F, 6.0F, 35.75F)
          verticalLineToRelative(-23.5F)
          close()
          moveTo(13.25F, 12.0F)
          curveTo(12.56F, 12.0F, 12.0F, 12.56F, 12.0F, 13.25F)
          verticalLineToRelative(21.5F)
          curveToRelative(0.0F, 0.69F, 0.56F, 1.25F, 1.25F, 1.25F)
          horizontalLineToRelative(21.5F)
          curveToRelative(0.69F, 0.0F, 1.25F, -0.56F, 1.25F, -1.25F)
          verticalLineToRelative(-21.5F)
          curveToRelative(0.0F, -0.69F, -0.56F, -1.25F, -1.25F, -1.25F)
          horizontalLineToRelative(-21.5F)
          close()        
      }
    }
    return _imageBorder48!!
  }

private var _imageBorder48: ImageVector? = null
