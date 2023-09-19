package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.DocumentFooter24: ImageVector
  get() {
    if (_documentFooter24 != null) {
      return _documentFooter24!!
    }
    _documentFooter24 = fluentIcon(name = "Regular.DocumentFooter24", 24f) {
      materialPath {
          moveTo(8.501F, 16.0F)
          curveToRelative(-0.828F, 0.0F, -1.5F, 0.672F, -1.5F, 1.5F)
          curveToRelative(0.0F, 0.829F, 0.672F, 1.5F, 1.5F, 1.5F)
          horizontalLineToRelative(7.0F)
          curveToRelative(0.829F, 0.0F, 1.5F, -0.671F, 1.5F, -1.5F)
          curveToRelative(0.0F, -0.828F, -0.671F, -1.5F, -1.5F, -1.5F)
          horizontalLineToRelative(-7.0F)
          close()
          moveToRelative(11.49F, -11.908F)
          curveToRelative(-0.08F, -1.17F, -1.054F, -2.096F, -2.245F, -2.096F)
          horizontalLineToRelative(-11.5F)
          lineTo(6.092F, 2.001F)
          curveToRelative(-1.17F, 0.08F, -2.096F, 1.054F, -2.096F, 2.245F)
          verticalLineToRelative(15.498F)
          lineToRelative(0.005F, 0.154F)
          curveToRelative(0.08F, 1.171F, 1.054F, 2.096F, 2.245F, 2.096F)
          horizontalLineToRelative(11.5F)
          lineTo(17.9F, 21.99F)
          curveToRelative(1.17F, -0.08F, 2.096F, -1.054F, 2.096F, -2.245F)
          verticalLineTo(4.246F)
          lineToRelative(-0.005F, -0.154F)
          close()
          moveTo(6.246F, 3.496F)
          horizontalLineToRelative(11.5F)
          lineToRelative(0.102F, 0.007F)
          curveToRelative(0.366F, 0.05F, 0.648F, 0.363F, 0.648F, 0.743F)
          verticalLineToRelative(15.498F)
          lineToRelative(-0.007F, 0.102F)
          curveToRelative(-0.05F, 0.366F, -0.363F, 0.648F, -0.743F, 0.648F)
          horizontalLineToRelative(-11.5F)
          lineToRelative(-0.102F, -0.007F)
          curveToRelative(-0.366F, -0.05F, -0.648F, -0.363F, -0.648F, -0.743F)
          verticalLineTo(4.246F)
          lineToRelative(0.007F, -0.102F)
          curveToRelative(0.05F, -0.366F, 0.363F, -0.648F, 0.743F, -0.648F)
          close()        
      }
    }
    return _documentFooter24!!
  }

private var _documentFooter24: ImageVector? = null
