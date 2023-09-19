package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Desktop24: ImageVector
  get() {
    if (_desktop24 != null) {
      return _desktop24!!
    }
    _desktop24 = fluentIcon(name = "Regular.Desktop24", 24f) {
      materialPath {
          moveTo(6.75F, 22.0F)
          curveTo(6.336F, 22.0F, 6.0F, 21.665F, 6.0F, 21.25F)
          curveToRelative(0.0F, -0.38F, 0.282F, -0.693F, 0.648F, -0.743F)
          lineTo(6.75F, 20.5F)
          horizontalLineToRelative(1.749F)
          verticalLineToRelative(-2.498F)
          horizontalLineTo(4.25F)
          curveToRelative(-1.19F, 0.0F, -2.166F, -0.925F, -2.245F, -2.096F)
          lineTo(2.0F, 15.752F)
          verticalLineTo(5.25F)
          curveToRelative(0.0F, -1.19F, 0.925F, -2.166F, 2.096F, -2.245F)
          lineTo(4.25F, 3.0F)
          horizontalLineToRelative(15.499F)
          curveToRelative(1.19F, 0.0F, 2.166F, 0.925F, 2.245F, 2.096F)
          lineToRelative(0.005F, 0.154F)
          verticalLineToRelative(10.502F)
          curveToRelative(0.0F, 1.191F, -0.925F, 2.166F, -2.096F, 2.245F)
          lineToRelative(-0.154F, 0.005F)
          horizontalLineToRelative(-4.25F)
          verticalLineTo(20.5F)
          horizontalLineToRelative(1.751F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.336F, 0.75F, 0.75F)
          curveToRelative(0.0F, 0.38F, -0.282F, 0.694F, -0.648F, 0.744F)
          lineTo(17.25F, 22.0F)
          horizontalLineTo(6.75F)
          close()
          moveToRelative(7.248F, -3.998F)
          horizontalLineToRelative(-4.0F)
          lineTo(9.999F, 20.5F)
          horizontalLineToRelative(4.0F)
          lineToRelative(-0.001F, -2.498F)
          close()
          moveTo(19.748F, 4.5F)
          horizontalLineTo(4.25F)
          curveToRelative(-0.38F, 0.0F, -0.693F, 0.282F, -0.743F, 0.648F)
          lineTo(3.5F, 5.25F)
          verticalLineToRelative(10.502F)
          curveToRelative(0.0F, 0.38F, 0.282F, 0.694F, 0.648F, 0.743F)
          lineToRelative(0.102F, 0.007F)
          horizontalLineToRelative(15.499F)
          curveToRelative(0.38F, 0.0F, 0.693F, -0.282F, 0.743F, -0.648F)
          lineToRelative(0.007F, -0.102F)
          verticalLineTo(5.25F)
          curveToRelative(0.0F, -0.38F, -0.282F, -0.694F, -0.648F, -0.743F)
          lineTo(19.749F, 4.5F)
          close()        
      }
    }
    return _desktop24!!
  }

private var _desktop24: ImageVector? = null
