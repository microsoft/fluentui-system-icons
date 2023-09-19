package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Temperature48: ImageVector
  get() {
    if (_temperature48 != null) {
      return _temperature48!!
    }
    _temperature48 = fluentIcon(name = "Regular.Temperature48", 48f) {
      materialPath {
          moveTo(24.0F, 8.5F)
          curveToRelative(-1.933F, 0.0F, -3.5F, 1.567F, -3.5F, 3.5F)
          verticalLineToRelative(15.787F)
          lineToRelative(-0.458F, 0.376F)
          curveTo(18.641F, 29.31F, 17.75F, 31.05F, 17.75F, 33.0F)
          curveToRelative(0.0F, 3.452F, 2.798F, 6.25F, 6.25F, 6.25F)
          reflectiveCurveToRelative(6.25F, -2.798F, 6.25F, -6.25F)
          curveToRelative(0.0F, -1.95F, -0.89F, -3.69F, -2.292F, -4.837F)
          lineTo(27.5F, 27.787F)
          verticalLineTo(12.0F)
          curveToRelative(0.0F, -1.933F, -1.567F, -3.5F, -3.5F, -3.5F)
          close()
          moveTo(18.0F, 12.0F)
          curveToRelative(0.0F, -3.314F, 2.686F, -6.0F, 6.0F, -6.0F)
          reflectiveCurveToRelative(6.0F, 2.686F, 6.0F, 6.0F)
          verticalLineToRelative(14.631F)
          curveToRelative(1.692F, 1.594F, 2.75F, 3.858F, 2.75F, 6.369F)
          curveToRelative(0.0F, 4.833F, -3.918F, 8.75F, -8.75F, 8.75F)
          reflectiveCurveToRelative(-8.75F, -3.917F, -8.75F, -8.75F)
          curveToRelative(0.0F, -2.51F, 1.059F, -4.775F, 2.75F, -6.369F)
          verticalLineTo(12.0F)
          close()
          moveToRelative(10.0F, 21.0F)
          curveToRelative(0.0F, 2.21F, -1.79F, 4.0F, -4.0F, 4.0F)
          reflectiveCurveToRelative(-4.0F, -1.79F, -4.0F, -4.0F)
          curveToRelative(0.0F, -1.773F, 1.153F, -3.276F, 2.75F, -3.8F)
          verticalLineTo(18.25F)
          curveToRelative(0.0F, -0.69F, 0.56F, -1.25F, 1.25F, -1.25F)
          reflectiveCurveToRelative(1.25F, 0.56F, 1.25F, 1.25F)
          verticalLineTo(29.2F)
          curveTo(26.847F, 29.723F, 28.0F, 31.226F, 28.0F, 33.0F)
          close()        
      }
    }
    return _temperature48!!
  }

private var _temperature48: ImageVector? = null
